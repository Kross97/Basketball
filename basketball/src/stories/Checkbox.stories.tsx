import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Checkbox } from "../uiComponents/Checkbox";

export default {
    title: 'Checkbox/Checkbox',
    component: Checkbox,
} as Meta;

interface IProps {
   text: string;
   disabled: boolean;
}

export const AllCheckboxies = ({ text, disabled }: IProps) => (
    <Checkbox
      text={text}
      disabled={disabled}
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
};