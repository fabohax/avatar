import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/index.css';
import '@/app/globals.css';
import Links from '@/components/links'
import Marx from '@/components/marquee'
import Dyor from '@/components/dyor';
import CySecs from '@/components/cysecs'
import IP from '@/components/ip'
import ReLog from '@/components/reLog'
import Subscribe from '@/components/subscribe';
import DM from '@/components/dm';
import Footer from '@/components/footer';

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
            <Marx/>
            <Links/>
            <Link href="/log" className='message'>DON'T CLICK HERE</Link>
            <div className='content mt-24 lg:mt-0'>
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="/models/tierra_sudando_fabohax.mp4" type="video/mp4" alt="fabohax-model"/>
                </video>
            </div>
            <div className='text-left p-4 mt-8 mb-20'> 
                <div className='mx-auto px-8 py-8 lg:w-1/3 md:1/2 my-16 border-[1px] border-[#333] rounded-3xl'>
                    <p className='mx-auto leading-10'>
                        Hi! I'm Fabo, an Architect Developer based in Lima, exploring 3D Printing, Blockchains, and AI since a while. At late 2018 did a bullseye strike buying Bitcoins and earning much that built a 65 sqm penthouse and have dedicated myself to enhancing my skills and staying engaged with advancements in my fields. I’m eager to network and collaborate with those who value Authenticity, Autonomy, and Aspiration for the betterment of humankind.</p>
                    <p>Feel free to reach out! </p>
                    <p className='text-center'><Link href="/ego" className='underline underline-offset-8 hover:bg-white hover:text-black'>More About Me</Link> | <Link href="/port" className='underline underline-offset-8 hover:bg-white hover:text-black'>Check my Portfolio</Link></p>
                </div>                
            </div>
            <Dyor/>
            <CySecs/>            
            <ReLog/>
            <Subscribe/>
            <DM/>
            <IP/>
            <Footer/>
        </div>
    );
};

export default Home;
