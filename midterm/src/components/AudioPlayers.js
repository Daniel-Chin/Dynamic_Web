import React from 'react';

const AudioPlayer1 = ({ url, nextRef }) => (
  <audio controls autoPlay onEnded={() => {
    nextRef.current.play();
  }} src={url} />
);

const AudioPlayer2 = ({ url, _ref }) => (
  <audio controls src={url} ref={_ref} />
);

export { AudioPlayer1, AudioPlayer2 };
