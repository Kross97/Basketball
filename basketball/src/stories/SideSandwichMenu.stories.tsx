import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { SideSandwichMenu } from '../uiComponents/SideSandwichMenu';

export default {
  title: 'UI/Menu',
  component: SideSandwichMenu,
} as Meta;

export const SandwichMenu = () => (
  <MockCotainer>
    <SideSandwichMenu />
  </MockCotainer>
);

const MockCotainer = styled.div`
  display: inline-block;
  height: 690px;
  border: 1px solid #D1D1D1;
`;
