import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { TeamsCard } from '../components/TeamsCard';
import { sizeMobile } from '../helpers/constants/mobileSize';

export default {
  title: 'Components/TeamsCard/BasicCard',
  component: TeamsCard,
} as Meta;

export const TeamBasic = () => (
  <MockContainer>
    <TeamsCard id={1} />
  </MockContainer>
);

const MockContainer = styled.div`
  @media (max-width: ${sizeMobile}) {
    width: 375px;
    height: 606px;
  }
`;
