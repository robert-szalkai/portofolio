import React, { useRef } from 'react';

import './ProjectCard.css';

import logoPago from '@/Assets/img/logo/pago-logo.svg';
import logoFr from '@/Assets/img/logo/fr-logo.png';
import logoCoindeck from '@/Assets/img/logo/coindeck-logo.svg';
import logoCdg from '@/Assets/img/logo/cdg-logo-white.svg';

import videoFR from '@/Assets/video/fr-video.mp4';
import videoCoindeck from '@/Assets/video/coindeck.mp4';
import videoCdg from '@/Assets/video/cdg-screen-record.webm';

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
    circleColor: 'bg-orange-400', // group-hover:bg-orange-400
    video: videoFR,
  },
  [Projects.coindeck]: {
    name: 'Coindeck',
    description: 'Cryptocurrency exchange platform',
    logoSrc: logoCoindeck,
    width: 'min-w-[720px]',
    bgColor: 'bg-green-500',
    circleColor: 'bg-green-500', // group-hover:bg-green-500
    video: videoCoindeck,
  },
  [Projects.fr]: {
    name: 'French Revolution',
    description: 'E-commerce',
    logoSrc: logoFr,
    width: 'min-w-[1151px]',
    bgColor: 'bg-orange-400',
    circleColor: 'bg-orange-400',
    video: videoFR,
  },
  [Projects.cdg]: {
    name: 'Champ du golf',
    description: 'Golf simulator',
    logoSrc: logoCdg,
    width: 'min-w-[720px]',
    bgColor: 'bg-green-100',
    circleColor: 'bg-green-100', // group-hover:bg-green-100
    video: videoCdg,
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
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`project-card-container ${data.width} group`}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className={[data.bgColor, 'project-card-bg'].join(' ')}></div>
      <div className={`project-card-circle group-hover:${data.circleColor}`}>
        <img
          className={['project-card-logo', name === 'cdg' ? 'invert' : ''].join(' ')}
          src={data.logoSrc}
          alt="project"
          width={116}
        />
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
        <source src={data.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProjectCard;
