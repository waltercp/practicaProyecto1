import React, { useState } from 'react';
import TouristPlacesList from './TouristPlacesList';
import Pagination from './Pagination';

import './Styles/TouristPlaces.css';

const imgs = [1, 2, 3, 4, 5];

const getRandomArray = (arr, count) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  const sliced = shuffled.slice(0, count);
  return sliced;
};

const TouristPlaces = () => {
  const [pageTourist, setPageTourist] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * pageTourist;
  const firstIndex = lastIndex - pageTourist;

  const repetitions = 6;

  const shuffledImgs = getRandomArray(imgs, repetitions);

  const knowledgeList = (numberImg) => ({
    title: 'Type Something here',
    descripcion:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit molestias rem ut laudantium? Sunt, ducimus. Beatae debitis, similique quidem, alias dolorem, consectetur voluptatum exercitationem harum veritatis nam architecto iste numquam.',
    img: `/tourist/imagen${numberImg}.jpg`,
    button: 'Leer Mas',
    fecha: '30.09.2018',
  });

  return (
    <div>
      <Pagination
        pageTourist={pageTourist}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        poblacion={30}
      />

      <div className='touristPlaces'>
        {shuffledImgs.slice(1, 5).map((numberImg, imgIndex) => (
          <div key={imgIndex} className='touristPlaces__list'>
            <TouristPlacesList knowledge={knowledgeList(numberImg)} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default TouristPlaces;
