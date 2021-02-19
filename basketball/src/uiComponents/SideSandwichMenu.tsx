import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TeamsLogo } from '../static/icons/group_person.svg';
import { ReactComponent as PlayerLogo } from '../static/icons/person.svg';
import { ReactComponent as SignOutLogo } from '../static/icons/input.svg';
import { TextExtraSmall } from './Typography';
import { mobileVersionLayout, mobliSizeCard } from '../helpers/constants/mobileSize';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import { StoreReducer } from '../helpers/interfaces/StoreReducer';
import { routePaths } from '../helpers/constants/routePaths';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { menuReducer } from '../store/reducers/sandwichAndChangeMenu';
import { TextLink } from './TextLink';
import { successOperationReducer } from '../store/reducers/successOperation';

const actionCreators = {
  setErrorSignIn: successOperationReducer.actions.setErrorSignIn,
  toggleStatusSandwichMenu: menuReducer.actions.toggleStatusSandwichMenu,
};

export const SideSandwichMenu = () => {
  const { path } = useParams<{ path: string }>();
  const { t } = useTranslation();
  const {
    setErrorSignIn,
    toggleStatusSandwichMenu,
  } = useCustomActions(actionCreators);

  const { name, avatarUrl } = useSelector(({ authDataUser: { authData } }: StoreReducer) => ({
    name: authData.name,
    avatarUrl: authData.avatarUrl,
  }), shallowEqual);

  const isActiveSandwich = useSelector((
    state: StoreReducer,
  ) => state.menuReducer.isActiveSandwichMenu);

  const clickIconHandler = () => {
    if (window.innerWidth < 930) {
      toggleStatusSandwichMenu();
    }
  };

  const goOutSite = () => {
    setErrorSignIn();
    localStorage.removeItem('authorized_basketball');
  };

  return (
    <ContainerMenu isActiveMenu={isActiveSandwich}>
      <TeamsPlayers>
        <AutthorizedContainer>
          <TextLink
            onClick={toggleStatusSandwichMenu}
            disabled={false}
            to={routePaths.changeUser}
          >
            <AuthorizedUserLogo
              name={name}
              avatarUrl={avatarUrl}
            />
          </TextLink>
        </AutthorizedContainer>
        <TextLink onClick={clickIconHandler} disabled={false} to={routePaths.teams}>
          <TeamItem currentPath={path}>
            <TeamsLogo />
            <TextItem>{t('menu:teams')}</TextItem>
          </TeamItem>
        </TextLink>
        <TextLink onClick={clickIconHandler} disabled={false} to={routePaths.players}>
          <PlayerItem currentPath={path}>
            <PlayerLogo />
            <TextItem>{t('menu:players')}</TextItem>
          </PlayerItem>
        </TextLink>
      </TeamsPlayers>
      <TextLink onClick={goOutSite} disabled={false} to={routePaths.signIn}>
        <OutItem>
          <SignOutLogo />
          <TextSignAndPlayers>{t('menu:out')}</TextSignAndPlayers>
        </OutItem>
      </TextLink>
    </ContainerMenu>
  );
};

const AutthorizedContainer = styled.div`
  display: none;
  padding: 20px 0 20px 20px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey}`};
  
  @media (max-width: ${mobileVersionLayout}) {
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

  & a {
    text-decoration: none;
  }

  @media (max-width: ${mobliSizeCard}) {
    transition: 0.5s ease-out;
  }

  @media (max-width: ${mobileVersionLayout}) {
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

  & > span {
    margin-top: 9px;
  }

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: row;
    padding-left: 25px;
    align-items: flex-end;
    & svg {
      margin-right: 9px;
    }
    & > span {
      margin-top: 0;
    }
  }
`;

const TextItem = styled(TextExtraSmall)`
  line-height: 150%;
  @media (max-width: ${mobileVersionLayout}) {
    font-size: 13px;
    line-height: 18px;
  }
`;

const TeamItem = styled(ItemMenu)<{ currentPath: string }>`
  color: ${({ currentPath, theme }) => (currentPath === 'teams' && theme.colors.red)};

  & svg {
    width: 22px;
    height: 14px;
    fill: ${({ currentPath, theme }) => (currentPath === 'teams' ? theme.colors.red : theme.colors.middleGrey)};
  }
`;

const PlayerItem = styled(ItemMenu)<{ currentPath: string }>`
  color: ${({ currentPath, theme }) => (currentPath === 'players' && theme.colors.red)};

  & svg {
    width: 16px;
    height: 16px;
    fill: ${({ currentPath, theme }) => (currentPath === 'players' ? theme.colors.red : theme.colors.middleGrey)};
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

  @media (max-width: ${mobileVersionLayout}) {
    padding: 45px 0 32px 24px;
  }
`;

const TeamsPlayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 150px;

  @media (max-width: ${mobileVersionLayout}) {
    flex-basis: 170px;
  }

  & > a {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.middleGrey};

    &:active {
      background: ${({ theme }) => theme.gradient.sandwichButton};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.lightRed};
    }

    &:hover svg {
      fill: ${({ theme }) => theme.colors.lightRed};
    }

    @media (max-width: ${mobileVersionLayout}) {
      justify-content: flex-start;
    }

  }
`;

const TextSignAndPlayers = styled(TextItem)`
  color: ${({ theme }) => theme.colors.red};
`;
