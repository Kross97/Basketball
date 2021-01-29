import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { playersSelector } from '../../store/selectors/playersSelector';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { AddNewPlayer } from '../addComponents/AddNewPlayer';
import { PlayerCard } from '../cardComponents/PlayerCard';

export const PlayersRouter = () => {
  const players = useSelector(playersSelector);
  return (
    <>
      <Switch>
        <Route exact path="/main/players">
          { players.length > 0 ? <ListBase type="player" entities={players} /> : <EmptyEntity isTeam={false} /> }
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
};
