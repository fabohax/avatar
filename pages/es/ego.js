import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../app/index.css';
import Footer from '../../components/footer';

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
                    <Image src="/0/_hax.png" height="360" width="360" alt="client-logo"></Image>
                    <p className='text-2xl'>Arquitecto</p>
                    <p className='text-sm'>+ Nací en Brazil. Resido en Lima, Perú</p>
                    <p className='text-sm'>+ Clase BTC: 12.12.18.</p>
                    <p>XY</p>
                </div>
            </section>
            <section className="clients" id="about">
                <p>Contratado por</p>
                <Image className='toScale' src="/0/logo_javierartadi.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_fisura.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_laborx.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_markeemedia.svg" height="100" width="200" alt="client-logo"></Image>
                <Image className='toScale' src="/0/logo_orangepill.svg" height="100" width="200" alt="client-logo"></Image>
                </section>
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
                <div className='aboutme mx-auto lg:w-1/2'>
                    <div className={selectedLanguage === 'es' ? '' : 'hidden'}>
                        <h1 className='text-left text-3xl nubit m-12 mb-2'>Algo sobre mí</h1>
                        <div className='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p class='mb-3'>
                                Crecí en Tabatinga, ciudad donde Brasil, Colombia y Perú se encuentran a lo largo del río Amazonas. Criado por mis dos madres, Carmen y Olivia, a los siete años, me mudaron a Lima para estudiar en Callao y terminé fascinándome por la informática gracias a un mentor ingeniero del BCRP.
                            </p>
                            <p class='mb-3'>
                                Aunque empecé a estudiar arquitectura, mi amor por las computadoras nunca se apagó. Aprendí PHP y creé una aplicación para arquitectos que llamó la atención en un concurso internacional financiado por Harvard y Stanford. Seguí adelante con otras exploraciones, centrándome más en código, modelado e impresión 3D. En 2018, compré cerca de 7 Bitcoins y aproveché la oportunidad para explorar su tecnología profundamente al mismo tiempo que construir un departamento de 65 m2 en un quinto piso en Lima.
                            </p>
                            <p class='mb-3'>
                                Luego, en 2020, llegó la pandemia y, como a todos, nos retó a sobrevivir. Vendí mi primer NFT y trabajé en proyectos financiados con criptomonedas llegando a colaborar en una película animada &apos;Where the Two Seas Meet&apos; (2022) de Motaz H. Matar; que postuló a festivales. Después de esa hermosa experiencia, continué mejorando mis conocimientos en Ruby y NextJS, además vendiendo código de manera independiente. Actualmente, continúo apasionado por enriquecer mi producción y desplegar proyectos que fusionen arquitectura y tecnología digital.
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
        <Footer/>
        </div>
    );
};

export default Bio;
