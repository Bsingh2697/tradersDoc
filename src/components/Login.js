import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import Submissions from './Submissions';

function Login() {
const [data, setData] = useState({})
const [login, setLogin] = useState(false)

useEffect(()=>{
    console.log('CurrentUser');
    console.log(localStorage.getItem('CurrentUser'))
    if (localStorage.getItem('CurrentUser') !== null && localStorage.getItem('CurrentUser') !==undefined && localStorage.getItem('CurrentUser') !=="") 
    {
        setLogin(true)
        setData(JSON.parse(localStorage.getItem('UserData')))
    }
},[])

    const responseGoogle = (response) => {
        console.log(response);
        setData(response)
        setLogin(true)
        localStorage.setItem('CurrentUser',`${response.profileObj.googleId}`)
        localStorage.setItem('UserData',JSON.stringify(response))
    }
    return (
        <div className='loginSt'>
            {!login ? <h1>Login To upload docs</h1> : null}
            {!login ?
            <GoogleLogin
                clientId="491893953138-8f04gaeffcmf6vr95gk0ptj8dd0dd3h6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />:
            <div>
                <h3>Welcome to Doc Uploader : {data.profileObj?.name} </h3>
                <img src={data.profileObj?.imageUrl} alt="logo"/>
                <Submissions data = {data} />
            </div> 
            }
        </div>
    )
}

export default Login
