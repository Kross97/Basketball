import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextLink } from '../uiComponents/TextLink';

export default {
  title: 'UI/Links',
  component: TextLink,
} as Meta;

interface IProps {
  text: string;
  to: string;
  disabled: boolean;
}

export const Link = ({ text = 'Text', to = '#', disabled = false }: IProps) => (
  <TextLink
    text={text}
    to={to}
    disabled={disabled}
  />
);

Link.argTypes = {
  text: {
    control: {
      type: 'text',
    },
  },
  to: {
    type: 'text',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};
