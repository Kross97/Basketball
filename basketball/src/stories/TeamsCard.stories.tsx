import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { TeamsCard } from '../components/TeamsCard';
import { sizeMobile } from '../helpers/constants/mobileSize';

export default {
  title: 'Components/TeamsCard',
  component: TeamsCard,
} as Meta;

export const TeamCard = () => (
  <MockContainer>
    <TeamsCard />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 1140px;
  @media (max-width: ${sizeMobile}) {
    width: 375px;
    height: 606px;
  }
`;
