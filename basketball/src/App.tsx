import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SuspenseAnimation } from './uiComponents/SuspenseComponent';
import { SignIn } from './components/signComponents/SignIn';
import { loadAllCommands } from './store/asyncActions/team';
import { loadAllPlayers } from './store/asyncActions/player';
import { routePaths } from './helpers/constants/routePaths';
import { IStoreReducer } from './helpers/interfaces/StoreReducer';
import { useCustomActions } from './helpers/functions/useCustomActions';

const SignUp = lazy(() => import('./components/signComponents/SignUp'));
const BaseLayout = lazy(() => import('./components/BaseLayout'));

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
    <Suspense fallback={SuspenseAnimation}>
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
    </Suspense>
  );
};
