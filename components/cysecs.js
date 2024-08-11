// components/Marquee.js
import { useEffect, useState } from 'react';
import { fetchPrices } from '../utils/fetchPrices';
import Marquee from "react-fast-marquee";
import Link from 'next/link';

const CySecs = () => {
  const [prices, setPrices] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPrices();
      if (data) {
        setPrices(data);
      }
    };
    fetchData();

    const interval = setInterval(fetchData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marquee text-[12px] text-[#555] justify-center items-center w-full text-center z-25 p-4 mt-8 mb-20">
      <Link href="/cysec">
        <Marquee>
          <div className="marquee-content text-5xl text-white nubit">
              <span className='hover:underline'>
                GET HERE : : CYBERSECURITY TOOLS : : 69 CYSEC TOOLS : : CLICK HERE : : CYBERSECURITY TOOLS : : 69 CYSEC TOOLS : : GET HERE : : CYBERSECURITY TOOLS : : 69 CYSEC TOOLS : : CLICK HERE : : CYBERSECURITY TOOLS : : 69 CYSEC TOOLS : :&nbsp;&nbsp;
              </span>
          </div>
        </Marquee>
      </Link>
    </div>
  );
};

export default CySecs;
