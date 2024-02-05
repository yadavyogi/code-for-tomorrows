
import React from 'react';

const NowPlaying = ({ currentPosition, audioList }) => {
  if (!audioList || audioList.length === 0) {
    return <div>No audio available</div>;
  }

  const currentAudio = audioList[currentPosition];

  if (!currentAudio) {
    return <div>Error: Current audio not found</div>;
  }

  return (
    <div>
      <h2>Now Playing</h2>
      <p>{currentAudio.title}</p>
    </div>
  );
};

export default NowPlaying;
