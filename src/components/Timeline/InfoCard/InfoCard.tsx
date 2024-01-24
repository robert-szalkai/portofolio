import React from 'react';

import catSrc from '@/Assets/img/cat.png';
import trophySrc from '@/Assets/img/trophy.png';
import airplaneSrc from '@/Assets/img/airplane.png';
import bootSrc from '@/Assets/img/boot.png';

export enum Info {
  'cat' = 'cat',
  'champion' = 'champion',
  'vacation' = 'vacation',
  'football' = 'football',
}

const infoData = {
  [Info.cat]: {
    logo: catSrc,
    text: 'A cat adopted us',
    width: 'max-w-[586px]',
  },
  [Info.champion]: {
    logo: trophySrc,
    text: 'Two time national soccer junior Romanian champion',
    width: 'max-w-[680px]',
  },
  [Info.vacation]: {
    logo: airplaneSrc,
    text: 'Travelled the world',
    width: 'max-w-[600px]',
  },
  [Info.football]: {
    logo: bootSrc,
    text: 'Lived in Hungary Professional football player, second league',
    width: 'max-w-[600px]',
  },
};

type TInfoCardProps = {
  name: keyof typeof Info;
  classes?: string;
};

const InfoCard = ({ name, classes = '' }: TInfoCardProps) => {
  const data = infoData[name];

  return (
    <div
      className={[
        `flex gap-8 rounded-3xl bg-gray-600 items-center px-15 py-28`,
        data.width,
        classes,
      ].join(' ')}
    >
      <img src={data.logo} alt="info photo" />
      <p className="text-md text-gray-300 opacity-40 font-light">{data.text}</p>
    </div>
  );
};

export default InfoCard;
