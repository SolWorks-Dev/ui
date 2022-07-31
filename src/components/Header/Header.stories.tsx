import React from 'react';
import { Header } from './index';

export default {
  component: Header,
};

export const HeaderExample = () => (
  <Header onBurgerClick={() => {}} openMenu solQuery={undefined} tpsQuery={undefined} />
);
