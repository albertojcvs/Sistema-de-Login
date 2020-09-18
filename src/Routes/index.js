import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Home from './pages/Home';


export default function Routes() {
  return (
    <Switch>
      <Route path='/singup' >
        <SingUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
