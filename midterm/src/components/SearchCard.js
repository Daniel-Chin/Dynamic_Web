import React, { useState, useEffect, createRef } from 'react';

const SEARCH_ICON = '🔍';

const SearchCard = ({ setWord, is_typing, setIs_typing }) => {
  const [value, setValue] = useState('');
  const [input_focused, setInput_focused] = useState(true);
  const [button_focused, setButton_focused] = useState(false);
  // #accessibility#
  // We track the button focus too so that tab doesn't make the button disappear
  const input = createRef();

  useEffect(() => {
    setIs_typing(input_focused || button_focused);
  }, [input_focused, button_focused, setIs_typing]);

  const onInputFocus = (event) => {
    event.target.select();
    setInput_focused(true);
  };
  const onInputBlur = () => {
    setInput_focused(false);
  };
  const onButtonFocus = () => {
    setButton_focused(true);
  };
  const onButtonBlur = () => {
    setButton_focused(false);
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSearch(event.target);
    }
  };
  const canSearch = () => {
    return is_typing && value;
  }
  const onSearch = (toBlur) => {
    if (canSearch()) {
      toBlur.blur();
      setWord(value);
    }
  };
  return (
    <div className="SearchCard">
      <div 
        className="searchBar" onClick={() => {
          input.current.focus();
        }} style={is_typing ? {
          backgroundColor: 'white', 
          borderColor: '#999',
        } : {}}
      >
        {SEARCH_ICON}
        <input 
          className="searchInput" style={is_typing ? {} : {
            color: '#999', 
          }} ref={input} 
          type="text" value={value} onChange={onChange} 
          placeholder="Type a word here" onKeyUp={onKeyUp} 
          autoFocus onBlur={onInputBlur} onFocus={onInputFocus}
        />
      </div>
      <button 
        className="searchButton"
        style={canSearch() ? {} : {
          transform: 'scale(1, 0)',
          margin: '-30px', 
          backgroundColor: 'white',
          boxShadow: 'none', 
        }} 
        onClick={(event) => {onSearch(event.target);}} 
        onBlur={onButtonBlur} onFocus={onButtonFocus}
      >
        Search
      </button>
    </div>
  );
};

export default SearchCard;
