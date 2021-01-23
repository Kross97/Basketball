import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PlayerCard } from '../components/PlayerCard';

export default {
  title: 'Components/PlayerCards/BaseCard',
  component: PlayerCard,
} as Meta;

export const PlayerCardBase = () => <PlayerCard id={1} />;
