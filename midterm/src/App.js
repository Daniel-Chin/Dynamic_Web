import React, { useState } from 'react';
// import { getTTS, getUrban } from './helpers/apis';
import SearchBar from './components/SearchBar';
import WordCard from './components/WordCard';

function App() {
  const [word, setWord] = useState(null);
  return (
    <div className="App">
      <SearchBar setWord={setWord} />
      <WordCard word={word} />
    </div>
  );
}

export default App;
