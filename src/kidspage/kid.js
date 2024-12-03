import React from 'react'
import "./kid.css"
import Card from '../Card/card.js';
import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.png';
import k5 from '../assets/k5.png';
import k6 from '../assets/k6.png';
function Kid(props) {
  let wishlist = props.wishlist;
  return (
    <div className='kidspage'>
       <Card img={k1} price='$400' wishlist={wishlist}></Card>
       <Card img={k2} price='$400' wishlist={wishlist}></Card>
       <Card img={k3} price='$400' wishlist={wishlist}></Card>
       <Card img={k4} price='$400' wishlist={wishlist}></Card>
       <Card img={k5} price='$400' wishlist={wishlist}></Card>
       <Card img={k6} price='$400' wishlist={wishlist}></Card>
    </div>
  )
}

export default Kid