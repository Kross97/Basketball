import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, useHistory } from 'react-router-dom';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { SideSandwichMenu } from '../uiComponents/SideSandwichMenu';
import { NavigationHeader } from '../uiComponents/NavigationHeader';
import { PlayersRouter } from './listComponents/PlayersRouter';
import { TeamsRouter } from './listComponents/TeamsRouter';
import { UserChange } from './UserChange';
import { routePaths } from '../helpers/constants/routePaths';

export const ContextMenuProvider = React.createContext({
  isActiveSideMenu: false,
  isShowMenuChange: false,
  toggleStateMenu: () => {},
  toggleStateChangeMenu: () => {},
});

export const BaseLayout = () => {
  const [isAuthorized] = useState<boolean>(() => localStorage.getItem('authorized_basketball') === 'success');
  const history = useHistory();
  const [isActiveSideMenu, setStateMenuSide] = useState<boolean>(false);
  const [isShowMenuChange, setStateMenuChange] = useState<boolean>(false);
  const toggleStateMenu = () => {
    setStateMenuSide(!isActiveSideMenu);
  };

  const toggleStateChangeMenu = () => {
    if (!isShowMenuChange) {
      history.push(routePaths.mainBase);
    }
    setStateMenuChange(!isShowMenuChange);
  };

  useEffect(() => {
    if (!isAuthorized) {
      history.replace(routePaths.signIn);
    }
  }, [isAuthorized]);

  return (
    <ContainerLayout isShowMenuChange={isShowMenuChange}>
      <ContextMenuProvider.Provider value={{
        isActiveSideMenu,
        toggleStateMenu,
        isShowMenuChange,
        toggleStateChangeMenu,
      }}
      >
        {isShowMenuChange && <UserChange />}
        <NavigationHeader />
        <BodyContainer>
          <BackgroundMenu isActiveSideMenu={isActiveSideMenu} />
          <SideSandwichMenu />
          <ContentLayout>
            <Switch>
              <Route path={routePaths.teams}>
                <TeamsRouter />
              </Route>
              <Route path={routePaths.players}>
                <PlayersRouter />
              </Route>
            </Switch>
          </ContentLayout>
        </BodyContainer>
      </ContextMenuProvider.Provider>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div<{ isShowMenuChange: boolean }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: ${({ isShowMenuChange }) => (isShowMenuChange ? 'hidden' : 'auto')};
  scrollbar-сolor: ${({ theme }) => `${theme.colors.lightestGrey} ${theme.colors.grey}`};
  scrollbar-width: thin;


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
  
  @media(max-width: ${mobileVersionLayout}) {}
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`;

const BackgroundMenu = styled.div<{ isActiveSideMenu: boolean }>`
  @media (max-width: ${mobileVersionLayout}) {
    z-index: 1;
    display: ${({ isActiveSideMenu }) => (isActiveSideMenu ? 'block' : 'none')};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
