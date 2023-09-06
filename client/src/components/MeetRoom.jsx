import React from 'react';
import { useNavigate } from 'react-router-dom';

const MeetRoom = () => {

    const navigate = useNavigate();

    const videoHandler = (event) =>{
        event.preventDefault();
        navigate("./video");
        console.log("Video Button Clicked");
    }
    const audioHandler = (event) =>{
        event.preventDefault();
        navigate("./audio");
        console.log("Audio Button Clicked");
    }
    const screenHandler = (event) =>{
        event.preventDefault();
        navigate("./screen");
        console.log("Screen Button Clicked");
    }

  return (
          <div className='room-container'>
          <h3>WHAT YOU WANT TO RECORD ?</h3>
          <button onClick={videoHandler}>Video Record</button>
          <button onClick={audioHandler}>Audio Record</button>
          <button onClick={screenHandler}>Screen Record</button>
          </div>
  )
}

export default MeetRoom