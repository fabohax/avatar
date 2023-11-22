import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sites = () => {

    return(
        <div>
            <header><Link href="/">Fabo Hax</Link></header>
            <nav>
                <Link href="/models" id="next">
                    <Image src="/arrow.svg" height="36" width="36" alt="fabohax-xyz-ico"></Image>
                </Link>            
            </nav>
            <div className="linx">
                <Link href="/sites" className='selected'>Sites</Link>
                <Link href="/models">Models</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture">Architecture</Link>
            </div>
            <div className="h-screen flex items-center justify-center">
                <Link href="https://bitshop.site" target='_blank'>
                    <video id="_vid" className="w-full" height="100%" width="100%" autoPlay muted loop>
                        <source src="/sites/low_bitshop_fabohax.mp4" type="video/mp4" />
                    </video>
                </Link>      
            </div>
            <div className="h-screen flex items-center justify-center">
                <Link href="https://boost.net.pe" target='_blank'>
                    <video id="_vid" className="w-full" height="100%" width="100%" autoPlay muted loop>
                        <source src="/sites/boost_fabohax.mp4" type="video/mp4" />
                    </video>
                </Link>      
            </div>
            <div className="h-screen flex items-center justify-center">
                <Link href="https://fabohax.github.io/fisura" target='_blank'>
                    <video id="_vid" className="w-full sm:w-1/2" height="100%" width="100%" autoPlay muted loop>
                        <source src="/sites/fisura_fabohax.mp4" type="video/mp4"></source>
                    </video>            
                </Link>
            </div>
            <div className="h-screen flex items-center justify-center">
                <video id="_vid" className="w-full sm:w-1/2" height="100%" width="100%" autoPlay muted loop>
                    <source src="/sites/tilata_fabohax.mp4" type="video/mp4"></source>
                </video>            
            </div>
            <div className="h-screen flex items-center justify-center">
                <Link href="https://micalinares.com" target='_blank'>
                    <video id="_vid" className="w-full sm:w-1/2" height="100%" width="100%" autoPlay muted loop>
                        <source src="/sites/micalinares_fabohax.mp4" type="video/mp4"></source>
                    </video>            
                </Link>
            </div>
        </div>
    )
};

export default Sites;