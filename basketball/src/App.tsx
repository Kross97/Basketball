import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp';

export const App = () => (
  <Switch>
    <Route exact path="/">
      <SignUp />
    </Route>
    <Route path="/signIn" />
  </Switch>
);
