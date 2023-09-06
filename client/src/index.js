import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import VideoRecord from '../src/pages/VideoRecord';
import AudioRecord from '../src/pages/AudioRecord';
import ScreenRecord from '../src/pages/ScreenRecord';
import MeetCard from '../src/components/MeetCard';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
     <Route exact path="/meetroom" element = {<MeetCard/>}/>
     <Route exact path="/meetroom/video" element = {<VideoRecord/>}/>
     <Route exact path="/meetroom/audio" element = {<AudioRecord/>}/>
     <Route exact path="/meetroom/screen" element = {<ScreenRecord/>}/>
     <Route exact path='/' element = {<App />}/>
  </Routes>
  </BrowserRouter>
);
