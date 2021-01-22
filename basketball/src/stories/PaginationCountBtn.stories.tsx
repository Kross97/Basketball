import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaginationCountBtn } from '../uiComponents/PaginationCountBtn';

export default {
  title: 'UI/Buttons',
  component: PaginationCountBtn,
} as Meta;

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
