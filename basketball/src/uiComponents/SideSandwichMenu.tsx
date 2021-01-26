import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';
import { sizeMobile } from '../helpers/constants/mobileSize';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';

export const SideSandwichMenu = () => (
  <ContainerMenu>
    <TeamsPlayers>
      <AutthorizedContainer>
        <AuthorizedUserLogo name="Jon Smith" />
      </AutthorizedContainer>
      <TeamItem>
        <TeamsLogo />
        <TextTeams>Teams</TextTeams>
      </TeamItem>
      <PlayerItem>
        <PlayerLogo />
        <TextSignAndPlayers>Players</TextSignAndPlayers>
      </PlayerItem>
    </TeamsPlayers>
    <OutItem>
      <SignOutLogo />
      <TextSignAndPlayers>Sign out</TextSignAndPlayers>
    </OutItem>
  </ContainerMenu>
);

const AutthorizedContainer = styled.div`
    display: none;
    padding: 20px 58px 20px 20px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};

  @media(max-width: ${sizeMobile}) {
    display: block;
  }
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 37px 50px 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  height: 100%;
  
  @media(max-width: ${sizeMobile}) {
    padding: 0;
    padding-bottom: 27px;
  }
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  @media(max-width: ${sizeMobile}) {
    flex-direction: row;
    margin-left: 21px;
    & svg {
      margin-right: 9px;
    }
  }
`;

const TeamItem = styled(ItemMenu)`
  margin-bottom: 40px;
  & svg {
   width: 22px;
   height: 14px;
 }
  @media(max-width: ${sizeMobile}) {
    margin-top: 29px;
    margin-bottom: 20px;
  }
`;

const PlayerItem = styled(ItemMenu)`
  & svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.red};
  }

  @media(max-width: ${sizeMobile}) {
    margin-left: 24px;
    & svg {
      margin-right: 15px;
    }
  }
`;

const OutItem = styled(ItemMenu)`
  & svg {
    width: 22px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & ${ItemMenu}:nth-child(1) {
    margin-bottom: 40px;
  }
  
  @media(max-width: ${sizeMobile}) {
    & ${ItemMenu}:nth-child(1) {
      margin-bottom: 33px;
    }
  }
`;

const TextTeams = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.grey};
`;

const TextSignAndPlayers = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.red};
`;
