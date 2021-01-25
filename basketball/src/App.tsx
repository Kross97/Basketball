import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';

export const App = () => (
  <Switch>
    <Route exact path="/">
      <SignUp />
    </Route>
    <Route path="/signIn">
      <SignIn />
    </Route>
  </Switch>
);
