import React from 'react';
// TODO: Proptypes guarntees that the 
// props received are the props expected
import PropTypes from 'prop-types';
import './cardStyle.css';
import BackImage from '../../icons/poker.svg'

// TODO: destructured props
export default function Card({ 
    handleClick, 
    id, 
    flipped, 
    height, 
    width,
    front,
    disabled,
    solved 
}) {
    return <div 
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onClick={() => disabled ? null : handleClick(id)}
    >
        <div className="flipper">
            <img
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? front : BackImage }
            ></img>
        </div>
    </div>

}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,

}