import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddNewPlayer } from '../addComponents/AddNewPlayer';
import { PlayerCard } from '../cardComponents/PlayerCard';
import { EntitiesMarkUp } from './EntitiesMarkUp';
import { routePaths } from '../../helpers/constants/routePaths';

export const PlayersRouter = () => (
  <>
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
  </>
);
