import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { TeamsCardItem } from '../components/TeamsCardItem';
import { sizeMobile } from '../helpers/constants/mobileSize';

export default {
  title: 'Components/TeamsCard/Item',
  component: TeamsCardItem,
} as Meta;

export const TeamItem = () => (
  <MockContainer>
    <TeamsCardItem />
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
