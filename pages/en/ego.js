import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/index.css';
import Avatar from '@/components/avatar'
import Clients from '@/components/clients'
import Reviews from '@/components/reviews'
import DM from '@/components/dm';
import Footer from '../../components/footer';

const Bio = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const openMenu = (e) =>{
        menu = getElementById('menu');
        menu.style.width = "100%";

    }

    return (
        <div>
        <Link href="/log" className='fixed bottom-16 -left-6 -rotate-90 text-sm'>DIS-IS-DA-WEI</Link>
        <nav>
            <header>
                <Link href="/">Fabo Hax</Link>
            </header>

        </nav>
        <div className='content'>
            <section className="profile mx-auto">
                <div className='card mx-auto'>
                    <Avatar/>
                </div>
            </section>

            <Clients/>
            <section className='call'>
                <h1 className='text-9xl nubit'>Deploying <blue>functional<br></br>products</blue></h1>
                <p>Let me know what goals <br/> your organization is pursuing, <br></br> and I will find a way <br/>to fulfill your needs.</p>
                <port>
                    <Link href="/sites"><button>CHECK MY PORTFOLIO</button></Link>
                </port>
                <div className='stripe'>
                    <h2 className='text-5xl font-bold nubit'>Hire Hax For Some Sats</h2>
                    <Link href="https://t.me/fabohax" target="_blank"><button>Sure, let&rsquo;s talk!</button></Link>
                </div>
            </section>
            <section className="social">
                
                <div className="photos flex flex-wrap justify-center items-center md:flex-row">
                    <div className="photo">
                        <Image src="/img/hax_pao.webp" height='200' width='400' alt="fab03" className='mr-6 rounded rounded-lg mb-3' />
                    </div>
                    <div className="photo">
                        <Image src="/img/f06.jpg" height='200' width='400' alt="fab02" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                    <div className="photo">
                        <Image src="/0/FAB_PORT.jpg" height='250' width='400' alt="fab01" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                </div>
                <Reviews/>
                <div className='aboutme lg:w-1/2 mx-auto'>
                    <div className={selectedLanguage === 'en' ? '' : 'hidden'}>
                        <h1 className='justify-left text-left text-3xl m-12 mb-2 nubit'>+ about me</h1>
                        <div class='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p class='mb-3'>
                                I grew up in <Link href="https://maps.app.goo.gl/rLtxr9eauNv9T6nj8" target='_blank' className='hover:underline'>Tabatinga</Link>, a nice town where Brazil, Colombia, and Perú meet along the Amazon River. My awesome moms, Carmen and Olivia, took me on a bunch of trips around the country when I was little. At seven, I moved to Lima to hit the books in <Link href="https://maps.app.goo.gl/e3AydnngeGTQ91P28" target='_blank' className='hover:underline'>Callao</Link> and got into computers thanks to an engineer mentor.
                            </p>
                            <p class='mb-3'>
                                Even though I started studying architecture, my virtual love never faded. I taught myself PHP and created an app for architects that got some attention. I kept focus on 3D modeling and coding. In 2018, I dipped into Bitcoin and used that chance to do personal research and build a cool penthouse.
                            </p>
                            <p class='mb-3'>
                                Then 2020 hit with the pandemic, as we all struggle in various ways. I sold my first NFT, worked on crypto projects, and collaborated on an animated film &quot;Where the Two Seas Meet&quot; by Motaz H. Matar, which applied at festivals. All the while, I kept improving my software skills, selling code to companies independently. Now, I&apos;m pumped to level up my work and tackle some exciting projects in the dock, hoping to elevate architecture to serve humanity.
                            </p>
                            <p class='mb-3'>
                                I&apos;m all about embracing a deflationary economy using blockchain tech, like the awesome Bitcoin sample, and I stay connected with bitcoiners and devs worldwide, learning from tutorials, communities, and online courses. If you want to talk about some of this topics, do not go and <Link href="https://t.me/fabohax" target='_blank'>reach me</Link>, I would be glad to engage, collaborate or just meet us.
                            </p>
                        </div>
                    </div>
                    <Link href="/ai">
                        <Image src="/ai/8922_bc_fabohax_gaugan.png" height="400" width="400" alt="fabohax-x-stone" className="mx-auto rounded-lg mb-20"></Image>
                    </Link>
                </div>        
                </section>
            </div>
            <DM/>
            <Footer/>
        </div>
    );
};

export default Bio;
