import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';
import { routePaths } from '../helpers/constants/routePaths';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { menuReducer } from '../store/reducers/sandwichAndChangeMenu';

const actionCreators = {
  toggleStatusSandwichMenu: menuReducer.actions.toggleStatusSandwichMenu,
};

export const SideSandwichMenu = () => {
  const history = useHistory();
  const { path } = useParams<{ path: string}>();
  const { t } = useTranslation();
  const {
    toggleStatusSandwichMenu,
  } = useCustomActions(actionCreators);

  const { name, avatarUrl } = useSelector(({ authDataUser: { authData } }: IStoreReducer) => ({
    name: authData.name,
    avatarUrl: authData.avatarUrl,
  }), shallowEqual);

  const isActiveSandwich = useSelector((
    state: IStoreReducer,
  ) => state.menuReducer.isActiveSandwichMenu);

  const clickIconHandler = (route: string) => {
    toggleStatusSandwichMenu();
    history.push(`/main/${route}`);
  };

  const goOutSite = () => {
    localStorage.removeItem('authorized_basketball');
    history.replace(routePaths.signIn);
  };

  return (
    <ContainerMenu isActiveMenu={isActiveSandwich}>
      <TeamsPlayers>
        <AutthorizedContainer onClick={toggleStatusSandwichMenu}>
          <AuthorizedUserLogo
            onClick={() => history.push(routePaths.changeUser)}
            name={name}
            avatarUrl={avatarUrl}
          />
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
    padding: 20px 0 20px 20px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};

  @media(max-width: ${mobileVersionLayout}) {
    display: block;
  }
`;

const ContainerMenu = styled.div<{ isActiveMenu: boolean }>`
  display: flex;
  margin-top: 5px;
  flex-basis: 140px;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  transition: 0.7s ease-out;
  
  @media(max-width: ${mobileVersionLayout}) {
    margin-top: 0;
    padding: 0;
    top: 0;
    bottom: 0;
    left: ${({ isActiveMenu }) => (isActiveMenu ? '0' : '-500px')};
    position: absolute;
    z-index: 2;
    width: 50%;
  }
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media(max-width: ${mobileVersionLayout}) {
    flex-direction: row;
    padding-left: 25px;
    justify-content: flex-start;
    & svg {
      margin-right: 9px;
    }
  }
`;

const TeamItem = styled(ItemMenu)<{ currentPath: string }>`
  color: ${({ currentPath, theme }) => (currentPath === 'teams' ? theme.colors.red : theme.colors.middleGrey)};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  &:active {
    background: ${({ theme }) => theme.gradient.sandwichButton};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.colors.lightRed};
  }
  & svg {
   width: 22px;
   height: 14px;
    fill: ${({ currentPath, theme }) => (currentPath === 'teams' ? theme.colors.red : theme.colors.middleGrey)};
 }
  @media(max-width: ${mobileVersionLayout}) {
    justify-content: flex-start;
  }
`;

const PlayerItem = styled(ItemMenu)<{ currentPath: string }>`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: ${({ currentPath, theme }) => (currentPath === 'players' ? theme.colors.red : theme.colors.middleGrey)};
  & svg {
    width: 16px;
    height: 16px;
    fill: ${({ currentPath, theme }) => (currentPath === 'players' ? theme.colors.red : theme.colors.middleGrey)};
  }

  &:active {
    background: ${({ theme }) => theme.gradient.sandwichButton};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.colors.lightRed};
  }
  @media(max-width: ${mobileVersionLayout}) {
    justify-content: flex-start;
  }
`;

const OutItem = styled(ItemMenu)`
  padding: 44px 0 32px 0;
  & svg {
    width: 22px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.lightRed};
  }
  &:active {
    background: ${({ theme }) => theme.gradient.sandwichButton};
  }
  
  &:active svg {
    fill: ${({ theme }) => theme.colors.red}
  }
  
  @media(max-width: ${mobileVersionLayout}) {
    padding: 45px 0 32px 24px;
  }
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0.2;
  
  & ${ItemMenu}:nth-child(1) {
    margin-bottom: 40px;
  }
  
  @media(max-width: ${mobileVersionLayout}) {
    flex-grow: 0.1;
    
    & ${ItemMenu}:nth-child(1) {
      margin-bottom: 33px;
    }
  }
`;

const TextSignAndPlayers = styled(TextExtraSmall)`
  color: ${({ theme }) => theme.colors.red};
`;
