import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/index.css';
import '@/app/globals.css';
import Links from '@/components/links'
import Marx from '@/components/marquee'
import Cymarq from '@/components/cymarq'
import IP from '@/components/ip'
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
                    <p className='mx-auto leading-10'>Hi! I'm Fabo, an Architect Developer based in Lima, Perú. I’m exploring 3D Printing, Blockchains, and AI since a while, and did a bullseye strike buying bitcoins since late 2018 by borrowing from the bank and repaying with the earnings. I built a 65 sqm penthouse and have dedicated myself to enhancing my skills and staying engaged with advancements in my fields. I’m eager to network and collaborate with those who value Authenticity, Autonomy, and Aspiration for the betterment of humankind.</p>
                    <p>Feel free to reach out! I'm currently looking for a remote job or a partnership.</p>
                    <p>Recently exploring chances of tokenizing Aquaculture RWA on <Link href="https://searanchfarms.com" target='_blank' className='underline'>searanchfarms.com</Link></p>
                    <p>and applying for grants with <Link href="https://zuyux.xyz" target='_blank' className='underline'>zuyux</Link> as a proto_nation of digital creators.</p>
                    <p>Plus, just published 69 cybersecurity tools you can check in the next marquee.</p>
                    <p className='text-center'><Link href="/ego" className='underline underline-offset-8 hover:bg-white hover:text-black'>More About Me</Link> | <Link href="/port" className='underline underline-offset-8 hover:bg-white hover:text-black'>Check my Portfolio</Link></p>
                </div>                
            </div>
            <div className='text-center p-4 mt-8 mb-20'>
                <Link href="/cysec">
                    <Cymarq/>
                </Link>
            </div>
            <div className='text-center p-4 mt-8 mb-20'>
            <Link href="/log" className='w-full pb-2 border-b-2'>recent_log</Link>
                <Link
                    href="https://fabohax.medium.com/a-beleza-da-arquitetura-sustent%C3%A1vel-4491de109aff"
                    target='_blank'
                >
                    <h2 className='lg:pl-36 lg:pr-36 font-bold text-3xl nubit hover:underline mt-8 mb-8'>
                        De la Arquitectura Regenerativa con Grafeno
                    </h2>
                </Link>
                
            </div>
            <Subscribe/>
            <DM/>
            <IP/>
            <Footer/>
        </div>
    );
};

export default Home;
