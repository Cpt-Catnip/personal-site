import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    </Switch>
  );
};

export default Routes;
