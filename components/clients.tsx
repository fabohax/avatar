// compos/clients.tsx
import Link from 'next/link';
import Image from 'next/image'

const Clients = () => {

  return (
    <>
      <section className="clients" id="about">
        <p>Hired by nice clients</p>
        <Link href="https://www.javierartadi.com" target='_blank'><Image className='hover:opacity-100 opacity-50' src="/0/logo_javierartadi.svg" height="100" width="200" alt="client-logo"></Image></Link>
        <Link href="https://www.instagram.com/fisuragaleria/" target='_blank'><Image className='hover:opacity-100 opacity-50' src="/0/logo_fisura.svg" height="100" width="200" alt="client-logo"></Image></Link>
        <Link href="https://laborx.com/" target='_blank'><Image className='hover:opacity-100 opacity-50' src="/0/logo_laborx.svg" height="100" width="200" alt="client-logo"></Image></Link>
        <Link href="https://markeemedia.com/" target='_blank'><Image className='hover:opacity-100 opacity-50' src="/0/logo_markeemedia.svg" height="100" width="200" alt="client-logo"></Image></Link>
        <Link href="https://play.google.com/store/apps/details?id=com.orangepill&hl=en_US&gl=US" target='_blank'><Image className='hover:opacity-100 opacity-50' src="/0/logo_orangepill.svg" height="100" width="200" alt="client-logo"></Image></Link>
    </section>
    </>
  );
}

export default Clients;
