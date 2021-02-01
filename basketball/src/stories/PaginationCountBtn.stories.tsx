import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PaginationCountBtn } from '../uiComponents/PaginationCountBtn';
import { PagginationBtn } from '../helpers/types/types';

export default {
  title: 'UI/Buttons',
  component: PaginationCountBtn,
} as Meta;

interface IProps {
  type: PagginationBtn;
}

export const PaginationBtn = ({ type = 'break' }: IProps) => (
  <PaginationCountBtn
    type={type}
  />
);

PaginationBtn.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['break', 'prev', 'next'],
    },
  },
};
