import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { EnumerationPlayersTeam } from '../uiComponents/EnumerationPlayersTeam';
import { listPlayers } from '../helpers/storybookMockConstants/listPlayers';

export default {
  title: 'Components/EnumerationPlayers',
  component: EnumerationPlayersTeam,
} as Meta;

export const EnumerationPlayers = () => <EnumerationPlayersTeam players={listPlayers} />;
