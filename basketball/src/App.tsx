import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from './components/signComponents/SignUp';
import { SignIn } from './components/signComponents/SignIn';
import { BaseLayout } from './components/Baselayout';
import { routePaths } from './helpers/constants/routePaths';

export const App = () => (
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
