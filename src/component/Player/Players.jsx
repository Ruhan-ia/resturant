import React, { useEffect, useState } from 'react';
import Player from '../Player-card/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    return (
        <div className='players-container'>
            <div className='players'>
            {
                   players.map(player => <Player key = {player.id} player={player}></Player>)
                   
            }
            
            </div>
            <div className='players-cart'>
               <h4>Players summary</h4>
            </div>

        </div>
    );
};

export default Players;