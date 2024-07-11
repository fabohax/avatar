import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/index.css';
import '../../app/globals.css';
import Marquee from '@/components/marquee'
import IP from '../../components/ip';
import Footer from '../../components/footer';


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
                <Link href="/ego">HAX</Link>
            </header>
        </nav>
        <Marquee/>
        <div class="linx">
            <Link href="/sites">Sitios</Link>
            <Link href="/models">Modelos</Link>
            <Link href="/ai">IA</Link>
            <Link href="/architecture">Arquitectura</Link>
        </div>
        <Link href="/log" className='message'>NO-CLICKEES-ACÁ</Link>
        <div className='content mt-24 lg:mt-0'>
            <video width="100%" height="100%" autoPlay muted loop>
                <source src="/models/tierra_sudando_fabohax.mp4" type="video/mp4" alt="fabohax-model"/>
            </video>
        </div>
        <div className='text-center p-4 mt-8'>
            <Link href="/log" className='pb-2  border-b-2'>log_reciente:</Link>
            <Link
                href="https://fabohax.medium.com/a-beleza-da-arquitetura-sustent%C3%A1vel-4491de109aff"
                target='_blank'
            >
                <h2 className='lg:pl-36 lg:pr-36 font-bold text-3xl nubit hover:underline mt-8 mb-8'>
                    De la Arquitectura Regenerativa con Grafeno
                </h2>
            </Link>
        </div>
        <div className='text-center p-4 mt-8 mb-20'>
            <Link href="/cysec" className='border-2 rounded-sm px-8 py-4 my-8 hover:bg-white hover:text-black'>
                cysec
            </Link>
        </div>
        <Link href="mailto:40230@pm.me" className='mail'>
            <Image src="/mail.svg" height={21} width={21} alt="mail" className='fixed bottom-6 right-5 z-50'></Image>
        </Link>
        <IP/>
        <Footer/>
        </div>
    );
};

export default Home;
