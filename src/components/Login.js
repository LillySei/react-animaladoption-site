import React, { useState } from 'react'
import "./Login.css";

const Login = ({userName, setUsername, loggedIn, setLoggedIn}) => {
    const [password, setPassword] = useState("")
    const [userNameError, setUserNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    console.log('logged in: ' + loggedIn);

    const onButtonClick = () => {
        setPasswordError("");
        setUserNameError("");
    
        if (userName === "") {
            setUserNameError("Please enter a username");
        }
    
        if (password === "") {
            setPasswordError("Please enter a password");
        }
    
        if (!(userName === "" && password === "")) {
            setLoggedIn(true);
            
        }
    }

  return (
    <div className='mainContainer'>
        <div className='titleContainer'>
            <div>Login</div>
        </div>
        <br/>
        <div className='inputContainer'>
        <input
        value={userName}
        placeholder='Please enter your username'
        onChange={e => setUsername(e.target.value)}
        className='inputBox'
        />
        <label className='errorLabel'>{userNameError}</label>
        </div>
        <br/>
        <div className='inputContainer'>
            <input
            value={password}
            placeholder='Please enter your password'
            onChange={e => setPassword(e.target.value)}
            className='inputBox'
            />
            <label className='errorLabel'>{passwordError}</label>
        </div>
        <br/>
        <div className='inputContainer'>
            <input
            className='inputBotton'
            type='button'
            onClick={onButtonClick}
            value={"Log in"}
            />
        </div>
    </div>
  )
}

export default Login