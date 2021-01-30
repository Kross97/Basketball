import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { SelectCounts } from '../uiComponents/SelectCounts';

export default {
  title: 'UI/SelectCounts',
  component: SelectCounts,
} as Meta;

interface IOption {
  value: string,
  label: string,
}

export const Select = () => (
  <MockContainer>
    <SelectCounts onChange={(option: IOption) => console.log('option =>', option)} />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 88px;
`;
