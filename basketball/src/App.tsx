import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from './components/signComponents/SignUp';
import { SignIn } from './components/signComponents/SignIn';

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
