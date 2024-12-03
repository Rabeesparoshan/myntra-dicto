import React from 'react';
import './ProductGrid.css';
import img1 from '../assets/img1.png';
import Img2 from '../assets/Img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import footerbanner from '../assets/footerbanner.png';




const ProductGrid = () => {
    return(
    <div className="product-grid">
  <div className="category-heading">
    <h2>Shop by Category</h2>
    <div className="golden-line"></div>
  </div>
  <div className="grid-outer">
    {/* Repeat this block for each product */}
    <div className="grid-item"><img src={img1} alt="product1" /></div>
    <div className="grid-item"><img src={Img2} alt="product2" /></div>
    <div className="grid-item"><img src={img3} alt="product3" /></div>
    <div className="grid-item"><img src={img4} alt="product4" /></div>
    <div className="grid-item"><img src={img5} alt="product4" /></div>
    <div className="grid-item"><img src={img6} alt="product4" /></div>
    <div className="grid-item"><img src={img7} alt="product4" /></div>
    <div className="grid-item"><img src={img8} alt="product4" /></div>
    <div className="grid-item"><img src={img9} alt="product4" /></div>
    <div className="grid-item"><img src={img10} alt="product4" /></div>
    <div className="grid-item"><img src={img11} alt="product4" /></div>
    <div className="grid-item"><img src={img12} alt="product4" /></div>
    <div className="grid-item"><img src={img13} alt="product4" /></div>
    <div className="grid-item"><img src={img14} alt="product4" /></div>
    <div className="grid-item"><img src={img15} alt="product4" /></div>
    <div className="grid-item"><img src={img16} alt="product4" /></div>
    <div className="grid-item"><img src={img17} alt="product4" /></div>
    <div className="grid-item"><img src={img18} alt="product4" /></div>
    

    
  </div>
  <div className="footer-banner">
        <img src={footerbanner} alt="Myntra Footer Banner" />
      </div>

</div>);

};

export default ProductGrid;
