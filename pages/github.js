/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Github() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://github.com/fabohax');
  }, [router]);

  return null;

}
