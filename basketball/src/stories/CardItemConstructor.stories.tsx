import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { CardItemConstructor } from '../components/CardItemConstructor';
import { sizeMobile } from '../helpers/constants/mobileSize';
import { Team } from '../helpers/Mock_team';
import { Player } from '../helpers/Mock_player';

export default {
  title: 'Components/ItemConstructor',
  component: CardItemConstructor,
} as Meta;

export const TeamItem = () => (
  <MockContainer>
    <CardItemConstructor type="team" item={Team} />
  </MockContainer>
);

export const PlayerItem = () => (
  <MockContainer>
    <CardItemConstructor type="player" item={Player} />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 364px;
  height: 380px;
  
  @media(max-width: ${sizeMobile}) {
    width: 170px;
    height: 180px;
  }
`;
