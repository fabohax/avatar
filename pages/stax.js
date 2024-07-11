/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Stax() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://stacker.news/fabohax');
  }, [router]);

  return null;

}
