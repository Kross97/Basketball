import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { AuthorizedUserLogo } from '../uiComponents/AuthorizedUserLogo';

export default {
  title: 'UI/UserLogo',
  component: AuthorizedUserLogo,
} as Meta;

interface IProps {
  name: string;
}

export const AuthorizedLogo = ({ name }: IProps) => (
  <AuthorizedUserLogo
    name={name}
  />
);

AuthorizedLogo.argTypes = {
  name: {
    defaultValue: 'John Smith',
    control: {
      type: 'text',
    },
  },
};
