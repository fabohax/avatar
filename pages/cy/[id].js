// pages/cy/[id].js

import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import IP from '@/components/ip';
import Footer from '@/components/footer';

import Modal from '@/components/cysec/modal';

export default function Tool({ tool }) {
  
  if (!tool) {
    return <div>Tool not found</div>;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
        <nav>
          <header> 
              <Link href="/">HAX</Link>
          </header>
        </nav>
        <div className='lg:w-1/3 mx-auto my-36 p-2'>
          <h1 className='text-2xl'>{tool.name}</h1>
          <p><strong>Author:</strong> {tool.author}</p>
          <p>{tool.details}</p>
          <div className='flex flex-row-2 gap-4'>
            <Link
              href={`/${tool.link}`}
              className='w-full md:block m-2 px-4 py-4 text-center rounded-md border-2 border-[#333] hover:bg-[#111] w-full'
              onClick={openModal}
            >
              Request
            </Link>          
          </div>      
        </div>
        <Link href='/cysec' rel="noopener noreferrer" className='fixed bottom-6 right-6'>
          <Image src="/back.svg" height={21} width={21} alt="View"></Image>
        </Link>
        <IP/>
      <Footer/>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
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
