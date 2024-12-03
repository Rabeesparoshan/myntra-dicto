import React from 'react'
import i1 from '../assets/Screenshot 2024-11-30 154836.png'
import i2 from '../assets/Screenshot 2024-11-30 160857.png'
import i3 from '../assets/Screenshot 2024-11-30 161142.png'

import i4 from '../assets/Screenshot 2024-11-30 193952.png'
import i5 from '../assets/Screenshot 2024-11-30 194012.png'
import i6 from '../assets/Screenshot 2024-11-30 194028.png'
import i7 from '../assets/Screenshot 2024-11-30 194046.png'
import i8 from '../assets/Screenshot 2024-11-30 194059.png'
import "./Categories.css"

const Categories = () => {

  function dotClick(e) {
    if (e.target.classList.contains("dot-active")) return;
    let btn = e.target;

    btn.parentElement.childNodes.forEach(node => {
      node.classList.remove("dot-active");
    });
    btn.classList.add("dot-active");

    btn.parentElement.parentElement.style.setProperty("--offset", -((btn.getAttribute("index") - 1) * 100) + "%")



  }

  return (
    <div className="cont">
      <div className="bannerji">
        <img src={i1} className="img1"></img>
      </div>
      <div className="coupon">
        <img src={i2} className="img2"></img>
      </div>
      <div className="offer">
        <img src={i3} className="img3"></img>
      </div>
      <div className="winter">
        <b className="get-win">GET WINTER READY</b>
        <b className="bundle">Bundle Up In Warmth</b>
      </div>
      <div className="slide slide1" >
        <div className='slide-cont'>
          <div className="extra">
            <img src={i4} className="slide-img s4"/>
            <img src={i5} className="slide-img s5"/>
            <img src={i6} className="slide-img s6"/>
            <img src={i7} className="slide-img s7"/>
            <img src={i8} className="slide-img s8"/>
          </div>
        </div>
        <div className="dots-cont">
          <div index="1" className="dot dot-active" onClick={dotClick}></div>
          <div index="2" className="dot" onClick={dotClick}></div>
          <div index="3" className="dot" onClick={dotClick}></div>
          <div index="4" className="dot" onClick={dotClick}></div>
          <div index="5" className="dot" onClick={dotClick}></div>
        </div>
      </div>
      <div className="omgoffser"></div>
      <div className="slide2"></div>

    </div>
  )
}

export default Categories