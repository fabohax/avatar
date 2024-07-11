import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';
import Menu from '@/components/menu'

import 'typeface-inter';

function App ({Component, pageProps}) {
    return(
        <>
            <Head><title>40230</title></Head>
            <meta property="og:title" content="Fabo Hax" />
            <meta property="og:type" content="Specialized in CG Modeling and Web3 Development. Bitcoiner since 2018." />
            <meta property="og:url" content="https://hax.pe" />
            <meta property="og:image" content="https://hax.pe/opengraph-image.jpg" />
            <Component {...pageProps}/>
            <Menu/>
        </> 
    )
}

export default App;