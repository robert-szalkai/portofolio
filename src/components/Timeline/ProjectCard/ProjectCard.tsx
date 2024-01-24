import React, { useRef } from 'react';

import './ProjectCard.css';

import logoPago from '@/Assets/img/logo/pago-logo.svg';
import logoFr from '@/Assets/img/logo/fr-logo.png';
import logoCoindeck from '@/Assets/img/logo/coindeck-logo.svg';
import videoFRLogo from '@/Assets/video/coindeck.mp4';

export enum Projects {
  'pago' = 'pago',
  'coindeck' = 'coindeck',
  'fr' = 'fr',
  'cdg' = 'cdg',
}

type TProjectCardProps = {
  name: keyof typeof Projects;
};

const projectData = {
  [Projects.pago]: {
    name: 'Pago',
    description: 'Personal finance',
    logoSrc: logoPago,
    width: 'min-w-[1151px]',
    bgColor: 'bg-orange-400',
  },
  [Projects.coindeck]: {
    name: 'Coindeck',
    description: 'Cryptocurrency exchange platform',
    logoSrc: logoCoindeck,
    width: 'min-w-[720px]',
    bgColor: 'bg-green-500',
  },
  [Projects.fr]: {
    name: 'French Revolution',
    description: 'E-commerce',
    logoSrc: logoFr,
    width: 'min-w-[1151px]',
    bgColor: 'bg-green-100',
  },
  [Projects.cdg]: {
    name: 'Champ du golf',
    description: 'Golf simulator',
    logoSrc: logoCoindeck,
    width: 'min-w-[720px]',
    bgColor: 'bg-green-100',
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
      className={`project-card-container ${data.width} ${data.bgColor}`}
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
        <p className="text-base opacity-50 text-black-400 font-light">
          {data.description}
        </p>
      </div>
      <video className="project-card-video" ref={videoRef} muted>
        <source src={videoFRLogo} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProjectCard;
