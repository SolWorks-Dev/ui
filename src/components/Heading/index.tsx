import { Text } from '@mantine/core';
import React, { FC } from 'react';

export interface HeadingProps {
  text: string;
  size?: number;
  smallSize?: number;
}

export const Heading: FC<HeadingProps> = ({ text = '', size = 42, smallSize = 30 }) => {
  return <Text sx={(theme) => ({
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    '@media (max-width: 420px)': {
      fontSize: `${smallSize}px`,
    },
    fontSize: `${size}px`,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
  })}>{text}</Text>;
};
