import React from 'react';
import Card from '../Card/card.js';
import './both.css';

export const wishlist = [];

const Wishlist = () => {
  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-container">
      {wishlist.map((item, index) => (
        <Card key={index} img={item.img} price={item.price} />
      ))}
    </div>
      )}
    </div>
  );
};

export default Wishlist;
