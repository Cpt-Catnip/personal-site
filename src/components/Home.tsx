import React from 'react';
import { GrowIcon } from './index';

const Home = () => {
  return (
    <div className="center main">
      <h1>hey :)</h1>
      <p>Thanks for checking out my website.</p>
      <p>
        I'm Mike. I'm a full-stack software engineer and ceramic artist. I'm
        still working on this website but pretty soon it's going to be full of
        great content like overviews of the various projects I've worked on and
        a gallery of my ceramics.
      </p>
      <p>
        In the mean time, feel free to check me out at any of these other
        locations. Come back soon!
      </p>

      <GrowIcon
        prefix="fab"
        icon="fa-linkedin"
        link="https://www.linkedin.com/in/michael-koshakow/"
      />
    </div>
  );
};

export default Home;
