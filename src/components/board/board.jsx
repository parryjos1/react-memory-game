import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './boardStyles.css'

export default function Board({ 
    cards,
    flipped,
    handleClick,
    dimension,
    disabled
}) {
    return <div className = "board">
        {
            cards.map(card =>(
                <Card
                    key ={card.id}
                    type={card.type} 
                    id={card.id}
                    width={dimension / 4.5}
                    height={dimension / 4.5}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled}
                    front={card.photoURL}
                />
            ))
        }
    </div>
}

Board.propTypes = {
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

{/* <Card 
id={card.id}
width={card.height}
height={card.width}
back={`https://picsum.photos/seed/picsum/200/300`}
front={'https://picsum.photos/id/870/200/300?grayscale&blur=2'}
flipped={flipped.includes(1)}
handleClick={() => handleClick(1)}
/> */}