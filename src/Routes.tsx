import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />

      {/* Go to home page as default */}
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default Routes;
