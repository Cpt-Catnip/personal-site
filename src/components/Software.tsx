import React from 'react';
import { ExternalLink } from './index';

const Software = () => {
  const displayNone = { display: 'none' };
  return (
    <div id="software">
      <div className="main center">
        <h1>software 💻</h1>

        {/* Jump straight to projects */}
        <a style={displayNone} href="#projects" className="internal-link">
          Jump straight to projects.
        </a>

        <p>
          I&apos;m a fullstack software engineer currently working at Morgan
          &amp; Morgan. My software journey began in earnest the summer of 2020
          when I enrolled in Fullstack Academy&apos;s full-time web development
          immersive bootcamp. In reality I&apos;ve been writing code since 2014
          when I first learned Matlab in <i>Math and Computational Physics</i>{' '}
          while studying physics at Skidmore.
        </p>

        <p>
          Throughtout my physics and engineering education, I regularly had to
          use tools like Matlab, Python, and Wolfram Mathematica to help solve
          complicated, highly technical problems. I even took a course on Java
          at one point! So even though I&apos;ve only been writing
          &quot;software&quot; since 2020, I&apos;ve really been coding since
          2014!
        </p>

        <p>
          Come back soon for a look at some of my software projects and
          experience. Until then, feel free to check out my{' '}
          <ExternalLink
            displayText="GitHub"
            link="https://github.com/Cpt-Catnip"
          />{' '}
          for a closer look at some of the stuff I&apos;ve worked on!
        </p>
      </div>

      <div style={displayNone} className="projects-wrapper">
        <a id="projects" />

        <div className="morgan-morgan main">
          <h2>Morgan &amp; Morgan</h2>
        </div>

        <div className="mega-golf main">
          <h2>Mega Golf</h2>
        </div>

        <div className="grace-potter main">
          <h2>Grace Potter</h2>
        </div>

        <div className="physics-demo main">
          <h2>Physics Demonstration</h2>
        </div>
      </div>
    </div>
  );
};

export default Software;
