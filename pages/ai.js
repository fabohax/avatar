import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer'

const AI = () => {
  const [isGrid, setGrid] = useState(false);

  useEffect(() => setGrid(true), []);

  useEffect(() => {
    document.querySelectorAll('.grid-item').forEach(item => {
      item.addEventListener('click', () => {
        window.open(item.querySelector('img').src, '_blank');
      });
    });
  }, []);

  const images = [
    { src: '/ai/MAZE-CLOUDINARY-birdie134-fabohax-FLEUR-D-ALLUMINIUM.avif', alt: 'Fleur d\' Crystal' },
    { src: '/ai/DALL·E 2024-04-08 17.52.13 - To Exchange or to War. Digital Art Demonstration-fabohax.png', alt: 'Exchange or War' },
    { src: '/ai/DALL·E 2024-02-02 23.24.08 - sonidos de una grabación entrevista a una minera trabajadora de Perú, arte digital noise, sin caras, sólo detalle macro_fabohax.png', alt: 'Description' },
    { src: '/ai/DALL·E 2024-02-02 23.20.38 - Create a breathtaking desktop wallpaper featuring a magnificent, otherworldly landscape using DALL·E2_fabohax.png', alt: 'Description' },
    { src: '/ai/artista-maqina-fabohax-DALL·E 2023-10-20 21.24.14.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2024-04-08 17.53.54 - metaverse of a fantastic researcher world.png', alt: 'Fleur d\' Crystal' },
    { src: '/ai/DALL·E 2023-07-12 20.33.17.png', alt: 'Description' },
    { src: '/ai/DALL·E 2023-05-17 20.41.54.png', alt: 'The US has provided Ukraine with over $16 billion in military aid since the start of the war. Realistic photography.' },
    { src: '/ai/Thomas_Cole__Architects_Dream__fabohax_ai_expanded.png', alt: 'Description' },
    { src: '/ai/port_fabohax_06062023.png', alt: 'Description' },
    { src: '/ai/DALL·E 2023-04-14 22.27.06 - As an artist of 1888, I feel the weight of the world on my shoulders. The colors around me seem dull and lifeless, as if drained of their vibrancy. I .avif', alt: 'Description' },
    { src: '/ai/DALL·E 2023-04-14 22.50.47 - You are a portrait painter and you have been commissioned to create a lifelike portrait of a middle-aged man with short salt-and-pepper hair, a trimme.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2023-04-14 22.47.23 - Create a realistic portrait of an elderly Caucasian man sitting in a garden, looking content and relaxed. Here are some photos of similar settings and.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2024-04-10 12.40.03 - Astronauta de suit naranja encendido en el espacio. Photography, 120mm, centered, sunshined, hyperrealistic, highly detailed.png', alt: 'Description' },
    { src: '/ai/DALL·E 2023-04-14 22.58.57 - Te encuentras en una cueva oscura y húmeda, rodeado de pinturas rupestres que cuentan la historia de tu tribu. Tu deber como cazador es capturar al an.avif', alt: 'Description' },
    { src: '/ai/inka_princess_fabohax.avif', alt: 'Description' },
    { src: '/ai/fab_mystical_amazonian_cyberpunk_princess_0623aff5-ea00-40a4-86a4-801c64047c61-transformed.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2023-01-07 03.53.59 - Van Goh painting of a black beautiful woman.avif', alt: 'Description' },
    { src: '/ai/fab_peruvian_people_taking_power_dfb440f4-a63c-4fce-a55d-a541a15a5ce8.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2022-10-25 19.20.56 - Sustainable Architecture Domes.avif', alt: 'Description' },
    { src: '/ai/DALL·E 2022-10-14 03.36.20 - encrypted dollar.avif', alt: 'Description' },
    { src: '/ai/x_stone_gaugan_fabohax.avif', alt: 'Description' },
    { src: '/ai/o_stone_gaugan_fabohax.avif', alt: 'Description' },
    { src: '/ai/A_stone_gaugan_fabohax.avif', alt: 'Description' },
    { src: '/ai/garbage_sea_neuralblender_fabohax.avif', alt: 'Description' },
    { src: '/ai/eyes_without_a_face_neuralblender_fabohax.avif', alt: 'Description' },
    { src: '/ai/i_got_vaxinated_n_it_hurtz_neuralblender_fabohax.avif', alt: 'Description' },
    { src: '/ai/a_random_sea_gaugan_fabohax.avif', alt: 'Description' },
    { src: '/ai/b_random_sea_gaugan_fabohax.avif', alt: 'Description' },
    { src: '/ai/c_random_sea_gaugan_fabohax.avif', alt: 'Description' },
  ];

  return (
    <div>
      <header><Link href="/">Fabo Hax</Link></header>
      <div className="linx text-sm">
        <Link href="/sites">SITES</Link>
        <Link href="/models">MODELS</Link>
        <Link href="/ai" className="selected">AI</Link>
        <Link href="/architecture">ARCHITECTURE</Link>
      </div>
      <div className={`grid ${isGrid ? 'visible mt-24' : ''}`}>
        {images.map((image, index) => (
          <div className="grid-item" key={index}>
            <Image src={image.src} width={500} height={500} alt={image.alt} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AI;
