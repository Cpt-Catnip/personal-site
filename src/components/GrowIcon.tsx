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
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="hover-grow margin-right inline-block"
    >
      <i className={`center fa-2x ${prefix} ${icon} ${options || ''}`} />
    </a>
  );
};

export default GrowIcon;
