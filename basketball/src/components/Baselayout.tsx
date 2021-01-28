import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { SideSandwichMenu } from '../uiComponents/SideSandwichMenu';
import { NavigationHeader } from '../uiComponents/NavigationHeader';
// import { EmptyEntity } from './EmptyEntityComponent';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { AddNewTeam } from './addComponents/AddNewTeam';
import { AddNewPlayer } from './addComponents/AddNewPlayer';

export const ContextMenuProvider = React.createContext({
  isActiveSideMenu: false,
  toggleStateMenu: () => {},
});

export const BaseLayout = () => {
  const [isActiveSideMenu, setStateMenu] = useState(false);
  const toggleStateMenu = () => {
    setStateMenu(!isActiveSideMenu);
  };

  return (
    <ContainerLayout>
      <ContextMenuProvider.Provider value={{ isActiveSideMenu, toggleStateMenu }}>
        <NavigationHeader />
        <BodyContainer>
          <BackgroundMenu isActiveSideMenu={isActiveSideMenu} />
          <SideSandwichMenu />
          <ContentLayout>
            <Switch>
              <Route exact path="/main/teams">
                <AddNewTeam />
              </Route>
              <Route exact path="/main/players">
                <AddNewPlayer />
              </Route>
            </Switch>
          </ContentLayout>
        </BodyContainer>
      </ContextMenuProvider.Provider>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column; 
`;

const ContentLayout = styled.div`
 display: flex;
  flex-grow: 1;
 background-color: ${({ theme }) => theme.colors.lightestGrey};
`;

const BodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`;

const BackgroundMenu = styled.div<{ isActiveSideMenu: boolean }>`
  @media(max-width: ${mobileVersionLayout}) {
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
