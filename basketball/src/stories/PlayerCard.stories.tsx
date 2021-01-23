import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PlayerCard } from '../components/PlayerCard';

export default {
  title: 'Components/Card',
  component: PlayerCard,
} as Meta;

export const CardBase = () => <PlayerCard id={1} />;
