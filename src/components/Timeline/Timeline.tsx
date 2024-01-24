import InfoCard from './InfoCard';
import ProjectCard from './ProjectCard';
import React from 'react';

const Timeline = () => {
  return (
    <section className="mb-[320px] pl-5">
      <div className="overflow-x-auto grid gap-6">
        <div className="flex gap-8">
          <div className="grid content-start mr-48">
            <p className="text-big md:text-xxl font-lust">Timeline</p>
            <p className="text-green-200 uppercase">My work</p>
          </div>
          <ProjectCard name={'fr'} />
          <ProjectCard name={'cdg'} />
          <InfoCard name="cat" classes="whitespace-nowrap" />
        </div>
        <div className="flex gap-8 ml-72 mr-28">
          <InfoCard name="champion" classes="mr-16" />
          <ProjectCard name={'coindeck'} />
          <InfoCard name="vacation" classes="ml-8" />
        </div>
        <div className="flex gap-8 ml-[736px] mr-28">
          <InfoCard name="football" />
          <ProjectCard name={'pago'} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
