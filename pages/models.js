import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navs from '@/components/navs';
import DM from '@/components/dm';
import Footer from '@/components/footer';

const HEADER_LINK = '/';
const HEADER_TEXT = 'Fabo Hax';

const MODEL_ITEMS = [
  {
    href: 'https://www.cgtrader.com/3d-models/interior/other/minimalistic-chess-set',
    src: '/models/hax_chess_fabohax_050623.png',
    alt: 'fabohax-xyz-model',
  },
  {
    href: 'https://www.cgtrader.com/3d-models/character/clothing/apple-like-eyeglasses',
    src: '/models/glazz_fabohax_240523.png',
    alt: 'fabohax-model',
  },
  {
    src: '/models/tekuni_fabohax_100822.png',
    alt: 'Tekuni es la mascota de la Universidad Nacional de Ingeniería',
  },
  {
    src: '/models/2seas_shot_fabohax_191122.png',
    alt: 'fabohax-model',
  },
  {
    src: '/models/sif_polygod_fabohax_120222.png',
    alt: 'fabohax-model',
  },
  {
    video: true,
    src: '/models/decentraland_fire_fabohax_090422.mp4',
  },
  {
    src: '/models/tob_hax.png',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/koala_fabohax.png',
    alt: 'fabohax-xyz-model',
  },
  {
    video: true,
    src: '/models/tierra_sudando_fabohax.mp4',
  },
  {
    src: '/models/motokar-fabohax.png',
    alt: 'fabohax-xyz-model',
  },
  {
    href: 'https://sketchfab.com/3d-models/siku-2c729ea04c514b99a4c38dd535509249',
    src: '/models/zikuri.png',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/bitflag_fabohax.gif',
    alt: 'fabohax-xyz-model',
  },
  {
    video: true,
    src: '/models/ch355_nft_fabohax.mp4',
  },
  {
    src: '/models/a_ball_fabohax.jpg',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/x01x02_fabohax.jpg',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/x01x03_fabohax.jpg',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/skull_fabohax.jpg',
    alt: 'fabohax-xyz-model',
  },
  {
    src: '/models/anonmask-fabohax.jpg',
    alt: 'fabohax-xyz-model',
  },
];

const Models = () => {
  return (
    <div>
      <header><Link href={HEADER_LINK}>{HEADER_TEXT}</Link></header>
      <Navs selected="/models" />
      <div className="grid visible">
        {MODEL_ITEMS.map((item, index) => (
          <div key={index} className="grid-item">
            {item.video ? (
              <video width="100%" height="100%" autoPlay muted loop>
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <Link href={item.href || '#'}>
                <Image src={item.src} height="500" width="500" alt={item.alt} />
              </Link>
            )}
          </div>
        ))}
      </div>
      <DM />
      <Footer />
    </div>
  );
};

export default Models;
