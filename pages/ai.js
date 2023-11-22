import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AI = () => {

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

    return(
        <div>
            <header><Link href="/">Fabo Hax</Link></header>
            <Link href="/architecture" id="next">
                <Image src="/arrow.svg" height="36" width="36" alt="fabohax-ico"></Image>
            </Link>
            <div class="linx">
                <Link href="/sites">Sites</Link>
                <Link href="/models">Models</Link>
                <Link href="/ai" className='selected'>AI</Link>
                <Link href="/architecture">Architecture</Link>
            </div>
            <div className={`grid ${isGrid ? 'visible' : ''}`}>
                <div className="grid-item">
                    <Image src="/ai/artista-maqina-fabohax-DALL·E 2023-10-20 21.24.14.avif" width={500} height={500} alt="A large, abstract painting made of discarded materials, such as old newspapers, plastic bottles, and broken glass. The painting should be colorful and chaotic, yet still somehow balanced and harmonious. It should evoke a sense of both beauty and decay, hope and despair, life and death." />
                </div> 
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-07-12 20.33.17.png" width={500} height={500} alt="A large, abstract painting made of discarded materials, such as old newspapers, plastic bottles, and broken glass. The painting should be colorful and chaotic, yet still somehow balanced and harmonious. It should evoke a sense of both beauty and decay, hope and despair, life and death." />
                </div> 
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-05-17 20.41.54.png" width={500} height={500} alt="The US has provided Ukraine with over $16 billion in military aid since the start of the war. Realistic photography." />
                </div>
                <div className="grid-item">
                    <Image src="/ai/Thomas_Cole__Architects_Dream__fabohax_ai_expanded.png" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/port_fabohax_06062023.png" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-04-14 22.27.06 - As an artist of 1888, I feel the weight of the world on my shoulders. The colors around me seem dull and lifeless, as if drained of their vibrancy. I .avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-04-14 22.50.47 - You are a portrait painter and you have been commissioned to create a lifelike portrait of a middle-aged man with short salt-and-pepper hair, a trimme.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-04-14 22.47.23 - Create a realistic portrait of an elderly Caucasian man sitting in a garden, looking content and relaxed. Here are some photos of similar settings and.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-04-14 22.58.57 - Te encuentras en una cueva oscura y húmeda, rodeado de pinturas rupestres que cuentan la historia de tu tribu. Tu deber como cazador es capturar al an.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/inka_princess_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/fab_mystical_amazonian_cyberpunk_princess_0623aff5-ea00-40a4-86a4-801c64047c61-transformed.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2023-01-07 03.53.59 - Van Goh painting of a black beautiful woman.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/fab_peruvian_people_taking_power_dfb440f4-a63c-4fce-a55d-a541a15a5ce8.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2022-10-25 19.20.56 - Sustainable Architecture Domes.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/DALL·E 2022-10-14 03.36.20 - encrypted dollar.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/x_stone_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/o_stone_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/A_stone_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/garbage_sea_neuralblender_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/eyes_without_a_face_neuralblender_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/i_got_vaxinated_n_it_hurtz_neuralblender_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/a_random_sea_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/b_random_sea_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
                <div className="grid-item">
                    <Image src="/ai/c_random_sea_gaugan_fabohax.avif" layout="responsive" width={500} height={500} alt="description" />
                </div>
            </div>

        </div>
    )
};

export default AI;
