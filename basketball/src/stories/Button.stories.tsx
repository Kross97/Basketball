import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { SizesButton, TypesButton } from '../helpers/types/types';

export default {
  title: 'UI/Buttons',
  component: ButtonAction,
} as Meta;

interface IProps {
  isNegativeStyle: boolean;
  isAdding: boolean;
  size: SizesButton;
  text: string;
  disabled: boolean;
  type: TypesButton;
}

export const AllButtons = ({
  isNegativeStyle = false,
  isAdding = false,
  size = 'middle',
  text = 'Add',
  disabled = false,
  type = 'button',
}: IProps) => (
  <ButtonAction
    isNegativeStyle={isNegativeStyle}
    isAdding={isAdding}
    size={size}
    text={text}
    disabled={disabled}
    type={type}
  />
);

AllButtons.argsTypes = {
  isNegativeStyle: {
    control: {
      type: 'boolean',
    },
  },
  isAdding: {
    control: {
      type: 'boolean',
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
