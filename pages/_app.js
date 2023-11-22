import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-rajdhani';
import 'typeface-inter';

function App ({Component, pageProps}) {
    return(
        <>
            <Head><title>Fabo</title></Head>
            <Component {...pageProps}/>
            <Link href="mailto:40230@pm.me"><Image src="/dm.svg" className="dm" height={30} width={30} alt="Message me"></Image></Link>
        </> 
    )
}

export default App;