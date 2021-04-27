import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, WIP } from './components';

const Routes = () => {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/" component={Home} exact={true} />
      {/* List of CS projects */}
      <Route path="/projects" component={WIP} />
      {/* Embedded insta pics? */}
      <Route path="/ceramics" component={WIP} />
      {/* about me page */}
      <Route path="/about-me" component={WIP} />

      {/* Go to home page as default */}
      {/* <Route>
        <Redirect to="/home" />
      </Route> */}
    </Switch>
  );
};

export default Routes;
