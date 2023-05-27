import React, { useState } from 'react';
import './Styles/header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='headerContent'>
      <div className='header'>
      <div className="logo-container">
        <img src="/logoTravel.png" alt="" />
      </div>

      <div className='header_content'>
        <div className="social-media-icons">
          <ul>
            <li><img src="/icon/facebook.png" alt="" /></li>
            <li><img src="/icon/instagram.png" alt="" /></li>
            <li><img src="/icon/twitter.png" alt="" /></li>
            <li><img src="/icon/youtube.png" alt="" /></li>
          </ul>
        </div>

        <div className="search-and-menu-icons">
          <i className='bx bx-search-alt'></i>
          <i className='bx bx-menu' onClick={handleMenuClick}></i>
        </div>
      </div>
      </div>

    
        <div className={`menu__responsives ${showMenu ? 'open' : ''}`}>
          <ul>
            <li>Mi viaje por Sudáfrica</li>
            <li>Mi viaje por Centroamérica</li>
            <li>Mi Viaje por Norteamérica</li>
            <li>Mi viaje por Europa</li>
            <li>Mi Viaje por Asia</li>
            <li>Mi Viaje por África</li>
            <li>Mi Viaje por Oceanía</li>
          </ul>
        </div>
     
    </div>
  );
};

export default Header;
