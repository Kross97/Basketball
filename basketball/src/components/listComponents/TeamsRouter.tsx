import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AddNewTeam } from '../addComponents/AddNewTeam';
import { TeamsCard } from '../cardComponents/TeamsCard';
import { EntitiesMarkUp } from './EntitiesMarkUp';

export const TeamsRouter = () => (
  <>
    <Switch>
      <Route exact path="/main/teams">
        <EntitiesMarkUp isTeam />
      </Route>
      <Route exact path={['/main/teams/addTeam/:id', '/main/teams/addTeam']}>
        <AddNewTeam />
      </Route>
      <Route path="/main/teams/:id">
        <TeamsCard />
      </Route>
    </Switch>
  </>
);
