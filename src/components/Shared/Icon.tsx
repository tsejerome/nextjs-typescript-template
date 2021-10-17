import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Colours from './Colours';
const loadingWhiteIcon = require('../../assets/icons/loading__blue.svg')
const loadingBlueIcon = require('../../assets/icons/loading__white.svg')
const crossGreyIcon = require('../../assets/icons/cross__grey.svg')

export enum IconType {
  'Loading' = 'loading',
  // 'Microphone' = 'microphone',
  // 'Google' = 'google',
  // 'Email' = 'email',
  // 'Pause' = 'pause',
  // 'Play' = 'play',
  // 'Waveform' = 'waveform',
  // 'Edit' = 'edit',
  // 'Share' = 'share',
  // 'Close' = 'close',
  // 'Copy' = 'copy',
}

interface IconProps {
  type: IconType;
  size?: number;
  color?: string;
  style?: any
}

const getImageSrc = (type: IconType, color: string) => {
  //TODO: Setup icons
  if (type === IconType.Loading && color === Colours.White) return loadingWhiteIcon;
  if (type === IconType.Loading && color === Colours.MainBlue) return loadingBlueIcon
  return crossGreyIcon;
};

const Icon = ({ type, size = 18, color, style = {} }: IconProps) => {
  return (
    <div style={style}>

      <Image
        src={getImageSrc(type, color)}
        alt={'play icon'}
        width={size}
        height={size}
      />
    </div>
  );
};
export default Icon;
