import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import firebase from '../firebase'
import Login from './Login';

let docs = []

function Submissions(props) {
    // const [name,setName] =  useState("")
    const [fileName, setFileName] = useState("")
    // console.log("Props")
    // console.log(props)
    // console.log("Name : ",props?.data?.profileObj?.name)
    let name = props.data.profileObj?.name !== undefined ? (props.data.profileObj?.name).replace(' ',"_") : ""
    const form = useFormik({
        initialValues :{
            name : "",
            files : []
        },
        onSubmit: (values) => {
            docs = [...docs,fileName]
            form.values.files=[...form.values.files,fileName]
            console.log("Values")
            console.log(values)
        
            var file = fileName
            console.log(fileName.name)
            var storageRef = firebase.storage().ref(`${name}${props.data.googleId}/${fileName.name}`)
            storageRef.put(file)    

            firebase.database().ref(`${name}${props.data.googleId}`).set({
                title : name,
            })
            // let blob = new Blob(['G:\Bharat\Pic\FACE'],{type : 'image/jpeg'})
            // storageRef.put(blob).then(resp=>console.log("esponse: " ,{resp}))
        },
        enableReinitialize:true
    })
    useEffect(()=>{
        console.log("Submission Effect")
    })
    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <div>
                    <label>Files</label>
                    <input type="file" id='file' name="file" onChange={e=>{setFileName(e.target.files[0])}}/>
                </div>
                {/* <div>
                    <button type="button" onClick={()=>form.values.files.push(fileName)}>Add</button>
                </div> */}
                <button type="submit">Submit</button>
                <h3>Files Uploaded</h3>
                <ul>
                    {
                        docs.map((file) => {
                            return (
                                file.name == "" 
                                ? null 
                                : <li key={Math.random()}>
                                    {`${file.name}`}
                                </li>
                            )
                        })
                    }
                </ul>
            </form>
        </div>
    )
}

export default Submissions
