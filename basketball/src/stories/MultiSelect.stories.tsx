import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { MultiSelectCommands } from '../uiComponents/MultiSelectCommands';

export default {
  title: 'UI/SelectsCommands',
  component: MultiSelectCommands,
} as Meta;

export const PlayersMultiSelect = () => (
  <MockContainer>
    <MultiSelectCommands />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 365px;
`;
