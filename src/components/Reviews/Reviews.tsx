import React from 'react';
import './Reviews.css';

import icon from '@/Assets/img/testimonial_deco1.png';
import avatar from '@/Assets/img/Home_deco1.png';

const Reviews = () => {
  return (
    <section className="max-w-6xl px-5 mx-auto grid gap-14 md:gap-16">
      <div className="flex gap-10">
        <p className="text-big md:text-xxl font-lust mb-14 md:mb-30">
          What people say
          <img
            src={icon}
            alt="profile picture"
            className="inline ml-4 md:ml-10 w-[76px] md:w-auto"
          />{' '}
          <br />
          about me
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <div className="border border-white rounded-xl border-opacity-45 px-6 py-8">
          <div className="grid gap-7">
            <div className="flex justify-between">
              <div className="flex gap-3.5">
                <img src={avatar} alt="avatar" width="54" height="54" />
                <div className="grid gap-1.5">
                  <p className="font-semibold">Mihai Bogdan Gomoi</p>
                  <p className="text-gray-300 text-opacity-30 font-light">
                    Senior Software Developer
                  </p>
                </div>
              </div>
            </div>
            <p>
              I had the pleasure of managing Robert as part of my team and was
              consistently impressed by his technical abilities and work ethic. Robert has
              a unique talent for quickly mastering new frontend frameworks and
              technologies, which was a valuable asset to our team. He consistently
              demonstrated his expertise and commitment to delivering high-quality
              results. In addition, Robert's friendly and approachable demeanour made him
              a joy to work with and a valuable member of the team. ...
            </p>
          </div>
        </div>

        <div className="border border-white rounded-xl border-opacity-45 px-6 py-8">
          <div className="grid gap-7">
            <div className="flex justify-between">
              <div className="flex gap-3.5">
                <img src={avatar} alt="avatar" width="54" height="54" />
                <div className="grid gap-1.5">
                  <p className="font-semibold">Mihnea Nandra</p>
                  <p className="text-gray-300 text-opacity-30 font-light">
                    Frontend Developer at Urban Sports Club
                  </p>
                </div>
              </div>
            </div>
            <p>
              Robert was my teammate at Cloud Innovations. We worked together on two big
              projects in the company. I ended getting a lot of information from Robert
              because he was always there to help. He has a lot of patience and is very
              skilled in the frontend development department. He's a master of the CSS and
              works really really good with JS and JS related frameworks. He accomplished
              to learn React on a very short period and now I can say he's proficient with
              React. The best asset of Robert is that he's very friendly and made the work
              more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
