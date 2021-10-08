import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './index';

const Home = () => {
  return (
    <div className="center main">
      <h1>hey :)</h1>
      <p>Thanks for checking out my website.</p>
      <p>
        I&apos;m Mike. I&apos;m a full-stack software engineer and ceramic
        artist. I&apos;m still working on the projects overview and personal
        info sections but you can check out more{' '}
        <Link to="/ceramics" className="internal-link">
          about my ceramics
        </Link>{' '}
        right now!
      </p>
      <p>
        In the meantime, feel free to check me out at any of these other
        locations. Come back soon!
      </p>

      <div className="icon-container">
        <Icon
          prefix="fab"
          icon="fa-linkedin"
          title="mike's linkedin page"
          link="https://www.linkedin.com/in/michael-koshakow/"
        />

        <Icon
          prefix="fab"
          icon="fa-github-square"
          title="mike's github page"
          link="https://github.com/Cpt-Catnip"
        />

        <Icon
          prefix="fab"
          icon="fa-instagram-square"
          title="mike's instagram page"
          link="https://www.instagram.com/badgermoleceramics/"
        />

        <Icon
          prefix="fas"
          icon="fa-envelope-square"
          title="mike's email"
          link="mailto: mzkosh@gmail.com"
        />
      </div>
    </div>
  );
};

export default Home;
