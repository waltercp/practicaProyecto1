import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import TouristPlaces from './components/TouristPlaces';
import Login from './components/Login';

function App() {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogin(false);
    }, 5000);


    console.log(login)
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  return (
    <>
      {login && <Login />}
      <Header />
      <Banner />
      <TouristPlaces />
      <Footer />
    </>
  );
}

export default App;
