import React, { useState } from 'react';
import SearchCard from './components/SearchCard';
import WordCard from './components/WordCard';
import Title from './components/Title';
import './App.css';

function App() {
  const [word, setWord] = useState(null);
  const [is_typing, setIs_typing] = useState(false);
  return (
    <div className="App">
      <Title />
      <SearchCard setWord={setWord} is_typing={is_typing} setIs_typing={setIs_typing}/>
      <div className="WordCard" style={! is_typing ? {} : {
        opacity: .5, 
        transform: 'scale(.9, 1) translate(0px, 60px)', 
      }}>
        <WordCard word={word} setWord={setWord} />
      </div>
    </div>
  );
}

export default App;
