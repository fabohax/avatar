// compos/menu.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './menu.module.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  
  const handleLinkClick = () => {
    closeMenu();
  }

  return (
    <div className='cursor-pointer'>
      <div className='z-100'>
        {isMenuOpen ? (
          <Image
            src="/close.svg"
            height={25}
            width={25}
            alt="menu"
            onClick={closeMenu}
            className={styles.menuIcon}
          />
        ) : (
          <Image
            src="/open.svg"
            height={25}
            width={25}
            alt="menu"
            onClick={openMenu}
            className={styles.menuIcon}
          />
        )}
      </div>
      <div className={`${styles.menuContainer} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/cysec" className='block hover:underline p-4 text-3xl' onClick={handleLinkClick}>cysec</Link>
        <Link href="/port" className='block hover:underline p-4 text-3xl' onClick={handleLinkClick}>port</Link>
        <Link href="/log" className='block hover:underline p-4 text-3xl' onClick={handleLinkClick}>log</Link>
        <Link href="/ego" className='block hover:underline p-4 text-3xl' onClick={handleLinkClick}>ego</Link>
        <div className="">
          <Link href="https://discord.com/users/698284387833348216" className='m-4 inline-block' onClick={handleLinkClick}><Image src="/discord.svg" alt="github" height="21" width="21"/></Link>
          <Link href="https://github.com/fabohax" className='m-4 inline-block' onClick={handleLinkClick}><Image src="/github.svg" alt="github" height="21" width="21"/></Link>
          <Link href="https://t.me/fabohax" className='m-4 inline-block' onClick={handleLinkClick}><Image src="/telegram.svg" alt="telegram" height="21" width="21"/></Link>
        </div>
      </div>     
    </div>
  );
}

export default Menu;
