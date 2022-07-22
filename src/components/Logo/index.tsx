import React, { FC } from 'react';

export interface LogoProps {
  logoUrl: string;
  altText: string;
  sizePx?: number;
}

export const Logo: FC<LogoProps> = ({ logoUrl, altText, sizePx = 78 }) => {
  return (
    <img
      src={logoUrl}
      width={`${sizePx}px`}
      height={`${sizePx}px`}
      alt={`${altText} logo`}
      style={{ borderRadius: '40px' }}
    />
  );
};
