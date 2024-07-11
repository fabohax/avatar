import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer'

const Sites = () => {

    return(
        <div>
            <header><Link href="/">Fabo Hax</Link></header>
            <div className="linx text-sm">
                <Link href="/sites" className='selected rounded-2xl'>SITES</Link>
                <Link href="/models" className='rounded-2xl'>MODELS</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture">ARCHITECTURE</Link>
            </div>
            <div className="my-24 py-4 items-center justify-center text-center">
                <div className='flex justify-center'>
                    <Link href="https://github.com/fabohax/bitbox" target='_blank' className='inline-block'>
                        <video id="_vid" className="lg:w-3/4 rounded-2xl" height="100%" width="auto" autoPlay muted loop>
                            <source src="/sites/low_bitshop_fabohax.mp4" type="video/mp4" />
                        </video>
                    </Link>
                </div>
                <br/>
                <span>Bitcoin Lightning-based Shop Template | Feb 2023</span>
            </div>

            <div className="my-24 py-4 items-center justify-center text-center">
                <div className='flex justify-center'>
                    <Link href="https://boostpe.vercel.app/" target='_blank' className='inline-block'>
                        <video id="_vid" className="lg:w-3/4 rounded-2xl" height="100%" width="auto" autoPlay muted loop>
                            <source src="/sites/boost_fabohax.mp4" type="video/mp4" />
                        </video>
                    </Link>      
                </div>
                <br/>
                <span>Boost: Electronics Virtual Store with Paypal | Aug 2023</span> 
            </div>
            <div className="my-24 py-4 items-center justify-center text-center">
                <div className='flex justify-center'>
                    <Link href="https://fabohax.github.io/mica" target='_blank' className='inline-block'>
                        <video id="_vid" className="lg:w-1/2 rounded-2xl" height="100%" width="auto" autoPlay muted loop>
                            <source src="/sites/micalinares_fabohax.mp4" type="video/mp4"></source>
                        </video>            
                    </Link>
                </div>
                <br/>
                <span>Micaela, Lima | Jan 2021</span>                 
            </div>
            <div className="my-24 py-4 items-center justify-center text-center">
                <Link href="https://fabohax.github.io/fisura" target='_blank' className='inline-block'>
                    <video id="_vid" className="lg:w-1/2 rounded-2xl" height="100%" width="auto" autoPlay muted loop>
                        <source src="/sites/fisura_fabohax.mp4" type="video/mp4"></source>
                    </video>            
                </Link>
                <br/>
                <span>Fisura Galería. Barranco, Lima | Jul 2020</span> 
            </div>
            <Footer/>
        </div>
    )
};

export default Sites;