import React from 'react';
import AudioCard from './components/AudioCard';

const WordCard = ({ word }) => {
  return (
    <div>
      <AudioCard word={word} def={def} eg={eg} />      
    </div>
  );
};

export default WordCard;
