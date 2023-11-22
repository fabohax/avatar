import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Architecture = () => {
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
            <Link href="/" id="next">
                <Image src="/arrow.svg" height="36" width="36" alt="fabohax-ico"></Image>
            </Link>
            <div class="linx">
                <Link href="/sites">Sites</Link>
                <Link href="/models">Models</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture" className='selected'>Architecture</Link>
            </div>
            <div className={`grid2c ${isGrid ? 'visible' : ''}`}>
                <div className="grid-item">
                    <Image src="/architecture/ayni_faua_fabohax.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/ala_contemporanea_mali_artadi_fabohax.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/homeless_modules_fabohax_chavarry_alessandro.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/palermo_stand_fabohax_arqitmo.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/municipalidad_de_surquillo_fabohax_rioba.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/ala_contemporanea_mali_artadi_fabohax_2.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
            </div>
        </div>
    )
};

export default Architecture;
