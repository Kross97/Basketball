import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { playersSelector } from '../../store/selectors/playersSelector';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { AddNewPlayer } from '../addComponents/AddNewPlayer';

export const PlayerList = () => {
  const players = useSelector(playersSelector);
  return (
    <>
      <Switch>
        <Route exact path="/main/players">
          { players.length > 0 ? <ListBase entities={players} /> : <EmptyEntity isTeam={false} /> }
        </Route>
        <Route exact path="/main/players/addPlayer">
          <AddNewPlayer />
        </Route>
      </Switch>
    </>
  );
};
