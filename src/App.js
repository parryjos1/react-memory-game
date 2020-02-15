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
      if(isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards() 
      } else {
        // reset the cards
        setTimeout(resetCards, 1200)
      }
    }
    // setFlipped([...flipped, id])
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type 
  };

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
        solved={solved}
      />
    </div>
  );
}

export default App;
