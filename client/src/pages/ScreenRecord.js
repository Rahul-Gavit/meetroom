import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder-2';

const ScreenRecord = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({screen: true});
    return (
          <div className='room-container'>
          <h1>MEETROOM</h1>
          <h2>Screen Recording!</h2>
          <video src={mediaBlobUrl} controls autoPlay loop />
            <button onClick={startRecording}>Start Recording</button>
            <button className='stop-btn' onClick={stopRecording}>Stop Recording</button>
          </div>
    );
}

export default ScreenRecord;