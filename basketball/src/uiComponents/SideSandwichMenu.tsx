import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';

export const SideSandwichMenu = () => (
  <Menu>
    <ContainerMenu>
      <TeamsPlayers>
        <ItemMenu>
          <TeamsLogo />
          <TextTeams>Teams</TextTeams>
        </ItemMenu>
        <ItemMenu>
          <PlayerLogo />
          <TextSignAndPlayers>Players</TextSignAndPlayers>
        </ItemMenu>
      </TeamsPlayers>
      <ItemMenu>
        <SignOutLogo />
        <TextSignAndPlayers>Sign out</TextSignAndPlayers>
      </ItemMenu>
    </ContainerMenu>
  </Menu>
);

const Menu = styled.div`
  display: flex;
  padding: 37px 50px 32px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  box-sizing: border-box;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & ${ItemMenu}:nth-child(1) {
    margin-bottom: 40px;
  }
`;

const TextTeams = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.grey};
`;

const TextSignAndPlayers = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.red};
`;
