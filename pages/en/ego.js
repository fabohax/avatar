import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/index.css';
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
        <Link href="/log" className='message'>TO-HAK=TO-MASTER</Link>
        <nav>
            <header>
                <Link href="/">Fabo Hax</Link>
            </header>

        </nav>
        <div className='content'>
            <section className="profile mx-auto">
                <div className='card mx-auto'>
                    <Image src="/0/_hax.png" height="720" width="720" alt="client-logo"></Image>
                    <p className='text-2xl'>Architect </p>
                    <p>+ From Brazil. Based in Lima, Perú</p>
                    <p><Link href="https://www.blockchain.com/explorer/addresses/btc/18WvVwrXnLSJRWFfkM9zfkFqfuyKbLcwTb" target='_blank' className='hover:underline'>+ Bitcoin Class: 12.12.18</Link></p>
                    <p>XY</p>
                </div>
            </section>
            <section className="clients" id="about">
                <p>Hired by nice clients</p>
                <Image className='toScale' src="/0/logo_javierartadi.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_fisura.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_laborx.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_markeemedia.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_orangepill.svg" height="100" width="200" alt="client-logo"></Image>
                </section>
            <section className='call'>
                <h1 className='text-9xl nubit'>Deploying <blue>functional<br></br>products</blue></h1>
                <p>Let me know what goals <br/> your organization is pursuing, <br></br> and I will find a way <br/>to fulfill your needs.</p>
                <port>
                    <Link href="/sites"><button>CHECK MY PORTFOLIO</button></Link>
                </port>
                <div className='stripe'>
                    <h2 className='text-5xl font-bold nubit'>Hire Hax for some sats</h2>
                    <Link href="https://t.me/fabohax" target="_blank"><button>Yeah, let&rsquo;s talk!</button></Link>
                </div>
            </section>
            <section className="social">
                <div className="reviews flex flex-col md:flex-row md:space-x-4 mb-24">
                    <div className="review p-4">
                        <p className="text-italic">
                        <i>&apos;Agradecido con Fabo; entrega resultados de alta calidad y colabora sólidamente.&apos;</i>
                        </p>
                        <p className="font-bold">
                        <Link href="https://www.instagram.com/artadiarchitects/" target="_blank">Javier Artadi</Link>
                        </p>
                    </div>
                    <div className="review p-4">
                        <p className="text-italic">
                        <i>&apos;Fabo excels in his endeavors, even when navigating uncharted territory.&apos;</i>
                        </p>
                        <p className="font-bold">
                        <Link href="https://www.linkedin.com/in/marcus-albert-producer/" target="_blank">Marcus Albert</Link>
                        </p>
                    </div>
                    <div className="review p-4">
                        <p className="text-italic">
                            <i>&apos;Fabo contributes valuable ideas to the team and actively assists with research efforts.&apos;</i>
                        </p>
                        <p className="font-bold">
                            <Link href="https://www.linkedin.com/in/andrewvoronkov/" target="_blank">Andrey Voronkov</Link>
                        </p>
                    </div>
                </div>
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
                <div className='aboutme lg:w-1/2 mx-auto'>
                    <div className={selectedLanguage === 'en' ? '' : 'hidden'}>
                        <h1 className='justify-left text-left text-3xl m-12 mb-2 nubit'>Some about me</h1>
                        <div class='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p class='mb-3'>
                                I grew up in Tabatinga, a nice town where Brazil, Colombia, and Perú meet along the Amazon River. My awesome moms, Carmen and Olivia, took me on a bunch of trips around the country when I was little. At seven, I moved to Lima to hit the books in Callao and got into computers thanks to an engineer mentor.
                            </p>
                            <p class='mb-3'>
                                Even though I started studying architecture, my virtual love never faded. I taught myself PHP and created an app for architects that got some attention. I kept focus on 3D modeling and coding. In 2018, I dipped into Bitcoin and used that chance to do personal research and build a cool apartment.
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
                <Footer/>
            </section>
        </div>
        </div>
    );
};

export default Bio;
