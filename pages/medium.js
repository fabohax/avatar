/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Medium() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://fabohax.medium.com');
  }, [router]);

  return null;

}
