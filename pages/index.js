import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/index.css';
import '../app/animations.css';

const Home = () => {

    const [isGrid, setGrid] = useState(false);

    useEffect(() => {
      setGrid(true);
    }, []);

    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item');
        if (gridItems) {
          gridItems.forEach((item) => {
            item.addEventListener('click', () => {
              const imageUrl = item.querySelector('img').src;
              window.open(imageUrl, '_blank');
            });
          });
        }
      }, []);


    return (
        <div>
        
        <nav>
            <header> 
                <Link href="/">H</Link>
            </header>
            <Link href="/log" className='z-50'>
                <p>LOG</p>
            </Link>
            <Link href="/log" id="next">
                <Image src="/arrow.svg" height="36" width="36" alt="this.out" />
            </Link>
        </nav>
        <div className='content'>
            <div className='video-wrapper z-25'>
                <video className="hidden md:block" id="vid" autoPlay muted loop>
                    <source src="/vid/fabohax_.mp4" type="video/mp4"></source>
                </video>
                <video className="block md:hidden h-full w-full mt-0     object-contain" id="movid" autoPlay muted loop>
                    <source src="/vid/fabohax_m.webm" type="video/webm"></source>
                </video>
            </div>
            
        </div>
        <div class="linx">
                <Link href="/log">Log</Link>
                <Link href="/sites">Sites</Link>
                <Link href="/models">Models</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture">Architecture</Link>
            </div>
        <footer>
            <div className="foots">
            <Link href="https://audius.co/fabohax">Audius</Link>
            <Link href="https://github.com/fabohax/avatar">Github</Link>
            <Link href="https://t.me/fabohax">Telegram</Link>
            <Link href="https://x.com/fabohax">X</Link>
            </div>
        </footer>
        </div>
    );
};

export default Home;
