import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/index.css';
import '@/app/globals.css';
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
        <div className='text-left p-4 mt-8'>
            <div className='mx-auto px-8 py-8 lg:w-1/3 md:1/2 my-16 border-[1px] border-[#333] rounded-3xl'>
                <p className='mx-auto leading-10'>¡Hola! Soy Fabo, Arquitecto Desarrollador residiendo en Lima, Perú. Explorando la impresión 3D, cadenas de bloques e IA durante algunos años, di un golpe de gracia al comprar bitcoins desde finales de 2018 prestando del banco y pagando luego con las ganancias. Con eso, construí una penthouse de 65 m² y me he dedicado a mejorar mi portafolio y mantenerme involucrado en el desarrollo de mis áreas de interés. Estoy abierto a socializar y colaborar con cualquiera que comparta Autenticidad, Autonomía y Aspiración por una mejor humanidad.</p>
                <p>¡Siéntete libre de ponerte en contacto!</p>
                <p>Estoy recientemente explorando las posibilidades de tokenizar Real-World Assets para la Acuicultura en <Link href="https://searanchfarms.com" target='_blank' className='underline'>searanchfarms.com</Link></p>
                <p>y postulando a <i>grants</i> con la DAO de <Link href="https://zuyux.xyz" target='_blank' className='underline'>zuyux</Link> como una proto_nación de creadores digitales.</p>
                <p>Además, acabo de publicar 69 ejecutables de ciberseguridad como producto de una investigación exhaustiva de más de un año que puedes consultar <Link href="/cysec" className='underline underline-offset-8'>aquí</Link>.</p>
                <p className='text-center'><Link href="/ego" className='underline underline-offset-8 hover:bg-white hover:text-black'>Más sobre mí</Link> | <Link href="/port" className='underline underline-offset-8 hover:bg-white hover:text-black'>Revisa mi Portafolio</Link></p>
            </div>         
        </div>
        <div className='text-center p-4 mt-8 mb-20'>
            <Link href="/cysec">
                <Cymarq/>
            </Link>
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
        <Subscribe/>
        <DM/>
        <IP/>
        <Footer/>
        </div>
    );
};

export default Home;
