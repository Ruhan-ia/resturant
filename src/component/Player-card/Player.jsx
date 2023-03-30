import React from 'react';
import './Player.css'

const Player = (props) => {

    const {id, name, picture, price, age }=props.player;
    return (
        <div className='card-design'>
          <img src={picture} alt="" /> 
        <div className='cart-info'>
        <p>Id: {id}</p>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Price: ${price}</p>
        </div>
        <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Player;