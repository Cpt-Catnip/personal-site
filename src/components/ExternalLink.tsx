import React from 'react';

interface linkProps {
  displayText: string;
  link: string;
}

const ExternalLink = ({ displayText, link }: linkProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="external-link"
    >
      {displayText}
    </a>
  );
};

export default ExternalLink;
