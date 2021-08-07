import React from 'react';
import { NavLink } from 'react-router-dom';

const Routes = () => {
  return (
    <nav className="valign space-between">
      <div>
        <NavLink to="/" className="home-button" exact={true} tabIndex={0}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/software" className="nav-item" tabIndex={0}>
          Software
        </NavLink>
        <NavLink to="/ceramics" className="nav-item" tabIndex={0}>
          Ceramics
        </NavLink>
        <NavLink to="/about-me" className="nav-item" tabIndex={0}>
          About Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Routes;
