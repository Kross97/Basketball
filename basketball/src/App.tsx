import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignUp } from './components/signComponents/SignUp';
import { SignIn } from './components/signComponents/SignIn';
import { BaseLayout } from './components/Baselayout';
import { loadAllCommands } from './store/async_actions/team';
import { loadAllPlayers } from './store/async_actions/player';
import { routePaths } from './helpers/constants/routePaths';
import { IStoreReducer } from './helpers/interfaces/StoreReducer';
import { useCustomActions } from './helpers/functions/useCustomActions';

const actionCreator = {
  loadAllCommands,
  loadAllPlayers,
};

export const App = () => {
  const token = useSelector(({ authDataUser: { authData } }: IStoreReducer) => authData.token);
  const {
    loadAllCommands: getAllCommands,
    loadAllPlayers: getAllPlayers,
  } = useCustomActions(actionCreator);

  useEffect(() => {
    getAllCommands(token);
    getAllPlayers(token);
  }, [token]);
  return (
    <Switch>
      <Route exact path={`${routePaths.signIn}`}>
        <SignIn />
      </Route>
      <Route path={`${routePaths.signUp}`}>
        <SignUp />
      </Route>
      <Route path={[`${routePaths.mainArgs}`, `${routePaths.mainBase}`]}>
        <BaseLayout />
      </Route>
    </Switch>
  );
};
