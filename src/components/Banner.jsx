import React from 'react';
import './Styles/banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-container">
        <img src="/banner.jpg" alt="" />
      </div>

      <div className='inputText'>
        <input className='buscar'  type="text" placeholder="Buscar" />
        <i className='bx bx-search-alt'></i>
      </div>


      <div className="destination-container">
        <div className="destination destination-1">
          <img src="/tourist/imagen2.jpg" alt="" />
          <h4>MI VIAJE POR SUDAMERICA</h4>
        </div>

        <div className="destination destination-2">
          <img src="/tourist/imagen1.jpg" alt="" />
          <h4>MI VIAJE POR CENTROAMERICA</h4>
        </div>

        <div className="destination destination-3">
          <img src="/tourist/imagen3.jpg" alt="" />
          <h4>MI VIAJE POR EUROPA</h4>
        </div>

        <div className="destination destination-4">
          <img src="/tourist/imagen4.jpg" alt="" />
          <h4>MI VIAJE POR AFRICA</h4>
        </div>

        <div className="destination destination-5">
          <img src="/tourist/imagen5.jpg" alt="" />
          <h4>MI VIAJE POR NORTEAMERICA</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
