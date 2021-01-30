import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddNewPlayer } from '../addComponents/AddNewPlayer';
import { PlayerCard } from '../cardComponents/PlayerCard';
import { EntitiesMarkUp } from './EntitiesMarkUp';

export const PlayersRouter = () => (
  <>
    <Switch>
      <Route exact path="/main/players">
        <EntitiesMarkUp isTeam={false} />
      </Route>
      <Route exact path={['/main/players/addPlayer/:id', '/main/players/addPlayer']}>
        <AddNewPlayer />
      </Route>
      <Route path="/main/players/:id">
        <PlayerCard />
      </Route>
    </Switch>
  </>
);
