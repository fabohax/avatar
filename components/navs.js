import Link from 'next/link';
import React from 'react';

const NAV_LINKS = [
  { href: '/sites', text: 'SITES' },
  { href: '/models', text: 'MODELS' },
  { href: '/ai', text: 'AI' },
  { href: '/architecture', text: 'ARCHITECTURE' },
];

const Navs = ({ selected }) => {
  return (
    <div className="linx text-sm">
      {NAV_LINKS.map((link, index) => (
        <Link className={link.href === selected ? 'selected' : ''} key={index} href={link.href}>
            {link.text}
        </Link>
      ))}
    </div>
  );
};

export default Navs;
