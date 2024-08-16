import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/index.css';
import '@/app/globals.css';
import Marx from '@/components/marquee'
import CySecs from '@/components/cysecs'
import IP from '@/components/ip'
import ReLog from '@/components/reLog'
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
        <Marx/>
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
                <p>Além disso, acabei de publicar 69 executáveis de cibersegurança que você pode conferir na próxima marquise.</p>
                <p className='text-center'><Link href="/ego" className='underline underline-offset-8 hover:bg-white hover:text-black'>Mais sobre mim</Link> | <Link href="/port" className='underline underline-offset-8 hover:bg-white hover:text-black'>Confira meu portfólio</Link></p>
            </div>
        </div>
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
