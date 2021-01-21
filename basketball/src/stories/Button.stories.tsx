import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { PaginationCountBtn } from '../uiComponents/PaginationCountBtn';

export default {
  title: 'UI/Buttons',
  component: ButtonAction,
} as Meta;

interface IProps {
  type: 'Sign' | 'Add' | 'Cancel',
  size: 'small' | 'middle' | 'large';
  text: string;
  disabled: boolean;
}

export const AllButtons = ({
  type = 'Sign', size = 'middle', text = 'Add', disabled = false,
}: IProps) => (
  <ButtonAction
    type={type}
    size={size}
    text={text}
    disabled={disabled}
  />
);

AllButtons.argsTypes = {
  type: {
    control: {
      type: 'select',
      options: ['Sign', 'Add', 'Cancel'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'middle', 'large'],
    },
  },
  text: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
};

interface IProps {
  number: string;
}

export const PaginationBtn = ({ number = '1' }: IProps) => (
  <PaginationCountBtn
    number={number}
  />
);

PaginationBtn.argTypes = {
  number: {
    control: {
      type: 'range',
      min: 1,
      max: 100,
      step: 1,
    },
  },
};
