import React from 'react';

import './PlayerCard.css';

const PlayerCard = props => {
    return(
        <div className='player-card'>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
        </div>
    );
}

export default PlayerCard;