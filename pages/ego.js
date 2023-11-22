import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/index.css';
import '../app/animations.css';

const Bio = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const openMenu = (e) =>{
        menu = getElementById('menu');
        menu.style.width = "100%";

    }

    return (
        <div>
        <Link href="/log" className='message'>to-hak-is-to-master</Link>
        <nav>
            <header>
                <Link href="/">Fabo Hax</Link>
            </header>
            <Link href="/log" className='z-50'>
                <p>LOG</p>
            </Link>
            <Link href="/log" id="next">
                <Image src="/arrow.svg" height="36" width="36" alt="this.out" />
            </Link>
        </nav>
        <div className='content'>
            <section className="profile mx-auto">
                <div className='card mx-auto'>
                    <Image src="/0/avatar.png" height="360" width="360" alt="client-logo"></Image>
                    <h1>Who is Fabo</h1>
                    <p>CG Architect and Software Developer modelling and deploying sites for over 5 years.</p>
                    <Link href="/fabohax.pdf" download="fabohax.pdf">
                    <button>RESUMÉ <Image src="0/arrow-down.svg" height={24} width={24} alt="arrow-down"></Image></button>
                    </Link>
                </div>
            </section>
            <section className="clients">
                <p>Hired by nice clients</p>
                <Image src="/0/logo_javierartadi.svg" height="100" width="200" alt="client-logo"></Image>
                <Image src="/0/logo_fisura.svg" height="100" width="200" alt="client-logo"></Image>
                <Image src="/0/logo_laborx.svg" height="100" width="200" alt="client-logo"></Image>
                <Image src="/0/logo_markeemedia.svg" height="100" width="200" alt="client-logo"></Image>
                <Image src="/0/logo_orangepill.svg" height="100" width="200" alt="client-logo"></Image>
                </section>
            <section className='call'>
            <h1>Developing <blue>good<br></br>products</blue></h1>
            <p>Let me know what goals your organization is pursuing, <br></br> and I will find a way to fulfill your needs.</p>
            <port>
                <Link href="/sites"><button>Watch my portfolio</button></Link>
            </port>
            <div className='stripe'>
                <h2>Hire your dream developer</h2>
                <Link href="https://t.me/fabohax" target="_blank"><button>Yeah, let&rsquo;s talk!</button></Link>
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
                        <Image src="/img/f05.jpg" height='200' width='400' alt="fab03" className='mr-6 rounded rounded-lg mb-3' />
                    </div>
                    <div className="photo">
                        <Image src="/img/f06.jpg" height='200' width='400' alt="fab02" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                    <div className="photo">
                        <Image src="/img/f01.jpg" height='250' width='400' alt="fab01" className='mr-6 rounded rounded-lg mb-3'/>
                    </div>
                </div>
                <div className='aboutme text-center'>
                    <select className="rounded rounded-lg border-white bg-color-black p-3 text-color-white text-left ml-12 mt-12 mb-6"
                        onChange={handleLanguageChange}
                        value={selectedLanguage}
                    >
                        <option value="">文A</option>
                        <option value="es">Español</option>
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </select>
                    <div className={selectedLanguage === 'en' ? '' : 'hidden'}>
                        <h1 className='justify-left text-left text-1em m-12 mb-2'>Some about me</h1>
                        <div class='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p class='mb-3'>
                                I was born in Tabatinga, a triple frontier town on the shores of the Amazon River, between Brazil, Colombia, and Peru. Raised by two mothers, Carmen and Olivia, we spent my early years traveling around the country. So when I was 7, I was moved to Lima so I can study in Callao. There, I was also mentored by a Central Reserve Bank of Peru (BCRP) systems engineer who introduced me to computers. I was immediately fascinated by games and websites and never ceased to be amazed by the marvels of the human mind, capable of creating such toys.
                            </p>
                            <p class='mb-3'>
                                At the age of 18, I started studying architecture at UNI in Peru. However, my passion for computers remained strong, and I continued my self-taught learning journey, studying PHP and developing an application for architects that became a finalist in an innovation contest organized by UNI, Harvard, and Stanford. After that, it was challenging to proceed with the project due to various limitations. However, I persevered and continued learning on my own, focusing more on 3D modeling and programming. In December 2018, at one of the lowest points, I even ventured into researching and buying Bitcoin. This financial opportunity allowed me to dedicate nearly two years to personal research and the construction of a small 60 square meters apartment on a fifth floor in San Martín de Porres.
                            </p>
                            <p class='mb-3'>
                                Then, in 2020, the pandemic struck. With my resources running low, I needed to explore new opportunities. It was during this time that I published and sold the first NFT in Peru for around 0.0333 ETH. I collaborated on small projects in exchange for cryptocurrencies and later had the chance to work with a studio in Pennsylvania on the creation of an animated film &quot;Where the Two Seas Meet&quot; by Motaz H. Matar that premiered in festivals this year.
                            </p>
                            <p class='mb-3'>
                                Throughout this period, I never stopped honing my software development skills. Today, I sell code independently to companies. I am excited to take my NextJS skills to the next level and complete some projects I have in the pipeline. I am committed to embracing a deflationary economy based on blockchain technologies, like the great example of Bitcoin, and I stay in constant contact with bitcoiners and developers from around the world. I take great pride in being accepted into various communities and learning from tutorials, online courses, and the supportive anonymous community.
                            </p>
                            <p class='mb-3'>
                                Presently, various kinds of development has become easier with the advent of AI-powered chatbots. However, it also presents greater challenges in xpression and standing because, at the end of the dot, thers no machine that creates humanity.
                            </p>
                        </div>
                    </div>
                    <div className={selectedLanguage === 'es' ? '' : 'hidden'}>
                        <h1 className='text-left text-1em m-12 mb-2'>Algo sobre mí</h1>
                        <div className='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p className='mb-3'>
                            Nací en la triple frontera de Brasil, Colombia y Perú, en una ciudad llamada Tabatinga, a orillas del río Amazonas. Fui criado por dos madres, Carmen y Olivia, quienes luego se mudaron a Iquitos, donde aprendí el español peruano. Pasamos algunos años viajando por el país hasta llegar a Lima para estudiar en el Callao, donde fui además criado por un ingeniero de sistemas del BCRP, quien me permitió acercarme a las computadoras, incluso laptops desde muy temprana edad. Me fascinó la informática desde entonces y no he dejado de asombrarme de lo maravillosa que es la mente humana, capaz de crear ese tipo de herramientas.
                            </p>
                            <p className='mb-3'>
                            Ingresé a la UNI en Perú a los 18 años, pero mi pasión por las computadoras continuaba fuerte y seguí mi aprendizaje autodidacta, estudiando PHP y desarrollando una aplicación para arquitectos que quedó finalista en un concurso de innovación organizado por la UNI, Harvard y Stanford. Después de eso, fue difícil continuar con el proyecto debido a varias limitaciones. Sin embargo, persistí y seguí aprendiendo por mi cuenta, enfocándome más en el modelado 3D en Blender y la programación, incluso investigando y comprando Bitcoin en diciembre de 2018, en uno de los puntos más bajos. Esa oportunidad financiera me permitió dedicar cerca de 2 años a investigaciones personales y construir un pequeño departamento de 60 metros cuadrados en un quinto piso, en San Martín de Porres.
                            </p>
                            <p className='mb-3'>
                            Luego, en 2020, la pandemia llegó cuando ya me estaba quedando sin recursos y necesitaba buscar más oportunidades. Fue entonces cuando publiqué y vendí el primer NFT en Perú por unos 0.0333 ETH, colaboré con pequeños proyectos a cambio de criptomonedas y, tiempo después, conseguí colaborar con un estudio de Pensilvania en la creación de una película animada &quot;Where the Two Seas Meet&quot; de Motaz H. Matar que ya se lanzó a festivales este año.
                            </p>
                            <p className='mb-3'>
                            Durante ese tiempo, nunca dejé de capacitarme en desarrollo de software y hoy vendo código de forma independiente para empresas. Estoy emocionado de llevar mis habilidades en NextJS al siguiente nivel y de finalizar algunos proyectos que tengo en marcha. Estoy comprometido con la adopción de una economía deflacionaria basada en tecnologías blockchain, como el gran ejemplo de Bitcoin, y mantengo un constante contacto con bitcoiners y desarrolladores de diversas partes del mundo. Me siento muy orgulloso de haber sido aceptado en varias comunidades y de haber aprendido tanto de tutoriales, cursos en línea y varia gente anónima solidaria.
                            </p>
                            <p className='mb-3'>
                            En la actualidad, varios tipos de desarrollo se han vuelto más fáciles gracias a los bots con inteligencia artificial, pero también presenta mayores desafíos para conocernos y comprender que, al final del punto, las máquinas nunca crearán humanidad.
                            </p>
                        </div>
                    </div>
                    <div className={selectedLanguage === 'pt' ? '' : 'hidden'}>
                        <h1 className='text-left text-1em m-12 mb-2'>Algo sobre mim</h1>
                        <div className='text-base md:text-base lg:text-xl m-6 md:m-12 lg:m-24 lg:mt-2 text-left'>
                            <p className='mb-3'>
                            Eu nasci na tríplice fronteira entre Brasil, Colômbia e Peru, em uma cidade chamada Tabatinga, às margens do rio Amazonas. Fui criado por duas mães, Carmen e Olivia, que depois se mudaram para Iquitos, onde aprendi o espanhol peruano. Passei alguns anos viajando pelo país até chegar a Lima para estudar no Callao, onde também fui criado por um engenheiro de sistemas do BCRP, que me permitiu me aproximar de computadores, inclusive laptops, desde muito cedo. Desde então, me fascinei pela informática e continuo admirado com o quão maravilhosa é a mente humana, capaz de criar esse tipo de brinquedos.
                            </p>
                            <p className='mb-3'>
                            Ingressei na UNI no Peru aos 18 anos, mas minha paixão por computadores continuava forte e segui meu aprendizado autodidata, estudando PHP e desenvolvendo um aplicativo para arquitetos que foi finalista em um concurso de inovação organizado pela UNI, Harvard e Stanford. Depois disso, foi difícil continuar com o projeto devido a várias limitações. No entanto, persisti e continuei aprendendo por conta própria, focando mais na modelagem 3D no Blender e na programação, inclusive pesquisando e comprando Bitcoin em dezembro de 2018, em um dos momentos mais baixos. Essa oportunidade financeira me permitiu dedicar cerca de 2 anos a pesquisas pessoais e construir um pequeno apartamento de 60 metros quadrados em um quinto andar, em San Martín de Porres.
                            </p>
                            
                            <p className='mb-3'>
                            Em seguida, em 2020, a pandemia chegou quando eu já estava ficando sem recursos e precisava buscar mais oportunidades. Foi então que publiquei e vendi o primeiro NFT no Peru pela exata quantia de 0,0333 ETH, trabalhei em pequenos projetos em troca de criptomoedas e, posteriormente, consegui colaborar com um estúdio da Pensilvânia na criação de um filme animado &quot;Where the Two Seas Meet&quot; de Motaz H. Matar, que já foi lançado em festivais neste ano.
                            </p>
                            <p className='mb-3'>
                            Durante esse tempo, nunca parei de me capacitar em desenvolvimento de software e atualmente vendo código de forma independente para empresas. Estou animado para levar minhas habilidades em NextJS para o próximo nível e concluir alguns projetos em andamento. Estou comprometido com a adoção de uma economia deflacionária baseada em tecnologias blockchain, como o grande exemplo do Bitcoin, e mantenho contato constante com entusiastas de Bitcoin e desenvolvedores de diversas partes do mundo. Sinto-me muito orgulhoso por ter sido aceito em várias comunidades e por ter aprendido tanto com tutoriais, cursos online e muitas pessoas anônimas solidárias.
                            </p>
                            <p className='mb-3'>
                            Atualmente, vários tipos de desenvolvimento se tornaram mais fáceis graças aos bots com inteligência artificial, mas também apresentam maiores desafios para nos conhecermos e entender que, no final do ponto, as máquinas nunca irão criar humanidade.
                            </p>
                        </div>
                    </div>
                    <Link href="/ai">
                        <Image src="/ai/x_stone_gaugan_fabohax.avif" height="400" width="400" alt="fabohax-x-stone" className="mx-auto"></Image>
                    </Link>
                </div>
            </section>
        </div>
        <footer>
            <div className="foots">
            <Link href="bitcoin:3QbaZCRK6rsuowi6DKRBywPRPWDsRL1H39">Bitcoin</Link>
            <Link href="https://t.me/fabohax">Telegram</Link>
            <Link href="https://github.com/fabohax/avatar">Github</Link>
            <Link href="https://x.com/fabohax">X</Link>
            </div>
        </footer>
        </div>
    );
};

export default Bio;
