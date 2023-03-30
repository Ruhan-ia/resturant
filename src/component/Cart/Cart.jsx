import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h4>Players summary</h4>
               <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;