import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { SuspenseAnimation } from '../uiComponents/SuspenseComponent';

export default {
  title: 'Components/Suspense',
  component: SuspenseAnimation,
} as Meta;

export const Suspense = () => (
  <MockContainer>
    <SuspenseAnimation />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 100%;
  height: 800px;
`;
