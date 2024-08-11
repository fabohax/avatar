import React from 'react';
import Link from 'next/link';
import DM from '@/components/dm';
import Footer from '@/components/footer';

const NAV_LINKS = [
  { href: '/sites', label: 'SITES', className: 'selected rounded-2xl' },
  { href: '/models', label: 'MODELS', className: 'rounded-2xl' },
  { href: '/ai', label: 'AI' },
  { href: '/architecture', label: 'ARCHITECTURE' },
];

const VIDEO_PROJECTS = [
  {
    href: 'https://github.com/fabohax/bitbox',
    src: '/sites/low_bitshop_fabohax.mp4',
    label: 'Bitcoin Lightning-based Shop Template | Feb 2023',
    className: 'lg:w-3/4 rounded-2xl',
  },
  {
    href: 'https://github.com/fabohax/boost',
    src: '/sites/boost_fabohax.mp4',
    label: 'Boost: Electronics Virtual Store with Paypal | Aug 2023',
    className: 'lg:w-3/4 rounded-2xl',
  },
  {
    href: 'https://fabohax.github.io/mica',
    src: '/sites/micalinares_fabohax.mp4',
    label: 'Micaela, Lima | Jan 2021',
    className: 'lg:w-1/2 rounded-2xl',
  },
  {
    href: 'https://fabohax.github.io/fisura',
    src: '/sites/fisura_fabohax.mp4',
    label: 'Fisura Galería. Barranco, Lima | Jul 2020',
    className: 'lg:w-1/2 rounded-2xl',
  },
];

const Sites = () => {
  return (
    <div>
      <header>
        <Link href="/">Fabo Hax</Link>
      </header>
      <div className="linx text-sm">
        {NAV_LINKS.map(({ href, label, className }) => (
          <Link key={href} href={href} className={className}>
            {label}
          </Link>
        ))}
      </div>
      {VIDEO_PROJECTS.map(({ href, src, label, className }) => (
        <div key={src} className="my-24 py-4 items-center justify-center text-center">
          <div className="flex justify-center">
            <Link href={href} target="_blank" className="inline-block">
              <video id="_vid" className={className} height="100%" width="auto" autoPlay muted loop>
                <source src={src} type="video/mp4" />
              </video>
            </Link>
          </div>
          <br />
          <span>{label}</span>
        </div>
      ))}
      <DM />
      <Footer />
    </div>
  );
};

export default Sites;
