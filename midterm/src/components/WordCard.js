import React, { useState, useEffect } from 'react';
import AudioCard from './AudioCard';
import Link from './Link';
import { getUrban } from '../helpers/apis';

const WordCard = ({ word, setWord }) => {
  const [urbanResult, setUrbanResult] = useState({
    err: null, 
    word: null, 
    definition: null,
    example: null,
  });
  useEffect(() => {
    if (word !== null) {
      setUrbanResult({
        err: null, 
      });
    getUrban(word).then(({ definition, example }) => {
        setUrbanResult({
          err: null, 
          word, 
          definition, 
          example, 
        });
      }).catch((err) => {
        setUrbanResult({
          err, 
        });
      });
    }
  }, [word, setUrbanResult]);

  const renderUrbanText = (x) => {
    return x.split('\n').map((line, i) => {
      const parts = line.split(']');
      const elements = parts.map((part, i) => {
        const [plain, link] = part.split('[');
        return (
          <span key={i}>
            <span>{plain}</span>
            {link && <Link word={link} setWord={setWord} />}
          </span>
        );
      });
      return (<p key={i}>{elements}</p>);
    });
  };

  if (urbanResult.word === null) {
    return (<span />);
  }
  if (urbanResult.err !== null) {
    return (
      <div>
        Result of "{word}": <br />
        {urbanResult.err.toString()}
      </div>
    );
  }
  if (urbanResult.word !== word) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div>
      <h2 className="wordTitle funnyFont">
        {urbanResult.word}
      </h2>
      <AudioCard urbanResult={urbanResult} />
      <h3>
        Definition
      </h3>
      <div>
        {renderUrbanText(urbanResult.definition)}
      </div>
      <h3>
        Examples
      </h3>
      <div>
        {renderUrbanText(urbanResult.example)}
      </div>
    </div>
  );
};

export default WordCard;
