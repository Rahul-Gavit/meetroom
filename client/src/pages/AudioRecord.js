import { useReactMediaRecorder } from 'react-media-recorder-2';
import '../style/audio.css';

const AudioRecord = () => {

    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio: true});

    return (
          <div className='room-container'>
          <h1>MEETROOM</h1>
          <h2>Audio Recording!</h2>
            <audio className='audio-container' src={mediaBlobUrl} controls autoPlay loop />
            <button onClick={startRecording}>Start Recording</button>
            <button className='stop-btn' onClick={stopRecording}>Stop Recording</button>
          </div>
    );
}

export default AudioRecord;