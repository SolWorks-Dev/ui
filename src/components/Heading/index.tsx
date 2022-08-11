import { Text } from '@mantine/core';
import React, { FC } from 'react';

export interface HeadingProps {
  text: string;
  size?: number;
}

export const Heading: FC<HeadingProps> = ({ text = '', size = 42 }) => {
  return <Text sx={(theme) => ({
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
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
