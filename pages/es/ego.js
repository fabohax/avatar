import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/index.css';
import Avatar from '@/components/avatar'
import Clients from '@/components/clients'
import Reviews from '@/components/reviews'
import DM from '@/components/dm'
import Links from '@/components/links'
import Footer from '../../components/footer'

const Bio = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const openMenu = (e) =>{
        menu = getElementById('menu');
        menu.style.width = "100%";

    }

    return (
        <div>
            <nav><header>
            <Link href="/">Fabo Hax</Link>
            </header></nav>
        <div className='content'>
            <section className="profile mx-auto">
                <div className='card mx-auto'>
                    <Avatar/>
                </div>
            </section>
            <Clients/>
            <section className='call'>
            <h1 className='text-7xl nubit font-bold'>Desplegando <blue>productos<br></br>funcionales</blue></h1>
            <p>Cuéntame qué objetivos busca tu organización, <br></br> y encontraré una manera de aportarles.</p>
                <port>
                    <Link href="/sites"><button>Portafolio</button></Link>
                </port>
                <div className='stripe'>
                    <h2 className='text-5xl nubit font-bold'>Contrata a Hax por unos sats</h2>
                    <Link href="https://t.me/fabohax" target="_blank"><button>Ya! hablemos</button></Link>
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
                        <Image src="/0/FAB_PORT.jpg" height='200' width='400' alt="fab01" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                </div>
                <Reviews/>
                <div className='aboutme mx-auto lg:w-1/2'>
                    <div className={selectedLanguage === 'es' ? '' : 'hidden'}>
                        <h1 className='text-left text-3xl nubit m-12 mb-2'>Más sobre mí</h1>
                        <div className='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p class='mb-3'>
                                Crecí en Tabatinga, ciudad de Brasil en límite con Colombia y Perú donde se encuentran con el río Amazonas. Criado por mis dos madres, Carmen y Olivia, me mudaron a Iquitos y Lima para estudiar en Callao y terminé fascinándome por la informática gracias a un mentor ingeniero de sistemas.
                            </p>
                            <p class='mb-3'>
                                Aunque empecé a estudiar arquitectura, mi amor por la informática nunca disminuyó. Aprendí PHP y creé una aplicación para arquitectos que llamó la atención en un concurso internacional financiado por Harvard y Stanford. Seguí adelante con otras exploraciones, centrándome más en código, modelado e impresión 3D. En 2018, compré varios bitcoins y aproveché la oportunidad para explorar su tecnología a profundidad al mismo tiempo que construir un departamento de 65 m2 en un quinto piso en Lima.
                            </p>
                            <p class='mb-3'>
                                Luego, en 2020, llegó la pandemia y, como a todos, nos retó a sobrevivir. Vendí mi primer NFT y trabajé en proyectos financiados con criptos llegando a colaborar en una película animada &apos;Where the Two Seas Meet&apos; (2022) de Motaz H. Matar; que postuló a festivales. Después de esa hermosa experiencia, continué explorando Ruby y NextJS, ofreciendo y vendiendo código de manera independiente. Actualmente, continúo apasionado por enriquecer mi producción y desplegar proyectos de arquitectura para el desarrollo regenerativo del hábitat humano.
                            </p>
                            <p class='mb-3'>
                                Me fascina la idea de adoptar una economía global deflacionaria usando cadenas de bloqes. Mantengo contacto con bitcoiners y desarrolladores de varias partes del mundo, aprendiendo de tutoriales, comunidades y cursos en línea. Si quieres conversar sobre algunos de estos temas, no lo dudes y <Link href="https://t.me/fabohax" target='_blank' className='underline'>contáctame</Link>, me encantará conocernos.
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
        <Links/>
        <Footer/>
        </div>
    );
};

export default Bio;
