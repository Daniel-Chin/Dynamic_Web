import React, { createRef } from 'react';
import { getTTS } from '../helpers/apis';
import { useMediaQuery } from 'react-responsive';

const AudioCard = ({ urbanResult }) => {
  const { word, definition, example } = urbanResult;
  const url_1 = getTTS(`${word}. ${definition}`);
  const url_2 = getTTS('For example. ' + example);
  const audio_2_ref = createRef();
  const audio_2 = <audio controls src={url_2} ref={audio_2_ref} />;
  const audio_1 = <audio controls autoPlay onEnded={() => {
    audio_2_ref.current.play();
  }} src={url_1} />;
  const is_wide = useMediaQuery({
    query: '(min-width: 700px)'
  })

  if (is_wide) {
    return (
      <table className="audioContainer">
        <tbody>
          <tr>
            <td>
              {audio_1}
            </td>
            <td>
              {audio_2}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="audioContainer">
        {audio_1}
        {audio_2}
      </div>
    );
  }
};

export default AudioCard;
