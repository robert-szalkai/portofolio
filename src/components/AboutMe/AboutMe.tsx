import React from 'react';

import './AboutMe.css';

import aboutMeImg1 from '@/Assets/img/about_robi-1.png';
import aboutMeImg2 from '@/Assets/img/about_robi-2.png';

const AboutMe = () => {
  return (
    <section className="max-w-6xl px-5 mx-auto mb-[340px]">
      <div className="about-me-container mb-16 md:mb-64">
        <p className="about-me-text deliver">
          <span className="low-light-text">
            You can always count on me to be in the zone and
          </span>
          <span className="text-green-100"> deliver results on time</span>
          <span className="low-light-text">
            , every time. I'm a team player who knows how to work hard and play hard. My
          </span>
          <span className="text-orange-400"> big-picture thinking</span>
          <span className="low-light-text"> ensures that we stay</span>
          <span className="text-gray-300"> ahead of the game</span>
          <span className="low-light-text">
            , avoiding the need for a last-minute Hail Mary pass.
          </span>
        </p>

        <div className="relative flex gap-20">
          <img src={aboutMeImg1} alt="profile picture" className="img-deliver" />
          <span className="about-me-img-line deliver"></span>
        </div>
      </div>

      <div className="about-me-container">
        <div className="relative flex gap-20">
          <img src={aboutMeImg2} alt="coach picture" className="img-coach" />
          <span className="about-me-img-line coack"></span>
        </div>

        <p className="about-me-text coach">
          <span className="low-light-text">
            I love the thrill of the game and the rush of the win. That's why I'm
          </span>
          <span className="text-gree-100"> always learning and staying up-to-date </span>
          <span className="low-light-text">
            with the latest technology trends. I'm not just a developer,
          </span>
          <span className="text-orange-400"> I'm a coach </span>
          <span className="low-light-text">
            who can guide you through the game and help you score big. With my expertise
            and good practices, we can
          </span>
          <span className="text-gray-300">
            {' '}
            take your digital product to the next level.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
