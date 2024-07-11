import React, { useState, useEffect } from 'react';

export default function IP() {
    const [ipAddress, setIpAddress] = useState('Unknown');
    const [isGrid, setGrid] = useState(false);

    useEffect(() => {
        async function fetchIp() {
            const res = await fetch('/api/get-ip');
            const data = await res.json();
            setIpAddress(data.ipAddress);
        }
        fetchIp();
        setGrid(true);
    }, []);

  return (
    <>
        <div className='fixed bottom-0 left-0 text-[#555] text-sm'>{ipAddress}</div>
    </>
  );
}