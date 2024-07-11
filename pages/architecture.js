import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer'

const Architecture = () => {
    const [isGrid, setGrid] = useState(false);

    useEffect(() => {
      setGrid(true);
    }, []);

    return(
        <div>
            <header><Link href="/">Fabo Hax</Link></header>
            <div class="linx text-sm">
                <Link href="/sites">SITES</Link>
                <Link href="/models">MODELS</Link>
                <Link href="/ai">AI</Link>
                <Link href="/architecture" className='selected'>ARCHITECTURE</Link>
            </div>
            <div className={`grid2c ${isGrid ? 'visible mt-24' : ''}`}>
                <div className="grid-item">
                    <Link href="https://searanchfarms.com" target='_blank'>
                        <Image src="/architecture/searanchfarms_240320_craiglewis_fabohax.png"  width={500} height={500} alt="fabohax-architecture-searanchfarms" />
                    </Link>
                </div>
                <div className="grid-item">
                    <Link href="https://www.archdaily.pe/pe/773573/proyecto-ayni-propuesta-de-peru-para-el-decatlon-solar-latinoamerica-y-el-caribe-2015" target='_blank'>
                        <Image src="/architecture/ayni_faua_fabohax.avif"  width={500} height={500} alt="fabohax-architecture" />
                    </Link>
                </div>
                <div className="grid-item">
                    <Link href="https://javierartadi.com/index.php/portfolio-item/mali-modern-art-museum/" target='_blank'>
                        <Image src="/architecture/ala_contemporanea_mali_artadi_fabohax.avif"  width={500} height={500} alt="fabohax-architecture" />
                    </Link>
                </div>
                <div className="grid-item">
                    <Image src="/architecture/homeless_modules_fabohax_chavarry_alessandro.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
                <div className="grid-item">
                    <Image src="/architecture/municipalidad_de_surquillo_fabohax_rioba.avif"  width={500} height={500} alt="fabohax-architecture" />
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Architecture;
