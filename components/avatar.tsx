// compos/avatar.tsx
import Link from 'next/link';
import Image from 'next/image'

const Avatar = () => {

  return (
    <>
      <Image src="/0/fabohax.png" height="360" width="360" alt="client-logo"></Image>
      
      <p className='text-2xl'>Architect </p>
      <p className='text-sm'>■ <Link href="https://portal.uni.edu.pe/" target='_blank' className='hover:underline'>National University of Engineering</Link></p>
      <p className='text-sm'>+ Based in <Link href="https://maps.app.goo.gl/m92ZgwH3VSJTB3KZA" target='_blank' className='hover:underline'>Lima, Perú</Link></p>
      <p className='text-sm'><Link href="#bc1p0saw6z028y7h6eag3w6hx5an6mk5ta8qk7wx2d3gtqtrty243uvqvjzvew" className='hover:underline'>₿ since 12.12.18</Link></p>
      <p>† ♂ XY </p>
      <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
    </>
  );
}

export default Avatar;
