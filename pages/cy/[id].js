// pages/cy/[id].js

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import IP from '@/components/ip';
import Footer from '@/components/footer';

export default function Tool({ tool }) {
  if (!tool) {
    return <div>Tool not found</div>;
  }
  
  return (
    <>
        <nav>
          <header> 
              <Link href="/">HAX</Link>
          </header>
        </nav>
        <div className='lg:w-1/3 mx-auto my-36'>
          <h1 className='text-2xl'>{tool.name}</h1>
          <p><strong>Author:</strong> {tool.author}</p>
          <p>{tool.details}</p>
          <p><strong>Price:</strong> {tool.price} Satoshis</p>
          <Link
            href={`/${tool.link}`}
            className='px-4 py-2 rounded-md border-2 border-[#333] bg-[#111] float-right hover:bg-white hover:text-black'>
              Download
          </Link>
        </div>
        <Link href='/cysec' rel="noopener noreferrer" className='fixed bottom-6 right-6'>
          <Image src="/back.svg" height={21} width={21} alt="View"></Image>
        </Link>
        <IP/>
      <Footer/>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'tools.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const tools = JSON.parse(jsonData);

  // Filter out tools with undefined or empty link properties
  const validTools = tools.filter((tool) => tool.link);

  const paths = validTools.map((tool) => ({
    params: { id: tool.link.split('/').pop() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'tools.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const tools = JSON.parse(jsonData);

  const tool = tools.find((tool) => tool.link && tool.link.split('/').pop() === params.id);

  return { props: { tool } };
}
