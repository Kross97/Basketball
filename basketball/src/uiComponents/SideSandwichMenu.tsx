import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';

export const SideSandwichMenu = () => (
  <ContainerMenu>
    <TeamsPlayers>
      <TeamsItem>
        <TeamsLogo />
        <TextTeams>Teams</TextTeams>
      </TeamsItem>
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

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 37px 50px 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  height: 100%;
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const TeamsItem = styled(ItemMenu)`
`;

const PlayerItem = styled(ItemMenu)`
  & svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const OutItem = styled(ItemMenu)`
  & svg {
    fill: ${({ theme }) => theme.colors.red};
  }
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & ${TeamsItem} {
    margin-bottom: 40px;
  }
`;

const TextTeams = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.grey};
`;

const TextSignAndPlayers = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.red};
`;
