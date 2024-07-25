import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/index.css'
import Avatar from '@/components/avatar'
import Clients from '@/components/clients'
import DM from '@/components/dm';
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'

const Bio = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('pt');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const openMenu = (e) =>{
        menu = getElementById('menu');
        menu.style.width = "100%";

    }

    return (
        <div>
        <Link href="/log" className='message'>hackear-é-dominar</Link>
        <nav>
            <header>
                <Link href="/">Hax</Link>
            </header>
        </nav>
        <div className='content'>
            <section className="profile mx-auto">
                <div className='card mx-auto'>
                    <Avatar/>
                </div>
            </section>
            <Clients/>
            <section className='call'>
                <h1 className='text-9xl nubit'>Desenvolvendo <blue>funcionais</blue><br></br>produtos</h1>
                <p>Deixe-me saber quais são os objetivos que a sua organização está perseguindo,<br></br> e eu encontrarei uma maneira de atender às suas necessidades.</p>
                <port>
                    <Link href="/sites"><button>Veja meu portfólio</button></Link>
                </port>
                <div className='stripe'>
                    <h2 className='nubit text-5xl'>Contrate Hax por alguns sats</h2>
                    <Link href="https://t.me/fabohax" target="_blank"><button>Tá, falemos!</button></Link>
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
                        <Image src="/0/FAB_PORT.jpg" height='250' width='400' alt="fab01" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                </div>
                <Reviews/>
                <div className='mx-auto lg:w-1/2'>
                    <h1 className='nubit text-left text-3xl m-12 mb-2'>Algo sobre mim</h1>
                    <div className='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                        <p class='mb-3'>
                            Eu cresci em Tabatinga, uma cidade agradável onde Brasil, Colômbia e Peru se encontram ao longo do rio Amazonas. Minhas mães incríveis, Carmen e Olivia, me levaram em várias viagens pelo país quando eu era pequeno. Aos sete anos, mudei-me para Lima para estudar em Callao e me interessei por computadores graças a um mentor do Banco Central de Reserva do Peru.
                        </p>
                        <p class='mb-3'>
                            Embora eu tenha começado a estudar arquitetura, meu amor por computadores nunca desapareceu. Aprendi PHP por conta própria e criei um aplicativo para arquitetos que chamou a atenção. Mantive o foco em modelagem 3D e programação. Em 2018, me envolvi com Bitcoin e usei essa oportunidade para me aprofundar em pesquisas pessoais e construir um apartamento bacana.
                        </p>
                        <p class='mb-3'>
                            Então, 2020 chegou com a pandemia, e todos nós lutamos de várias maneiras. Vendi meu primeiro NFT, trabalhei em projetos de criptomoedas e colaborei em um filme animado "Where the Two Seas Meet" de Motaz H. Matar, que foi inscrito em festivais. Durante todo esse tempo, continuei aprimorando minhas habilidades em software, vendendo código para empresas de forma independente. Agora, estou animado para elevar meu trabalho e enfrentar alguns projetos empolgantes pelo caminho, esperando unir arquitetura e blockchain.
                        </p>
                        <p class='mb-3'>
                            Sou totalmente a favor de abraçar uma economia deflacionária usando a tecnologia blockchain, como o exemplo incrível do Bitcoin. Mantenho contato com bitcoiners e desenvolvedores ao redor do mundo, aprendendo com tutoriais, comunidades e cursos online. Se você quiser falar sobre alguns desses tópicos, não vá embora e <a href="https://t.me/fabohax" target='_blank'>me contate</a>, ficarei feliz em engajar, colaborar ou apenas nos conhecer.
                        </p>
                    <Link href="/ai">
                        <Image src="/ai/8922_bc_fabohax_gaugan.png" height="400" width="400" alt="fabohax-x-stone" className="mx-auto rounded-lg w-full mt-12"></Image>
                    </Link>
                </div>
                </div>
            </section>
        </div>
        <DM/>
        <Footer/>
        </div>
    );
};

export default Bio;
