import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { NavigationHeader } from '../uiComponents/NavigationHeader';

export default {
  title: 'UI/NavigationHeader',
  component: NavigationHeader,
} as Meta;

export const Navigation = () => (
  <MockContainer>
    <NavigationHeader />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 1440px;
`;
