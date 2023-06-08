import React from 'react';

import './Skills.css';

import reactIcon from '@/Assets/img/react_icon.png';
import jsIcon from '@/Assets/img/javascript_icon.png';
import htmlIcon from '@/Assets/img/html_icon.png';

const Skills = () => {
  return (
    <section className="lg:container px-5">
      <p className="text-big md:text-xxl font-lust mb-14 md:mb-30">Capabilities</p>

      <p className="text-normal uppercase text-green-200 font-light tracking-[2px] mb-6">
        TECHNOLOGIES
      </p>

      <div className="grid gap-10 mb-36">
        <div className="skills-container">
          <img src={reactIcon} alt="react" />
          <p className="text-md md:text-lg font-lust">React</p>
          <p className="text-normal md:text-base col-start-2 text-opacity-60 text-gray-300">
            Proficient in building and maintaining complex web applications using React,
            Redux <br className="hidden lg:block" /> and related technologies.
          </p>
        </div>

        <div className="skills-container">
          <img src={jsIcon} alt="javascript" />
          <p className="text-md md:text-lg font-lust">Javascript</p>
          <p className="text-normal md:text-base col-start-2 text-opacity-60 text-gray-300">
            Strong understanding of JavaScript and its modern concepts such as ES6,
            asynchronous <br className="hidden md:block" /> programming, and functional
            programming.
          </p>
        </div>
        <div className="skills-container">
          <img src={htmlIcon} alt="html" />
          <p className="text-md md:text-lg font-lust">HTML & CSS</p>
          <p className="text-normal md:text-base col-start-2 text-opacity-60 text-gray-300">
            Good knowledge of HTML and CSS, including CSS preprocessors like SCSS or Less,
            and <br className="hidden md:block" /> responsive design techniques.
          </p>
        </div>
      </div>

      <p className="text-normal uppercase text-green-200 font-light tracking-[2px] mb-6">
        & TECHNICAL SKILLS
      </p>

      <div className="grid gap-10">
        <div className="grid gap-6">
          <p className="text-md md:text-lg font-lust">Web Development Tools</p>
          <p className="text-normal md:text-base text-opacity-60 text-gray-300">
            Familiarity with common web development tools like Git, Webpack, Babel, and
            npm.
          </p>
        </div>

        <div className="grid gap-6">
          <p className="text-md md:text-lg font-lust">Cross-browser compatibility</p>
          <p className="text-normal md:text-base text-opacity-60 text-gray-300">
            Familiarity with common web development tools like Git, Webpack, Babel, and
            npm.
          </p>
        </div>

        <div className="grid gap-6">
          <p className="text-md md:text-lg font-lust">Testing</p>
          <p className="text-normal md:text-base text-opacity-60 text-gray-300">
            Knowledge of testing frameworks like Jest, Enzyme, Mocha, or Chai, and an
            understanding <br className="hidden md:block" /> of the importance of testing
            in a continuous delivery environment.
          </p>
        </div>

        <div className="grid gap-6">
          <p className="text-md md:text-lg font-lust">User Experience</p>
          <p className="text-normal md:text-base text-opacity-60 text-gray-300">
            Understanding of user-centered design principles and experience in designing
            and implementing
            <br className="hidden md:block" /> intuitive, user-friendly interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
