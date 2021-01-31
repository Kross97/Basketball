import React, { useContext } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import { ContextMenuProvider } from '../components/Baselayout';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';
import { routePaths } from '../helpers/constants/routePaths';

export const SideSandwichMenu = () => {
  const history = useHistory();
  const { path } = useParams<{ path: string}>();
  const { t } = useTranslation();
  const {
    isActiveSideMenu,
    toggleStateMenu,
    toggleStateChangeMenu,
  } = useContext(ContextMenuProvider);

  const { name, avatarUrl } = useSelector(({ authDataUser: { authData } }: IStoreReducer) => ({
    name: authData.name,
    avatarUrl: authData.avatarUrl,
  }));

  const clickIconHandler = (route: string) => {
    toggleStateMenu();
    history.push(`/main/${route}`);
  };

  const goOutSite = () => {
    localStorage.removeItem('authorized_basketball');
    history.replace(routePaths.signIn);
  };

  return (
    <ContainerMenu isActiveMenu={isActiveSideMenu}>
      <TeamsPlayers>
        <AutthorizedContainer>
          <AuthorizedUserLogo onClick={toggleStateChangeMenu} name={name} avatarUrl={avatarUrl} />
        </AutthorizedContainer>
        <TeamItem currentPath={path} onClick={() => clickIconHandler('teams')}>
          <TeamsLogo />
          <TextExtraSmall>{t('menu:teams')}</TextExtraSmall>
        </TeamItem>
        <PlayerItem currentPath={path} onClick={() => clickIconHandler('players')}>
          <PlayerLogo />
          <TextExtraSmall>{t('menu:players')}</TextExtraSmall>
        </PlayerItem>
      </TeamsPlayers>
      <OutItem onClick={goOutSite}>
        <SignOutLogo />
        <TextSignAndPlayers>{t('menu:out')}</TextSignAndPlayers>
      </OutItem>
    </ContainerMenu>
  );
};

const AutthorizedContainer = styled.div`
    display: none;
    padding: 20px 58px 20px 20px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};

  @media(max-width: ${mobileVersionLayout}) {
    display: block;
  }
`;

const ContainerMenu = styled.div<{ isActiveMenu: boolean }>`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  justify-content: space-between;
  padding: 37px 50px 32px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  transition: 1s ease;
  
  @media(max-width: ${mobileVersionLayout}) {
    margin-top: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    left: ${({ isActiveMenu }) => (isActiveMenu ? '0' : '-210px')};
    padding-bottom: 27px;
    position: absolute;
    z-index: 2;
  }
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  @media(max-width: ${mobileVersionLayout}) {
    flex-direction: row;
    margin-left: 21px;
    & svg {
      margin-right: 9px;
    }
  }
`;

const TeamItem = styled(ItemMenu)<{ currentPath: string }>`
  margin-bottom: 40px;
  color: ${({ currentPath, theme }) => (currentPath === 'teams' ? theme.colors.red : theme.colors.middleGrey)};
  & svg {
   width: 22px;
   height: 14px;
    fill: ${({ currentPath, theme }) => (currentPath === 'teams' ? theme.colors.red : theme.colors.middleGrey)};
 }
  @media(max-width: ${mobileVersionLayout}) {
    margin-top: 29px;
    margin-bottom: 20px;
  }
`;

const PlayerItem = styled(ItemMenu)<{ currentPath: string }>`
  color: ${({ currentPath, theme }) => (currentPath === 'players' ? theme.colors.red : theme.colors.middleGrey)};
  & svg {
    width: 16px;
    height: 16px;
    fill: ${({ currentPath, theme }) => (currentPath === 'players' ? theme.colors.red : theme.colors.middleGrey)};
  }

  @media(max-width: ${mobileVersionLayout}) {
    margin-left: 22px;
    & svg {
      margin-right: 15px;
    }
  }
`;

const OutItem = styled(ItemMenu)`
  & svg {
    width: 22px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.lightRed};
  }
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & ${ItemMenu}:nth-child(1) {
    margin-bottom: 40px;
  }
  
  @media(max-width: ${mobileVersionLayout}) {
    & ${ItemMenu}:nth-child(1) {
      margin-bottom: 33px;
    }
  }
`;

const TextSignAndPlayers = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.red};
`;
