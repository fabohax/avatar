'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const Subscribe = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
      email: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSub = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('/api/subscribe', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (response.ok) {
              router.push('/done');
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
            <div className='my-16 text-center'>
                <div>
                    <p>Sign up my log to stay tuned:</p>
                </div>
                <form onSubmit={handleSub} className='bg-[#111] lg:w-1/2 mb-8 mx-auto border-[#333] border-[1px] lg:px-2 lg:py-2 rounded-lg block lg:grid lg:grid-cols-3 lg:gap-2 drop-shadow-lg'>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter your email' 
                        className='px-4 py-4 lg:px-4 rounded-lg text-[18px] text-[#033] bg-transparent outline-none lg:col-span-2'>    
                    </input>
                    <button type="submit"
                        className='text-[18px] bg-[#00f] border-[#002eff] border-[1px] text-[#f5f5f5] px-4 py-4 rounded-lg w-full lg:w-auto '
                        disabled={loading}
                    >
                        {loading ? (
                            <Image src="/loadin.gif" alt="Loading..." className="w-6 h-6"/>
                        ) : (
                            'Subscribe!'
                        )}
                    </button>
                </form>
            </div>
        </>
    );

}

export default Subscribe;

