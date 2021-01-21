import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { MultiSelectPlayers } from '../uiComponents/MultiSelectPlayers';

export default {
  title: 'UI/Selects',
  component: MultiSelectPlayers,
} as Meta;

export const PlayersMultiSelect = () => (
  <MockContainer>
    <MultiSelectPlayers />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 365px;
`;
