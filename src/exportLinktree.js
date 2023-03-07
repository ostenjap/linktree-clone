import React, { useState } from 'react';
import Link from './Link';

function Linktree() {
  const [links, setLinks] = useState([
    { name: 'Instagram', url: 'https://www.instagram.com/ostenjap/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/osten-wiecen-jap-649175179/' },
    { name: 'E-Mail', url: 'mailto:wiecen@gmail.com' },
  ]);

  return (
    <div>
      {links.map((link, index) => (
        <Link key={index} name={link.name} url={link.url} />
      ))}
    </div>
  );
}

export default Linktree;
