import React from 'react';
import { Link } from 'react-router-dom';

const Routes = () => {
  return (
    <nav className="valign space-between">
      <Link to="/home">Home</Link>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/ceramics">Ceramics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Routes;
