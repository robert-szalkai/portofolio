import React from 'react';

import './Hero.css';
import ballImg from '@/Assets/img/homedeco-ball.png';
import selfieImg from '@/Assets/img/homedeco-selfie-1.png';
import tooltipImg from '@/Assets/img/home_deco2.png';
import orangeCircleImg from '@/Assets/img/Home_deco1.png';
import greenCircleImg from '@/Assets/img/Home_deco3.png';
import Button from '@/Components/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:container flex flex-col items-center gap-10 pt-20 pb-48 px-5"
    >
      <h1 className="title">
        <img
          width={82}
          className="orange-circle w-1/12 xl:w-fit"
          src={orangeCircleImg}
          alt="orange-circle"
        />
        Expert Front-end <img className="inline" src={tooltipImg} alt="ball" /> MVP <br />
        Developer <img className="inline" src={ballImg} alt="ball" /> for <br />
        <img className="inline" src={selfieImg} alt="selfie" /> Interactive websites
        <img className="green-circle w-1/12 xl:w-fit" src={greenCircleImg} alt="green-circle" />
      </h1>
      <p className="subtitle mb-4">
        A perfectionist who never settles for anything less than excellence. I take pride
        in delivering <br /> robust code that's clean, efficient, and ready to play.
      </p>

      <div className="flex gap-6">
        <Button variant='btn-primary'>See my work</Button>
        <Button variant="btn-ghost">
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default Hero;
