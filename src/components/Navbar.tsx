import React from 'react';
import { NavLink } from 'react-router-dom';

const Routes = () => {
  return (
    <nav className="valign space-between">
      <div>
        <NavLink to="/" className="home-button" exact={true}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/projects" className="nav-item">
          Projects
        </NavLink>
        <NavLink to="/ceramics" className="nav-item">
          Ceramics
        </NavLink>
        <NavLink to="/about-me" className="nav-item">
          About Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Routes;
