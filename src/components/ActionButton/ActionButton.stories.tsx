import React from 'react';
import { ActionButton } from './index';

export default {
  component: ActionButton,
};

export const Loading = () => <ActionButton isLoading={true} text="Learn more" />;

export const Normal = () => <ActionButton text="Learn more" />;
