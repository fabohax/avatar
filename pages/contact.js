// pages/contact
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from '@/components/marquee'
import IP from '@/components/ip';
import Links from '@/components/links'
import DM from '@/components/dm'
import Footer from '@/components/footer';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
      email: '',
      message: ''
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (response.ok) {
              router.push('/');
          } else {
              // Handle error, e.g., show an error message
          }
      } catch (error) {
          console.error('Error submitting form:', error);
          // Handle error, e.g., show an error message
      }
  };
  return (
    <>
            <header> 
                <Link href="/ego">HAX</Link>
            </header>            
            <Marquee/>
            <div className='lg:w-1/3 mx-auto border-[1px] border-[#000] rounded-2xl my-24'>
              <form onSubmit={handleSubmit} className='justify-center items-center p-2'>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder='whats your email?'
                    className='block bg-[#000] border-[1px] border-[#333]  rounded-md mt-4 p-4 w-full'
                />
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='feel free to write me here'
                    className='block bg-[#000] border-[1px] border-[#333]  rounded-md mt-4 p-4 w-full h-36'
                ></textarea>
                <button type='submit' className='hover:bg-[#fff] hover:text-black bg-[#000] border-[1px] border-[#333]  block rounded-md mt-4 p-4 bg-black text-white w-full font-bold'>SEND</button>
            </form>
            <p className='py-8 text-center'>
                You can also contact me at <Link href="mailto:40230@pm.me" className='underline underline-offset-8'>40230@pm.me</Link>
            </p>
            </div>
            <Links/>
            <Link href="/log" className='message'>/LOG</Link>
            <DM/>
            <Footer/>
    </>
  );

}
