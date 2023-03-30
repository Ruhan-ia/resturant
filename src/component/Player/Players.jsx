import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player-card/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className='players-container'>
            <div className='players'>
            {
                   players.map(player => <Player key = {player.id} 
                    player={player} handleAddToCart = {handleAddToCart}>

                    </Player>)
                   
            }
            
            </div>
            <div className='players-cart'>
               <Cart cart= {cart}></Cart>
            </div>

        </div>
    );
};

export default Players;