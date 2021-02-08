import React, { useEffect, useState, lazy } from 'react';
import styled from 'styled-components';
import {
  Switch, Route, useHistory, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { SideSandwichMenu } from '../uiComponents/SideSandwichMenu';
import { NavigationHeader } from '../uiComponents/NavigationHeader';
import { routePaths } from '../helpers/constants/routePaths';
import { StoreReducer } from '../helpers/interfaces/StoreReducer';
import { menuReducer } from '../store/reducers/sandwichAndChangeMenu';
import { useCustomActions } from '../helpers/functions/useCustomActions';

const PlayersRouter = lazy(() => import('./listComponents/PlayersRouter'));
const TeamsRouter = lazy(() => import('./listComponents/TeamsRouter'));
const UserChange = lazy(() => import('./UserChange'));

const actionCreators = {
  toggleStatusSandwichMenu: menuReducer.actions.toggleStatusSandwichMenu,
};

export default () => {
  const [isAuthorized] = useState<boolean>(() => localStorage.getItem('authorized_basketball') === 'success');
  const [isScrolling, setStateScrolling] = useState<boolean>(false);

  const { countTeams, countPlayer } = useSelector(({
    teamsDataReducer,
    playersDataReducer,
  }: StoreReducer) => ({
    countTeams: teamsDataReducer.chunkData.count,
    countPlayer: playersDataReducer.chunkData.count,
  }));

  const { pathname } = useLocation();

  const history = useHistory();

  const isActiveSandwichMenu = useSelector((
    state: StoreReducer,
  ) => state.menuReducer.isActiveSandwichMenu);

  const { toggleStatusSandwichMenu } = useCustomActions(actionCreators);

  useEffect(() => {
    if (!isAuthorized) {
      history.replace(routePaths.signIn);
    }
  }, [isAuthorized]);

  useEffect(() => {
    setStateScrolling(false);
  }, [pathname]);

  const changeSize = () => {
    if (!isScrolling) {
      setStateScrolling(true);
    }
  };

  return (
    <ContainerLayout
      onScroll={
                (pathname === routePaths.teams || pathname === routePaths.players)
                  ? undefined
                  : changeSize
            }
      isEntitiesList={
          (pathname === routePaths.teams && countTeams !== 0)
          || (pathname === routePaths.players && countPlayer !== 0)
                || isScrolling
            }
    >
      <NavigationHeader />
      <BodyContainer>
        <BackgroundMenu
          onClick={toggleStatusSandwichMenu}
          isActiveSandwichMenu={isActiveSandwichMenu}
        />
        <SideSandwichMenu />
        <ContentLayout>
          <Switch>
            <Route path={routePaths.teams}>
              <TeamsRouter />
            </Route>
            <Route path={routePaths.players}>
              <PlayersRouter />
            </Route>
            <Route path={routePaths.changeUser}>
              <UserChange />
            </Route>
          </Switch>
        </ContentLayout>
      </BodyContainer>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div<{ isEntitiesList: boolean }>`
  flex-basis: ${({ isEntitiesList }) => (isEntitiesList ? '100%' : '100vh')};
  display: flex;
  flex-direction: column;
  position: relative;
  scrollbar-сolor: ${({ theme }) => `${theme.colors.lightestGrey} ${theme.colors.grey}`};
  scrollbar-width: thin;
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.lightestGrey};
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar {
    width: 7px;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.lightestGrey};

  @media (min-height: 1000px) {
    padding-bottom: 50px;
  }

  @media (max-width: ${mobileVersionLayout}) {
    justify-content: center;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;

`;

const BackgroundMenu = styled.div<{ isActiveSandwichMenu: boolean }>`
  @media (max-width: ${mobileVersionLayout}) {
    cursor: pointer;
    z-index: 1;
    display: ${({ isActiveSandwichMenu }) => (isActiveSandwichMenu ? 'block' : 'none')};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
