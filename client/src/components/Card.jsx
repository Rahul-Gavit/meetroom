import React, { useState } from 'react';
import '../style/card.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Card = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = (event) => {
    event.preventDefault();
    setIsSignUp(!isSignUp);
  };
  return (
    <div className='card-container'>
      {isSignUp ? <SignUp /> : <SignIn />}
      <a className='a-switch' href='#' onClick={toggleForm}>
        {isSignUp ? 'Sign in with your account': 'Create account'}
      </a>
    </div>
  )
}

export default Card