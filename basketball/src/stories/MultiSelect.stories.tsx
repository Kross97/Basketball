import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { MultiSelectEntities } from '../uiComponents/MultiSelectEntities';

export default {
  title: 'UI/SelectsCommands',
  component: MultiSelectEntities,
} as Meta;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'red', label: 'Red' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }];

export const PlayersMultiSelect = () => (
  <MockContainer>
    <MultiSelectEntities
      onChange={console.log}
      isPlaceholder
      isMulti
      options={options}
    />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 365px;
`;
