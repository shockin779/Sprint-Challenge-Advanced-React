import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import useCustomState from '../useLocalStorage/useLocalStorage';

import './Players.css';

import PlayerCard from '../PlayerCard/PlayerCard';

const Players = props => {
    const [playersData, setPlayersData] = useState([]);

    useEffect(() => {
        async function getPlayers() {
            let res = await axios.get('http://localhost:5000/api/players');
            setPlayersData(res.data);
        }
        getPlayers();
    },[]);

    if(playersData.length >= 1) {
        return(
            <div className='players-wrapper'>
                {
                    playersData.map(player => (
                        <PlayerCard key={player.name} player={player} />
                    ))
                }
            </div>
            );  
    }
    else {
        return(<h2>Loading...</h2>);
    }

}

export default Players;