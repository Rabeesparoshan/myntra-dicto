import React from 'react'
import "./women.css";
import Card from '../Card/card.js';
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.png';
import w4 from '../assets/w4.png';
import w5 from '../assets/w5.png';
import w6 from '../assets/w6.png';

function Women(props) {
    let wishlist=props.wishlist
  return (
    <div className='wopage'>
      <Card img={w1} price='$400' wishlist={wishlist}></Card>
      <Card img={w2} price='$400' wishlist={wishlist}></Card>
      <Card img={w3} price='$400' wishlist={wishlist}></Card>
      <Card img={w4} price='$400' wishlist={wishlist}></Card>
      <Card img={w5} price='$400' wishlist={wishlist}></Card>
      <Card img={w6} price='$400' wishlist={wishlist}></Card>
    </div>
  )
}

export default Women