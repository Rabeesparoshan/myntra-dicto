import React from 'react'
import "./HL.css";
import Card from '../Card/card.js';
import hl1 from '../assets/hl1.png';
import hl2 from '../assets/hl2.png';
import hl3 from '../assets/hl3.png';
import hl4 from '../assets/hl4.png';
import hl5 from '../assets/hl5.png';
import hl6 from '../assets/hl6.png';

function HL(props) {
  let wishlist = props.wishlist;
  return (
    <div className='hlpage'>
            <Card img={hl1} price='$400' wishlist={wishlist}></Card>
            <Card img={hl2} price='$400' wishlist={wishlist}></Card>
            <Card img={hl3} price='$400' wishlist={wishlist}></Card>
            <Card img={hl4} price='$400' wishlist={wishlist}></Card>
            <Card img={hl5} price='$400' wishlist={wishlist}></Card>
            <Card img={hl6} price='$400' wishlist={wishlist}></Card>
    </div>
  )
}

export default HL