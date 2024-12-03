import React from 'react';
import './Footer.css'; // CSS file for styling

const Footer = () => {
  return (
    
    <div className="footer">
      {/* Footer Content */}
      <div className="footer-top">
        <div className="footer-left">
          <h2>About Myntra</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>In the News</li>
          </ul>
        </div>
        <div className="footer-middle">
          <h2>Customer Care</h2>
          <ul>
            <li>FAQs</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Connect with Us</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      
      {/* Footer Additional Content */}
      <div className="footer-additional-content">
        <h2>Registered Office Address</h2>
        <p>
          Buildings Alyssa, Begonia, and Clover situated in Embassy Tech Village, <br />
          Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli, Bengaluru – 560103, India <br />
          CIN: U72300KA2007PTC041799
        </p>

        <h2>Contact</h2>
        <p>Telephone: +91-80-61561999</p>

        <h2>Online Shopping Made Easy at Myntra</h2>
        <p>
          Myntra is the ultimate destination for fashion and lifestyle, hosting a wide array of merchandise including clothing, footwear, accessories, jewellery, and more.
        </p>

        <h2>Best Online Shopping Site in India for Fashion</h2>
        <p>
          Myntra offers a wide selection of smart men’s clothing, trendy women’s clothing, fashionable footwear, stylish accessories, and more for kids.
        </p>

        <h2>Affordable Fashion at Your Fingertips</h2>
        <p>
          Myntra brings you new arrivals, seasonal discounts, and the best of ethnic and western wear at affordable prices.
        </p>

        <h2>Myntra Insider</h2>
        <p>
          Myntra's loyalty program rewards registered customers with Insider Points, offering discounts, early access to sales, and other special perks.
        </p>

        <h2>Myntra Studio</h2>
        <p>
          Myntra Studio brings you personalized fashion feeds, celebrity styles, and daily updates from your favorite fashion labels.
        </p>

        <h2>Myntra App</h2>
        <p>
          Download the Myntra app on your Android or iOS device to experience shopping like never before.
        </p>

        <h2>History of Myntra</h2>
        <p>
          Myntra began as a B2B venture in 2007 and quickly became India's no. 1 fashion destination, introducing hundreds of brands and expanding its reach.
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Myntra. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
