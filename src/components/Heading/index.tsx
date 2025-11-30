import { Text } from '@mantine/core';
import React, { FC } from 'react';

export interface HeadingProps {
  text: string;
  size?: number;
  smallSize?: number;
}

export const Heading: FC<HeadingProps> = ({ text = '', size = 42, smallSize = 30 }) => {
  return (
    <Text 
      sx={(theme) => ({
        color: 'var(--text-primary)',
        fontSize: `${size}px`,
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
        textAlign: 'left',
        
        '@media (max-width: 420px)': {
          fontSize: `${smallSize}px`,
        },
      })}
    >
      {text}
    </Text>
  );
};
