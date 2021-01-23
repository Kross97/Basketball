import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { PlayerCard } from '../components/PlayerCard';
import { sizeMobile } from '../helpers/constants/mobileSize';

export default {
  title: 'Components/Players/BaseCard',
  component: PlayerCard,
} as Meta;

export const CardPlayerBase = () => (
  <MockContainer>
    <PlayerCard id={1} />
  </MockContainer>
);

export const MockContainer = styled.div`
 width: 1140px;
  
  @media(max-width: ${sizeMobile}) {
    width: 375px;
    height: 852px;
  }
`;
