import React, { useState } from 'react';
import '../style/signUp.css';
import {useNavigate} from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [user, SetUser] = useState({
    name:"", 
    email:"", 
    password:""
  });

  let name, value;

  const [errors, setErrors] = useState({});

  // ---------- handling user entered inputs ----------
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    SetUser({...user, [name]:value});
  }
  const signUpHandler = async (event) => {
    event.preventDefault();

    // ---------- Form validations ----------
    const validationErrors ={}
    if(!user.name.trim()){
      validationErrors.name = "username is required";
    }

    if(!user.email.trim()){
      validationErrors.email = "email is required";
    }else if(!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(user.email)){
      validationErrors.email = "invalid email entered!";
    }
    if(!user.password.trim()){
      validationErrors.password = "password is required";
    }else if(user.password.length < 6){
      validationErrors.password = "password should be at least 6 characters"
    }

    const { name, email, password} = user;

    const res = await fetch("user/signUp", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username: name, 
        email, 
        password
      })
    });

    // Check user newly register or already exist in database
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0) {
      if(res.ok){
        const data = await res.json();
        if(data.status !== 404 || data) {
          window.alert("Registration successful");
          console.log("Registration Successful");
          navigate("/");
        }
      }
      else{
        alert("User already exist");
        console.log("Invalid Registration");
      }
    }
    
    
  }

  return (
    <div className='signup-container'>
    <h3>SIGN UP TO MEETROOM!</h3>

    {/* ---------- signUp form ---------- */}

        <form method='POST' className='signup-form'>
        <label className='input-label'>What's your name?</label>
            <input 
            type='text' 
            name='name' 
            placeholder='Name' 
            autoComplete='OFF'
            value={user.name}
            onChange={handleInputs}
            required
            />
            {errors.name && <span className='input-span'>{errors.name}</span>}
          
            <label className='input-label'>What's your email?</label>
            <input 
            type='email' 
            name='email' 
            placeholder='E-mail' autoComplete='OFF'
            value={user.email}
            onChange={handleInputs}
            required
            />
            {errors.email && <span className='input-span'>{errors.email}</span>}

            <label className='input-label'>Your password?</label>
            <input 
            type='password' 
            name='password' 
            placeholder='Password' 
            autoComplete='OFF'
            value={user.password}
            onChange={handleInputs}
            required
            />
            {errors.password && <span className='input-span'>{errors.password}</span>}

            <button className='signup-btn' onClick={signUpHandler}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp;