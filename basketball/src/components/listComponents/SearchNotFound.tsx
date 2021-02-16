import React from 'react';
import styled from 'styled-components';
import { TextExtraLarge } from '../../uiComponents/Typography';
import {
  mobileVersionList, mobileVersionLayout, sizeMobile, extraSmallLayout,
} from '../../helpers/constants/mobileSize';

export const SearchNotFound = () => (
  <ConteinerNotFound>
    <ContainerText>
      <TextNotFound>No such element is found, create it</TextNotFound>
    </ContainerText>
  </ConteinerNotFound>
);

const ConteinerNotFound = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  grid-template-rows: repeat(2, 300px);


  @media (max-width: ${mobileVersionList}) {
    grid-template-columns: repeat(2, 376px);
  }

  @media (max-width: ${sizeMobile}) {
    grid-template-columns: 180px 180px 180px;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 180px 180px 180px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  @media(max-width: 575px) {
    grid-template-columns: 170px 170px 170px;
  }

  @media (max-width: 542px) {
    grid-template-columns: 180px 180px;
  }

  @media (max-width: 385px) {
    grid-template-columns: 170px 170px;
  }

  @media (max-width: ${extraSmallLayout}) {
    grid-template-columns: 150px 150px;
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

  @media (max-width: 1390px) {
    font-size: 58px;
  }


  @media (max-width: ${mobileVersionList}) {
    font-size: 46px;
  }


  @media (max-width: ${mobileVersionLayout}) {
    text-align: center;
    line-height: 130px;
  }

  @media (max-width: 860px) {
    font-size: 36px;
  }
`;
