/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Medium() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://t.me/fabohax');
  }, [router]);

  return null;

}
