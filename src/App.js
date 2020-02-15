import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/board/board'
import initaliseDeck from './deck'

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  // TODO: replaces component did mount
  useEffect(() => {
    setCards(initaliseDeck())
  }, [])

  const handleClick = (id) => {
    setFlipped([...flipped, id])
  }



  return (
    <div className="App">
      <h1>Memory game</h1>
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
