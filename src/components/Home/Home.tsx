import React from 'react';

import './Home.css';
import Header from '../Header';

const Home = () => {
  return <div className='home-container'>
    <Header />

    <p className='text-xl mb-40'>HERO section</p>
    <p className='text-xl mb-40'>work section</p>
  </div>;
};

export default Home;
