import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { FieldSearch } from '../uiComponents/FieldSearch';

export default {
  title: 'UI/Search',
  component: FieldSearch,
} as Meta;

export const SearchInput = () => (
  <MockContainer>
    <FieldSearch onChange={(({ target: { value } }) => console.log('change => ', value))} />
  </MockContainer>
);

const MockContainer = styled.div`
  width: 366px;
`;
