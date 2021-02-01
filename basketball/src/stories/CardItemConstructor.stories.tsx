import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { CardItemConstructor } from './CardItemForStories';
import { Team } from '../helpers/storybook_mock_constants/Mock_team';
import { Player } from '../helpers/storybook_mock_constants/Mock_player';

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
  
`;
