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
      <Link href="/dyor">
        <Marquee direction="right">
          <div className="marquee-content text-5xl text-white nubit">
              <span className='hover:underline'>
                INVEST IN BLOCKCHAIN PROJECTS :: HERE A LIST :: DYOR :: HODL :: NOT YOUR KEYS NOT YOUR COINS :: BUIDL :: QUIERES INVERTIR EN PROYECTOS WEB3? : CLICK AQUÍ ::&nbsp;&nbsp;
              </span>
          </div>
        </Marquee>
      </Link>
    </div>
  );
};

export default CySecs;
