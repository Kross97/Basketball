import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AddNewTeam } from '../addComponents/AddNewTeam';
import { TeamsCard } from '../cardComponents/TeamsCard';
import { EntitiesMarkUp } from './EntitiesMarkUp';
import { routePaths } from '../../helpers/constants/routePaths';

export const TeamsRouter = () => (
  <>
    <Switch>
      <Route exact path={routePaths.teams}>
        <EntitiesMarkUp isTeam />
      </Route>
      <Route exact path={[routePaths.teamUpdate, routePaths.teamAdd]}>
        <AddNewTeam />
      </Route>
      <Route path={routePaths.teamItem}>
        <TeamsCard />
      </Route>
    </Switch>
  </>
);
