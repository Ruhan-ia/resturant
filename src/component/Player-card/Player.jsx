import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import './Player.css'

const Player = (props) => {
        const handleAddToCart = props.handleAddToCart;
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
        <button onClick={()=>handleAddToCart(props.player)} className='cart-btn'>Add to Cart 
         <FontAwesomeIcon icon={faGlobeAmericas} />
         </button>
        </div>
    );
};

export default Player;