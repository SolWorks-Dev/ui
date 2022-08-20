import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { FC } from 'react';
import { Skeleton } from '@mantine/core';

export interface LogoProps {
  logoUrl: string;
  altText: string;
  sizePx?: number;
}

export const Logo: FC<LogoProps> = ({ logoUrl, altText, sizePx = 78 }) => {
  return (
    <LazyLoadImage
      src={logoUrl}
      width={`${sizePx}px`}
      height={`${sizePx}px`}
      alt={`${altText} logo`}
      style={{ borderRadius: '40px' }}
      radius={40}
      placeholder={<Skeleton circle height={`${sizePx}px`} color="rgb(153, 153, 153)" />}
    />
  );
};