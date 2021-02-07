import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { EntitiesMarkUp } from './EntitiesMarkUp';
import { routePaths } from '../../helpers/constants/routePaths';

const AddNewPlayer = lazy(() => import('../addComponents/AddNewPlayer'));
const PlayerCard = lazy(() => import('../cardComponents/PlayerCard'));

export default () => (
  <Switch>
    <Route exact path={routePaths.players}>
      <EntitiesMarkUp isTeam={false} />
    </Route>
    <Route exact path={[routePaths.playerUpdate, routePaths.playerAdd]}>
      <AddNewPlayer />
    </Route>
    <Route path={routePaths.playerItem}>
      <PlayerCard />
    </Route>
  </Switch>
);
