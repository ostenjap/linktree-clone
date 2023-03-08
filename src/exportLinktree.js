import React, { useState } from 'react';
import Link from './Link';
import './Linktree.css';

function Linktree() {
  const [links] = useState([
    { name: 'Instagram', url: 'https://www.instagram.com/ostenjap/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/osten-wiecen-jap-649175179/' },
    { name: 'E-Mail', url: 'mailto:wiecen@gmail.com' },
    { name: 'E-Mail', url: 'mailto:wiecen@gmail.com' },
    { name: 'E-Mail', url: 'mailto:wiecen@gmail.com' },
  ]);

  return (
     <div className="linktree-container">
      {links.map((link, index ) => (
        <Link key={index} name={link.name} url={link.url} className="link" />
      ))}
    </div>
  );
}

export default Linktree;
