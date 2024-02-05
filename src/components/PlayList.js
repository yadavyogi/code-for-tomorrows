
import React from 'react';

const Playlist = ({ audioList, setCurrentPosition }) => {
  const handleClick = (index) => {
    setCurrentPosition(index);
  };

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {audioList.map((audio, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {audio.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
