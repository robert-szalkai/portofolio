import React from 'react';

import './Home.css';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Skills from '../Skills';

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <main>
        <Hero />

        <p className="text-xmd md:text-md text-center px-5 mb-36 md:mb-44">
          Are you tired of mediocre developers who can't keep up with the
          <br className="hidden lg:block" />
          fast pace of the game? Look no further! I'm the MVP you need on
          <br className="hidden lg:block" />
          your team. As a front-end and React developer, I bring my A-game
          <br className="hidden lg:block" />
          to every project. With my fluency in HTML, CSS, and JS
          <br className="hidden lg:block" />
          interaction, I can tackle even the toughest digital challenges.
        </p>

        <Skills />

        <p className="text-xl my-40">HERO section</p>
        <p className="text-xl mb-40">work section</p>
      </main>
    </div>
  );
};

export default Home;
