import React from 'react';
import styled from 'styled-components';
import { Team } from '../helpers/Mock_DATA';
import { TextSmallThin, TextStandart } from '../uiComponents/Typography';
import { sizeMobile } from '../helpers/constants/mobileSize';

export const TeamsCardItem = () => (
  <ContainerCard>
    <BodyCard>
      <LogoTeam />
    </BodyCard>
    <FooterCard>
      <DataTeam>
        <NameTeam>{Team.name}</NameTeam>
        <FoundationTeam>
          Year of foundation:
          {Team.foundationYear}
        </FoundationTeam>
      </DataTeam>
    </FooterCard>
  </ContainerCard>
);

const ContainerCard = styled.div`
`;

const BodyCard = styled.div`
  padding: 65px 107px;
  background: ${({ theme }) => theme.gradient.base};
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  
  @media(max-width: ${sizeMobile}) {
    padding: 23px 56px 30px 55px;
  }
`;

const LogoTeam = styled.div`
  width: 150px;
  height: 150px;
  display: inline-block;
  background: url(${Team.imageUrl}) no-repeat;
  background-size: contain;
  
  @media(max-width: ${sizeMobile}) {
    width: 59px;
    height: 51px;
    background-position-x: 4px;
  }
`;

const FooterCard = styled.div`
  padding: 21px 15px 24px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  
  @media(max-width: ${sizeMobile}) {
    padding: 19px 10px;
  }
`;

const DataTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center`;

const NameTeam = styled(TextStandart)`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${sizeMobile}) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const FoundationTeam = styled(TextSmallThin)`
  color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${sizeMobile}) {
    font-size: 10px;
    line-height: 14px;
  }
`;
