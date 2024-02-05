
import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer';
import PlayList from './components/PlayList';
import NowPlaying from './components/NowPlaying';


const App = () => {
  const [audioList, setAudioList] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch audio list from the server
    fetch('http://your-audio-server-api/audio-list')
      .then(response => response.json())
      .then(data => {
        console.log('Received audio list:', data);
        setAudioList(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching audio list:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Fetch the last saved position from the server or local storage
    fetch('http://your-audio-server-api/last-position')
      .then(response => response.json())
      .then(data => {
        console.log('Received last position:', data);
        setCurrentPosition(data.position);
      })
      .catch(error => console.error('Error fetching last position:', error));
  }, []);

  const handleEnded = () => {
    setCurrentPosition((prevIndex) => (prevIndex + 1) % audioList.length);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React Audio Player</h1>
      <AudioPlayer audioList={audioList} currentPosition={currentPosition} onEnded={handleEnded} />
      <PlayList audioList={audioList} setCurrentPosition={setCurrentPosition} />
      <NowPlaying currentPosition={currentPosition} audioList={audioList} />
    </div>
  );
};

export default App;