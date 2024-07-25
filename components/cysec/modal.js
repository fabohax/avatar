import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          const response = await fetch('/api/get-cy', {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black rounded-lg p-6 w-full max-w-md mx-4 border-[1px] border-[#333]">
        
        <p className='bg-blue-600 text-white p-4 rounded'>
          Remember that this tool is provided as-is without further guarantee. Please do your own research and comply with ethical behaviors within your communities. Misuse of these tools may have serious legal consequences. It is strongly recommended to educate yourself on cybersecurity and ethical hacking before using them. <Link href="https://security.ine.com/" target='_blank' className='underline underline-offset-4'>Here</Link> are certified recommended courses.
        </p>
        <p className="mb-4">Please enter your email and submit. You'll get a message with a download link.</p>
        <form onSubmit={handleSub}>
          <input 
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className='bg-black text-white hover:text-white px-4 py-4 rounded-lg hover:bg-black border-[#333] border-[1px] w-full mb-4'
          ></input>
          <button
            className="hover:bg-[#f5f5f5] text-white hover:text-black px-4 py-4 rounded-2xl border-[#333] border-[1px] w-full mb-4"
            onClick={onClose}
          >
            [under_construction]
          </button>
          <button
            className="bg-black text-white hover:text-white px-4 py-2 hover:underline hover:bg-black w-full"
            onClick={onClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
