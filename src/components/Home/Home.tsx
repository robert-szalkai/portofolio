import React from 'react';

import './Home.css';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <main>
        <Hero />
        <p className="text-xl my-40">HERO section</p>
        <p className="text-xl mb-40">work section</p>
      </main>
    </div>
  );
};

export default Home;
