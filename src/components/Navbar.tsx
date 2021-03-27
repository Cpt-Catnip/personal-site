import React from 'react';
import { Link } from 'react-router-dom';

const Routes = () => {
  return (
    <nav className="valign space-between">
      <Link to="/home" className="home-button">
        Home
      </Link>
      <div>
        <Link to="/projects" className="nav-item">
          Projects
        </Link>
        <Link to="/ceramics" className="nav-item">
          Ceramics
        </Link>
        <Link to="/blog" className="nav-item">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Routes;
