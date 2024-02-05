
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioList, currentPosition, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (audioList.length === 0 || !audioList[currentPosition]) {
      console.error('Error: No audio or invalid current position');
      return;
    }

    if (audioRef.current) {
      audioRef.current.src = audioList[currentPosition].url;
      audioRef.current.play();
    }
  }, [currentPosition, audioList]);

  return (
    <div>
      <audio ref={audioRef} controls onEnded={onEnded}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
