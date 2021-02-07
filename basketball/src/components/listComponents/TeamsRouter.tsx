import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { EntitiesMarkUp } from './EntitiesMarkUp';
import { routePaths } from '../../helpers/constants/routePaths';

const AddNewTeam = lazy(() => import('../addComponents/AddNewTeam'));
const TeamsCard = lazy(() => import('../cardComponents/TeamsCard'));

export default () => (
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
);
