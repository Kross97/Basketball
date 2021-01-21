import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { CheckboxСhoice } from '../uiComponents/CheckboxСhoice';

export default {
  title: 'UI/Checkbox',
  component: CheckboxСhoice,
} as Meta;

interface IProps {
  text: string;
  disabled: boolean;
  checked: boolean;
  isError: boolean;
  errorMessage: string;
}

export const AllCheckboxies = ({
  text = 'Text',
  disabled = false,
  checked = false,
  isError = false,
  errorMessage = '',
}: IProps) => (
  <CheckboxСhoice
    text={text}
    disabled={disabled}
    checked={checked}
    isError={isError}
    errorMessage={errorMessage}
  />
);

AllCheckboxies.argsTypes = {
  text: {
    control: {
      type: 'text',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  checked: {
    control: {
      type: 'boolean',
    },
  },
  isError: {
    control: {
      type: 'boolean',
    },
  },
  errorMessage: {
    control: {
      type: 'text',
    },
  },
};
