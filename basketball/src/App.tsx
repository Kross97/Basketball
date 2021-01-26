import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from './components/signComponents/SignUp';
import { routePaths } from './helpers/constants/routePaths';

export const App = () => (
  <Switch>
    <Route exact path={`${routePaths.signUp}`}>
      <SignUp />
    </Route>
    <Route path={`${routePaths.signIn}`} />
  </Switch>
);
