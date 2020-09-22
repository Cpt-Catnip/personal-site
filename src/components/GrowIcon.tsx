import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

interface iconProps {
  prefix: string;
  icon: string;
  link: string;
  options?: string;
}

const GrowIcon = ({ prefix, icon, link, options }: iconProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <i className={`hover-grow ${prefix} ${icon} ${options || ''}`} />
    </a>
  );
};

export default GrowIcon;
