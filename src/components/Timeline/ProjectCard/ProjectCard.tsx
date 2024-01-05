import React, { useRef } from 'react';

import './ProjectCard.css';

import logoPago from '@/Assets/img/logo/pago-logo.svg';
import logoFr from '@/Assets/img/logo/fr-logo.png';
import videoFRLogo from '@/Assets/video/coindeck-capture.webm';

export enum Projects {
  'pago' = 'pago',
  //   'coindeck' = 'coindeck',
  'fr' = 'fr',
  //   'cdg' = 'cdg',
}

type TProjectCardProps = {
  name: keyof typeof Projects;
};

const projectData = {
  [Projects.pago]: {
    name: 'Pago',
    description: 'Personal finance',
    logoSrc: logoPago,
  },
  [Projects.fr]: {
    name: 'French Revolution',
    description: 'E-commerce',
    logoSrc: logoFr,
  },
};

const ProjectCard = ({ name }: TProjectCardProps) => {
  const data = projectData[name];

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="project-card-container"
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-circle">
        <img className="project-card-logo" src={data.logoSrc} alt="project" width={116} />
        <div className="project-card-circle-label">
          <p className="text-base text-black-400">
            See <br /> case study
          </p>
          <p className="text-base text-black-400">-&gt;</p>
        </div>
      </div>
      <div className="project-card-title">
        <p className="text-md text-black-400">{data.name}</p>
        <p className="text-base opacity-50 text-black-400">{data.description}</p>
      </div>
      <video className="project-card-video" ref={videoRef}>
        <source src={videoFRLogo} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProjectCard;
