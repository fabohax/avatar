import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DM from '@/components/dm'
import Footer from '@/components/footer';

const HEADER_LINKS = [
    { href: "/", label: "Fabo Hax" },
    { href: "/sites", label: "SITES" },
    { href: "/models", label: "MODELS" },
    { href: "/ai", label: "AI" },
    { href: "/architecture", label: "ARCHITECTURE", className: 'selected' }
];

const GRID_ITEMS = [
    {
        title: "SeaRanch Farms | 2024",
        href: "https://searanchfarms.com",
        src: "/architecture/searanchfarms_240320_craiglewis_fabohax.avif",
        alt: "fabohax-architecture-searanchfarms"
    },
    {
        title:"Olivar Penthouse in Lima | 2019",
        src: "/architecture/penjaus-view_fabohax_2019.avif",
        alt: "fabohax-penjaus"
    },
    {
        title:"Contemporary MALI Expansion | 2016",
        href: "https://javierartadi.com/index.php/portfolio-item/mali-modern-art-museum/",
        src: "/architecture/ala_contemporanea_mali_artadi_fabohax.avif",
        alt: "artadi-fabohax-mali-design"
    },
    {
        title:"Ayni: Solar Decathlon | 2015",
        href: "https://www.archdaily.pe/pe/773573/proyecto-ayni-propuesta-de-peru-para-el-decatlon-solar-latinoamerica-y-el-caribe-2015",
        src: "/architecture/ayni_faua_fabohax.avif",
        alt: "fabohax-architecture"
    },
    {
        title:"Municipalidad de Surquillo | 2014",
        src: "/architecture/municipalidad_de_surquillo_fabohax_rioba.avif",
        alt: "fabohax-muni-surquillo"
    }
];

const CLASS_NAMES = {
    header: "linx text-sm",
    grid: "grid2c",
    visible: "visible mt-24",
    gridItem: "grid-item"
};

const Architecture = () => {
    const [isGrid, setGrid] = useState(false);

    useEffect(() => {
        setGrid(true);
    }, []);

    return (
        <div>
            <header>
                <Link href={HEADER_LINKS[0].href}>{HEADER_LINKS[0].label}</Link>
            </header>
            <div className={CLASS_NAMES.header}>
                {HEADER_LINKS.slice(1).map(({ href, label, className }) => (
                    <Link href={href} key={href} className={className || ''}>{label}</Link>
                ))}
            </div>
            <div className={`${CLASS_NAMES.grid} ${isGrid ? CLASS_NAMES.visible : ''}`}>
                {GRID_ITEMS.map(({ title, href, src, alt }) => (
                    <div className={CLASS_NAMES.gridItem} key={src}>
                        {href ? (
                            <Link href={href} target='_blank'>
                                <Image src={src} width={500} height={500} alt={alt} />
                            </Link>
                        ) : (
                            <Image src={src} width={500} height={500} alt={alt} />
                        )}
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
            <DM/>
            <Footer />
        </div>
    );
};

export default Architecture;
