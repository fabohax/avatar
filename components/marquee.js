// components/Marquee.js
import { useEffect, useState } from 'react';
import { fetchPrices } from '../utils/fetchPrices';
import Marquee from "react-fast-marquee";

const Marquees = () => {
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
    <div className="marquee text-[12px] fixed mx-auto px-20 top-[21px] text-[#555] justify-center items-center w-full text-center">
      <Marquee>
        <div className="marquee-content">
          {Object.entries(prices).map(([key, value]) => (
            <span key={key}>
              {key.toUpperCase()}: ${value.usd} &nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
