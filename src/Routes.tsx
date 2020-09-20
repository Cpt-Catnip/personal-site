import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, WIP } from './components';

const Routes = () => {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/home" component={Home} />
      {/* List of CS projecxts */}
      <Route path="/projects" component={WIP} />
      {/* Embedded insta pics? */}
      <Route path="/ceramics" component={WIP} />
      {/* Embedded Medium blog */}
      <Route path="/blog" component={WIP} />

      {/* Go to home page as default */}
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default Routes;
