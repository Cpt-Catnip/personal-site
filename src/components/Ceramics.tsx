import React from 'react';
import ExternalLink from './ExternalLink';
import Gallery from './Gallery';

const Ceramics = () => {
  const instaURL = 'https://www.instagram.com/badgermoleceramics/';
  const etsyURL = 'https://www.etsy.com/shop/BadgermoleCeramics';
  const potImages = [
    'bluemug.jpeg',
    'shinojar.jpg',
    'shinobottle.jpg',
    'vase.jpeg',
    'whitemug.jpeg',
    'yellowbottle.jpg',
  ];
  return (
    <div className="main center">
      <h1>ceramics 🏺</h1>
      <p>
        I&apos;ve been making ceramics since 2018 when my friend Nadav convinced
        me to take a ceramics class while we were studying engineering at
        Dartmouth College. Taking that class reawakened my creative drive and
        I&apos;ve been spending most of my free time making pottery ever since.
      </p>

      <p>
        In my work, I try to create functional pieces that are both a pleasure
        look at and a joy to use. Many of my pieces are textured in some way,
        giving your eyes and hands something to work over and discover as you
        use it. This way, my work can be dynamic and discovered over time,
        giving you a reason to come back to it more than once. More than
        anything, though, I just take pride in making something that other
        people can enjoy using.
      </p>

      <p>
        Below is a selection of some of my recent work, but feel free to check
        me out on <ExternalLink displayText="Instagram" link={instaURL} /> or{' '}
        <ExternalLink displayText="Etsy" link={etsyURL} /> for more!
      </p>

      <hr />

      <Gallery images={potImages} />
    </div>
  );
};

export default Ceramics;
