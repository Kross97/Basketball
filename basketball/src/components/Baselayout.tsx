import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { SideSandwichMenu } from '../uiComponents/SideSandwichMenu';
import { NavigationHeader } from '../uiComponents/NavigationHeader';

export const BaseLayout = () => (
  <ContainerLayout>
    <NavigationHeader />
    <BodyContainer>
      <SideSandwichMenu />
      <ContentLayout>
        <Switch>
          <Route exact path="/main/teams">
            <div>zzzz</div>
          </Route>
          <Route exact path="/main/players">
            <div>xxxx</div>
          </Route>
        </Switch>
      </ContentLayout>
    </BodyContainer>
  </ContainerLayout>
);

const ContainerLayout = styled.div``;

const ContentLayout = styled.div`
 display: flex;
  flex-grow: 1;
 background-color: ${({ theme }) => theme.colors.lightestGrey};
`;

const BodyContainer = styled.div`
  display: flex;
`;
