import React from 'react';
import './Styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='newsletter'>
        <p className='newsletter-text'>Get Our newsletter</p>
        <div className='newsletter-input'>
          <input type="text" placeholder="Your email" />
          <button className='subscribe-button'>Subscribe</button>
        </div>

      </div>
      <ul className='social-icons'>
        <li><img src="/icon/facebook.png" alt="" /></li>
        <li><img src="/icon/instagram.png" alt="" /></li>
        <li><img src="/icon/twitter.png" alt="" /></li>
        <li><img src="/icon/youtube.png" alt="" /></li>
      </ul>
    </footer>
  );
}

export default Footer;
