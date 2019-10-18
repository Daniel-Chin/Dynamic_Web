import React from 'react';

const Link = ({ word, setWord }) => {
  return (  // tabIndex: #accessibility#
    <span className="Link" tabIndex="0" onClick={(event) => {
      setWord(word);
    }}>
      {word}
    </span>
  );
};

export default Link;
