import React from 'react';
import styled from 'styled-components';
import { TextExtraLarge } from '../../uiComponents/Typography';
import { mobileVersionList, mobileVersionLayout } from '../../helpers/constants/mobileSize';

export const SearchNotFound = () => (
  <ConteinerNotFound>
    <ContainerText>
      <TextNotFound>No such element is found, create it</TextNotFound>
    </ContainerText>
  </ConteinerNotFound>
);

const ConteinerNotFound = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 300px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media(max-width: ${mobileVersionList}) {
    grid-template-columns: repeat(2, 400px);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media(max-width: ${mobileVersionLayout}) {
    grid-template-columns: 180px 180px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
`;

const ContainerText = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  display: flex;
`;

const TextNotFound = styled(TextExtraLarge)`
  margin: auto;
  font-size: 65px;
  color: ${({ theme }) => theme.colors.grey};

  @media(max-width: ${mobileVersionList}) {
    font-size: 49px;
  }
  
  @media(max-width: ${mobileVersionLayout}) {
    text-align: center;
    line-height: 130px;
  }
`;
