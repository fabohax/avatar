// pages/contact
import Link from 'next/link';
import Image from 'next/image';
import Marquee from '@/components/marquee'
import IP from '@/components/ip';
import Links from '@/components/links'
import DM from '@/components/dm'
import Footer from '@/components/footer';

export default function Default() {

  return (
    <>
            <header> 
                <Link href="/ego">HAX</Link>
            </header>            
            <Marquee/>
            <div></div>
            <Links/>
            <Link href="/log" className='message'>DON'T CLICK HERE</Link>
            <DM/>
            <Footer/>
    </>
  );

}
