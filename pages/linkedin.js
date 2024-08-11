/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Linkedin() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://www.linkedin.com/in/fabo-hax/');
  }, [router]);

  return null;

}
