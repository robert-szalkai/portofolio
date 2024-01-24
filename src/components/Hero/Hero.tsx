import React from 'react';

import './Hero.css';
import ballImg from '@/Assets/img/homedeco-ball.png';
import selfieImg from '@/Assets/img/homedeco-selfie-1.png';
import tooltipImg from '@/Assets/img/Home_deco2.png';
import orangeCircleImg from '@/Assets/img/Home_deco1.png';
import greenCircleImg from '@/Assets/img/Home_deco3.png';
import Button from '@/Components/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:container flex flex-col items-center gap-10 pt-20 pb-40 md:pb-48 px-5"
    >
      <h1 className="title">
        <img
          width={82}
          className="orange-circle w-[48px] xl:w-fit"
          src={orangeCircleImg}
          alt="orange-circle"
        />
        Expert Front-end <br className="block lg:hidden" />
        <img
          className="inline h-8 md:h-auto"
          src={tooltipImg}
          alt="green circle"
        /> MVP <br />
        Developer <img className="inline h-8 md:h-auto" src={ballImg} alt="ball" />{' '}
        <br className="block lg:hidden" /> for <br className="hidden lg:block" />
        <img className="selfie-img" src={selfieImg} alt="selfie" /> Interactive{' '}
        <br className="block lg:hidden" /> websites
        <img
          className="green-circle w-[30px] md:w-[48px] xl:w-fit"
          src={greenCircleImg}
          alt="green-circle"
        />
      </h1>
      <p className="subtitle mb-4">
        A perfectionist who never settles for anything less than excellence. I take pride
        in delivering <br className="hidden lg:block" /> robust code that's clean,
        efficient, and ready to play.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Button variant="btn-primary">See my work</Button>
        <Button variant="btn-ghost">Download CV</Button>
      </div>
    </section>
  );
};

export default Hero;
