import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/index.css';
import '@/app/globals.css';
import Marquee from '@/components/marquee'
import Cymarq from '@/components/cymarq'
import IP from '@/components/ip'
import Subscribe from '@/components/subscribe'
import DM from '@/components/dm'
import Footer from '@/components/footer'


const Home = () => {
    const [ipAddress, setIpAddress] = useState('Unknown');
    const [isGrid, setGrid] = useState(false);

    useEffect(() => {
        async function fetchIp() {
            const res = await fetch('/api/get-ip');
            const data = await res.json();
            setIpAddress(data.ipAddress);
        }
        fetchIp();
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
            <Link href="/sites">SITIOS</Link>
            <Link href="/models">MODELOS</Link>
            <Link href="/ai">IA</Link>
            <Link href="/architecture">ARQUITETURA</Link>
        </div>
        <Link href="/log" className='message'>NÃO-CLIQUE-AQUI</Link>
        <div className='content mt-24 lg:mt-0'>
            <video width="100%" height="100%" autoPlay muted loop>
                <source src="/models/tierra_sudando_fabohax.mp4" type="video/mp4" alt="fabohax-model"/>
            </video>
        </div>
        <div className='text-left p-4 mt-8'> 
            <div className='mx-auto px-8 py-8 lg:w-1/3 md:1/2 my-16 border-[1px] border-[#333] rounded-3xl'>
                <p className='mx-auto leading-10'>Oi! Sou Fabo, Arquiteto Desenvolvedor baseado em Lima, Peru. Explorando Impressão 3D, Blockchains e IA há alguns anos, obtive unidades de bitcoin desde o final de 2018 ao pegar emprestado do banco e pagar com os lucros. Construi um penthouse de 65 m² e me dediquei a melhorar meu trabalho e a me manter envolvido com o desenvolvimento contínuo dos meus temas. Estou aberto a fazer networking e colaborar com quem compartilha Autenticidade, Autonomia e Aspiração por uma humanidade melhor.</p>
                <p>Sinta-se à vontade para entrar em contato! Atualmente estou procurando labor remota ou uma parceria.</p>
                <p>Recentemente explorando a possibilidade de tokenizar Aquicultura RWA em <Link href="https://searanchfarms.com" target='_blank' className='underline'>searanchfarms.com</Link></p>
                <p>e solicitando <i>grants</i> com <Link href="https://zuyux.xyz" target='_blank' className='underline'>zuyux</Link> como uma proto_nação de criadores digitais.</p>
                <p>Além disso, acabei de publicar 69 executáveis de cibersegurança que você pode conferir na próxima marquise.</p>
                <p className='text-center'><Link href="/ego" className='underline underline-offset-8 hover:bg-white hover:text-black'>Mais sobre mim</Link> | <Link href="/port" className='underline underline-offset-8 hover:bg-white hover:text-black'>Confira meu portfólio</Link></p>
            </div>
        </div>
        <div className='text-center p-4 mt-8 mb-20'>
            <Link href="/cysec">
                <Cymarq/>
            </Link>
        </div>
        <div className='text-center'>
            <Link href="/log" className='pb-2  border-b-2'>log_recente</Link>
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
