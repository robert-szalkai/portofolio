import ProjectCard from './ProjectCard';
import React from 'react';

const Timeline = () => {
  return (
    <section className="mb-[320px] pl-5">
      <div className="timeline-container">
        <div className="grid">
          <div className="grid">
            <p className="text-big md:text-xxl font-lust">Timeline</p>
            <p className="text-green-200 uppercase">My work</p>
          </div>
          <ProjectCard name={'pago'} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
