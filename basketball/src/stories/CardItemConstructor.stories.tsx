import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { CardItemConstructor } from '../components/CardItemConstructor';
import { sizeMobile } from '../helpers/constants/mobileSize';
import { Team } from '../helpers/Mock_DATA';

export default {
  title: 'Components/ItemConstructor',
  component: CardItemConstructor,
} as Meta;

export const TeamItem = () => (
  <MockContainer>
    <CardItemConstructor item={Team} />
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
