import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import SingUp from './pages/SingUp';


export default function Routes() {
  return (
    <Switch>
      <Route path='/singup' >
        <SingUp />
      </Route>
      <Route path='/'>
        <Login />
      </Route>
    </Switch>
  );
}
