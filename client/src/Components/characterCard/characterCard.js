import React from 'react';
import './characterCard.css';

const CharacterCard = ({character}) => {
    return (
        <div className='gg_char'>
            <img className='char-icon' src={character?.icon} />

            <h2 className='char-title'>{character?.charName}</h2>
            {/* <div>
                {character?.tag}
            </div> */}
            {/* <div>
                {character?.type}
            </div> */}
            <div>
                <p>{character?.description}</p>
            </div>
        </div>
    )
}

export default CharacterCard;