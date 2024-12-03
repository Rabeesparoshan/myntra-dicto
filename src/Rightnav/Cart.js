
import React from 'react';
import Card from '../Card/card.js';
import './both.css';


export const cart = [];

const Cart = () => {
  return (
    <div >
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
      {cart.map((item, index) => (
        <Card key={index} img={item.img} price={item.price} />
      ))}
    </div>
      )}
    </div>
  );
};

export default Cart;
