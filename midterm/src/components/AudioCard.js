import React, { createRef } from 'react';
import { getTTS } from '../helpers/apis';
import { AudioPlayer1, AudioPlayer2 } from './AudioPlayers';
import { useMediaQuery } from 'react-responsive';

const AudioCard = ({ urbanResult }) => {
  const { word, definition, example } = urbanResult;
  const url_1 = getTTS(`${word}. ${definition}`);
  const url_2 = getTTS('For example. ' + example);
  const audio_2_ref = createRef();
  const is_wide = useMediaQuery({
    query: '(min-width: 700px)'
  })

  if (is_wide) {
    return (
      <table className="audioContainer">
        <tbody>
          <tr>
            <td>
              <AudioPlayer1 url={url_1} nextRef={audio_2_ref} />
            </td>
            <td>
              <AudioPlayer2 url={url_2} _ref={audio_2_ref} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="audioContainer">
        <AudioPlayer1 url={url_1} nextRef={audio_2_ref} />
        <AudioPlayer2 url={url_2} _ref={audio_2_ref} />
      </div>
    );
  }
};

export default AudioCard;
