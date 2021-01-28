import React from 'react';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ListBase } from './ListBase';
import { EmptyEntity } from '../EmptyEntityComponent';
import { teamsSelector } from '../../store/selectors/teamsSelector';
import { AddNewTeam } from '../addComponents/AddNewTeam';
import { TeamsCard } from '../cardComponents/TeamsCard';

export const TeamsList = () => {
  const teams = useSelector(teamsSelector);
  return (
    <>
      <Switch>
        <Route exact path="/main/teams">
          { teams.length > 0 ? <ListBase entities={teams} /> : <EmptyEntity isTeam /> }
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
};
