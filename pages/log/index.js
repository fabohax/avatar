import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';

const Log = () => {

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

    const logs = [
      { title: "De la Arquitectura Regenerativa con Grafeno",
        sub: "Exploración de aplicación del grafeno en casas pasivas",
        link: "https://fabohax.medium.com/a-beleza-da-arquitetura-sustent%C3%A1vel-4491de109aff",
        date: "24.6.17" },
      { title: "Migración a un Sistema de Producción de Demanda",
        sub: "Un Enfoque Sostenible para las Industrias de Alimentación, Moda y Electrónica",
        link: "https://fabohax.medium.com/migraci%C3%B3n-a-un-sistema-de-producci%C3%B3n-bajo-demanda-eca14180bd87",
        date: "24.4.29" },
      { title: "Cambistas digitales merecen una mejor plataforma P2P y los bancos podrían ayudar si quisieran",
        link: "https://fabohax.medium.com/cambistas-digitales-merecen-una-mejor-plataforma-p2p-y-los-bancos-podr%C3%ADan-ayudar-si-quisieran-2a5b217cbfc9",
        sub: "Yape y Plin pueden ofrecer a los desarrolladores herramientas para transacciones automáticas.",
        date: "24.3.27" },
      { title: "La tecnología cuántica es una clave energía alternativa",
        link: "https://fabohax.medium.com/la-tecnolog%C3%ADa-cu%C3%A1ntica-podr%C3%ADa-ser-una-clave-energ%C3%ADa-alternativa-5e084f8f1e68",
        sub: "La tecnología cuántica puede generar energía y reemplazar las baterías de ion de litio en el futuro",
        date: "24.3.4" },
      { title: "5 Proyectos de administración de justicia usando blockchain",
        sub: "Acceder a una justicia transparente y eficaz es posible",
        link: "https://fabohax.medium.com/5-proyectos-de-administraci%C3%B3n-de-justicia-usando-blockchain-4e83a8444d8a",
        date: "24.2.29" },
      { title: "Comprar VPN con Bitcoin Lightning",
        sub: "Posiblemente, la forma más simple y segura de conseguir VPN que se puede encontrar.",
        link: "https://fabohax.medium.com/compra-vpn-con-bitcoin-lightning-fa0e457c8ff7",
        date: "24.2.23" },
      { title: "Risk-based ZK ID for a Better User Experience",
        sub: "How we can overcome the cumbersome KYC process",
        link: "https://fabohax.medium.com/risk-based-zero-knowledge-identity-rzki-for-a-better-costumer-experience-10867fc1eb1d", 
        date: "24.2.18" },
      { title: "Trazabilidad de materiales en la construcción con Blockchain",
        sub: "Transparencia, sostenibilidad y agilización en el desarrollo de proyectos inmobiliarios",
        link: "https://fabohax.medium.com/trazabilidad-de-materiales-en-la-construcci%C3%B3n-con-blockchain-41cb31145841", 
        date: "24.2.6" },
      { title: "Breve referencia de la Vanguardia Tecnológica de la Arquitectura",
        sub: "Supermateriales, Blockchain e Inteligencia Artificial Transforman la Industria de la Construcción",
        link: "https://fabohax.medium.com/arte-arquitectura-y-futuro-a08b6b8d6920",
        date: "21.12.21" },
      { title: "El legado de Satoshi Nakamoto",
        sub: "Desde la filosofía griega temprana hasta la Edad del Bitcoin",
        link: "https://fabohax.medium.com/el-legado-de-satoshi-nakamoto-fc253f9d70c3",
        date: "21.9.19" },
      { title: "Altruismo eficaz anarquista",
        sub: "En memoria de Thomas Raskin",
        link: "https://fabohax.medium.com/altruismo-eficaz-anarquista-dd07ff0c6bf9",
        date: "21.1.14" },
      { title: "Del Estado Automático",
        link: "https://fabohax.medium.com/cripto-estado-es-el-estado-3-0-a15291c2ee70",
        sub: "Cómo Bitcoin, Ethereum y otras redes pueden apuntar el camino a nuevos sistemas de gobierno",
        date: "20.10.5" },
      { title: "¿Cuánto oro hay en el espacio?", 
        sub: "Lo suficiente como para colapsar la economía mundial",
        link: "https://fabohax.medium.com/cu%C3%A1nto-oro-hay-en-el-espacio-dc01f5c00fb1", 
        date: "20.8.17" },
      { title: "Bitcoin = Libertad", 
        sub: "Algo especial sucedió en el primer año después de que Satoshi nos regaló Bitcoin",
        link: "https://fabohax.medium.com/bitcoin-igual-libertad-e0e67253c3d2", 
        date: "20.5.12" }
    ];

  return (
          <div className='mt-24'>
            <div className=''>
              <header><Link href="/">HAX</Link></header>
            </div>
            <div className='block m-4 mb-12 text-4xl lg:text-3xl lg:w-2/5 mx-auto'>
              {logs.map((item) => (
                <Link key={item.link} href={item.link} target="_blank" className="block mt-8 mb-20">
                  <h2 className='hover:underline'>
                    {item.title}
                  </h2>
                  <d className="text-[#444] text-sm text-right float-right nubit">{item.date}</d>
                  <d className='text-[#999] text-sm leading-3'>{item.sub}</d>
                </Link>
              ))}
            </div>
            <Footer />
          </div>
        );
};

export default Log;
