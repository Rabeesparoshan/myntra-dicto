import React, { useState } from 'react';
import Navbar from './Navbar/Navbar.js';
import Categories from './Catergories/Categories.js';
import ProductGrid from './ProductGrid/ProductGrid.js';
import Footer from './Footer/Footer.js';
import Cart  from './Rightnav/Cart.js'
import './App.css';
import Wishlist from './Rightnav/Whishlist.js';
import Menpage from './MenPage/menpage.js';
import Women from './womenpage/women.js';
import Kid from './kidspage/kid.js';
import HL from './HLpage/HL.js';
import Beauty from './beautypage/beauty.js'
import Studio from './studiopage/studio.js';

const App = () => {
  const [contentState, setContentState] = useState("content");

  let wishlist = [];

  let contentPage = <>
    <Categories />    
    <ProductGrid />
    <Footer/>
  </>

  
  return (
      <>
        <Navbar changeState={setContentState}/>
        <div className="fixed-error-fixer"></div>
        {
          
          contentState == "content" ? contentPage :
          (contentState == "wishlist" ? <Wishlist wishlist={wishlist}/> : (
            contentState == "cart" ? <Cart/> : (
              contentState == "men" ? <Menpage wishlist={wishlist}/> : (
                contentState == "women" ? <Women/> : (
                  contentState == "kid" ? <Kid/> : (
                    contentState == "hl" ? <HL/> : (
                      contentState == "beauty" ? <Beauty/> : (
                        contentState == "studio" ? <Studio/> : null
                      )
                    )
                  )
                )
              )
            )
          ))

        }
      </>
  );
};

export default App;

