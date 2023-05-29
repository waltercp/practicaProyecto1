import React from 'react';
import './Styles/TouristPlacesList.css';

const TouristPlacesList = ({ knowledge }) => {
    return (
        <div className='TouristPlacesList'>
            <div className='knowledge-container-img'>
                <img src={knowledge.img} alt="" />
            </div>

            <div className='knowledge-container-info'>
                <h3 className='knowledge__title'>{knowledge.title}</h3>
                <p className='knowledge__fecha'>{knowledge.fecha}</p>
                <p className='knowledge__descripcion'>{knowledge.descripcion}</p>
                <button className='knowledge__button'>{knowledge.button}</button>
            </div>
        </div>
    );
}

export default TouristPlacesList;
