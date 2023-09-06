import { useState } from 'react';
import React from 'react';
import '../style/signIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const [user, SetUser] = useState({
    email:"", password:""
  });

  let name, value;

  const handleInputs = (event) => {
    // console.log(event);
    name = event.target.name;
    value = event.target.value;

    SetUser({...user, [name]:value});
  }

  const signInHandler = async (event) => {
    event.preventDefault();

    const { email, password} = user;
try{
      const res = await fetch("user/signIn", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email, 
          password
        })
      });
    
      if(res.ok){
        const data = await res.json();
        if(data.status !== 404 || data) {
          alert("Login Successfully!")
          console.log("Login Successful");
          navigate("/meetroom");
        }
      }
      else{
        alert("Invalid login!");
        console.log("Invalid login!");
      }
}
catch(error){
  console.error('Error',error);
}
  }
  return (
    <div className='signIn-Container'>
        <h3>LOGIN TO START MEETROOM!</h3>
        <form method='POST' className='signIn-form'>
            <label 
            className='input-label'
            >What's your email?
            </label>
            <input 
            type='email' 
            name='email' 
            placeholder='E-mail' 
            value={user.email}
            onChange={handleInputs}
            />

            <label 
            className='input-label'
            >Your password?
            </label>
            <input 
            type='password' 
            name='password' 
            placeholder='Password' 
            value={user.password}
            onChange={handleInputs}
            />

            <button onClick={signInHandler} className='signup-btn'>LogIn</button>
        </form>
    </div>
  )
}

export default SignIn