import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { SelectCounts } from '../uiComponents/SelectCounts';

export default {
  title: 'UI/SelectCounts',
  component: SelectCounts,
} as Meta;

export const Select = () => (
  <MockContainer>
    <SelectCounts />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 88px;
`;
