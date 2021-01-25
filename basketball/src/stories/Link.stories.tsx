import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextLink } from '../uiComponents/TextLink';

export default {
  title: 'UI/Links',
  component: TextLink,
} as Meta;

interface IProps {
  text: string;
  href: string;
  disabled: boolean;
}

export const Link = ({ text = 'Text', href = '#', disabled = false }: IProps) => (
  <TextLink
    text={text}
    to={href}
    disabled={disabled}
  />
);

Link.argTypes = {
  text: {
    control: {
      type: 'text',
    },
  },
  href: {
    type: 'text',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
};
