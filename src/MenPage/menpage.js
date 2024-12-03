import React from 'react'
import "./menpage.css"
import img14 from '../assets/img14.png';
import m1 from '../assets/mens1.png';
import m2 from '../assets/mens2.png';
import m3 from '../assets/mens3.png';
import m4 from '../assets/mens4.png';
import m5 from '../assets/mens5.png';
import Card from '../Card/card.js';
function Menpage(props) {
    let wishlist = props.wishlist;
    return (
        <div className='menspage' >
            <Card img={img14} price='$400' wishlist={wishlist}></Card>
            <Card img={m1} price='$400' wishlist={wishlist}></Card>
            <Card img={m2} price='$400' wishlist={wishlist}></Card>
            <Card img={m3} price='$400' wishlist={wishlist}></Card>
            <Card img={m4} price='$400' wishlist={wishlist}></Card>
            <Card img={m5} price='$400' wishlist={wishlist}></Card>
        </div>
  )
}

export default Menpage
