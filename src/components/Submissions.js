import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import firebase from '../firebase'
import emailjs from 'emailjs-com';


function Submissions(props) {
    const[file, setFile] = useState("")
    const[docs, setDocs] = useState([])
    
    let name = props.data.profileObj?.name !== undefined ? (props.data.profileObj?.name).replace(' ',"_") : ""
    const sendMail = (e) => {
        e.preventDefault()
        setDocs([...docs,file.name])
        console.log("File Data")
        console.log(file)
        var storageRef = firebase.storage().ref(`${name}/${props.data.googleId}/${file.name}`)
        storageRef.put(file)  

        firebase.database().ref(`${name}`).set({
        title : name,
        googleId : props.data.googleId
        })

        emailjs.send('gmail','traders_temp',{name : name, doc:file.name},'user_xD8xxi8yxBxKv4zhN2oPp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }
    useEffect(()=>{
        console.log("Test")
        console.log(docs)
    })
    return (
        <div>
        <form onSubmit={sendMail} >
                <label>Files</label>
                <input 
                    type="file" 
                    id="name" 
                    name="name"
                    onChange={e=>{setFile(e.target.files[0])}} />
            <button type="submit">Submit</button>
        </form>
        <ul>
            {
            docs.map((file) => {
                return (
                    file == "" 
                    ? null 
                    : <li key={Math.random()}>
                        {`${file}`}
                    </li>
                )
            })
            }
        </ul>
    </div>
    )
}

export default Submissions
