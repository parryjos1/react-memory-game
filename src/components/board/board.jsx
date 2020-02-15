import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './boardStyles.css'

export default function Board({ 
    cards,
    flipped,
    handleClick,
    dimension,
    disabled,
    solved
}) {
    return <div className = "board">
        {
            cards.map(card =>(
                <Card
                    key ={card.id}
                    type={card.type} 
                    id={card.id}
                    width={dimension / 4.5}
                    height={dimension / 3}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    front={card.photoURL}
                    solved={solved.includes(card.id)}
                    disabled={disabled || solved.includes(card.id)}
                />
            ))
        }
    </div>
}

Board.propTypes = {
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}
