import React, { useState } from 'react'
import './style.css'


const FormValidate = () => {
    const[userName,setUserName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[conPassword,setConPassword]=useState("")
    const[content,setContent]=useState("welcome")
    const[conCol,setConCol]=useState("#66fcf1")

    const[erroruserName,setErroruserName]=useState("")
    const[errorEmail,setErrorEmail]=useState("")
    const[errorpassword,setErrorpassword]=useState("")
    const[errorconpassword,setErrorconpassword]=useState("")

    const[userNamecol,setUserNamecol]=useState("")
    const[emailcol,setEmailcol]=useState("")
    const[passwordcol,setPasswordcol]=useState("")
    const[conPasswordcol,setConPasswordcol]=useState("")

    const validate =(e)=>{
      e.preventDefault()
      
      if(userName.length > 1){
        setErroruserName("");
        setUserNamecol("green")
        // setUserName("")
      }else{
        setErroruserName("Username must contain 2 letters");
        setUserNamecol("red")
       
       
      }

      if(email.includes("@gmail")){
        setErrorEmail("")
        setEmailcol("green")
      }else{
        setErrorEmail("Email should have @gmail")
        setEmailcol("red")
        
      }

      if(password.length>=8){
        setErrorpassword("")
        setPasswordcol("green")
      }else{
        setErrorpassword("Password  should be 8 letters long")
        setPasswordcol("red")
        
      }

      if(conPassword!="" && password===conPassword){
        setErrorconpassword("")
        setConPasswordcol("green")
      }else{
        setErrorconpassword("Password did not matched")
        setConPasswordcol("red")
        
      }

      if(userName.length < 2){
        setContent("Enter Correct Name")
        setConCol("red")
      }else if((email.includes("@gmail"))===false){
        setContent("Enter Correct Email")
        setConCol("red")
      }else if(password.length<8){
        setContent("Enter Correct Password")
        setConCol("red")
      }else if(password!==conPassword){
        setContent("Password didn't matched")
        setConCol("red")
      }
      else{
        setContent("Thankyou!!!")
        setConCol("green")
      }
      
    }


  return <>
  <div className="card">
    <div className="card-img" style={{color:conCol}} >{content} </div>

    <form >
        <input type="text" 
        placeholder='Name'
        style={{borderColor:userNamecol}}
        onChange={(e)=>  setUserName(e.target.value)}
        value={userName}
        />
        <p className="error">{erroruserName} </p>


        <input type="text" 
        placeholder='Email'
        style={{borderColor:emailcol}}
        onChange={(e)=>  setEmail(e.target.value)}
        value={email}
        />
        <p className="error">{errorEmail} </p>

        <input type="password" 
        placeholder='Password'
        style={{borderColor:passwordcol}}
        onChange={(e)=>  setPassword(e.target.value)}
        value={password}
        />

        <p className="error">{errorpassword} </p>
        <input type="password" 
        placeholder='Confirm Password'
        style={{borderColor:conPasswordcol}}
        onChange={(e)=>  setConPassword(e.target.value)}
        value={conPassword}
        />
        <p className="error">{errorconpassword} </p>

        <button onClick={validate} className='submit-btn'>Submit</button>

    </form>
  </div>
  </>
}

export default FormValidate
