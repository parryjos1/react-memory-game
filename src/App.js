import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/board/board'
import initaliseDeck from './deck'

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  // TODO: replaces component did mount
  useEffect(() => {
    resizeBoard()
    setCards(initaliseDeck())
  }, [])

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
    }
    setFlipped([...flipped, id])
  }

  const sameCardClicked = (id) => flipped.includes(id)

  // TODO: replaces component did unmount
  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),
    )
  }



  return (
    <div className="App">
      <h1>Memory game</h1>
      <Board
        dimension={dimension} 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
