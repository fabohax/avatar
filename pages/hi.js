/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Linkedin() {
  const router = useRouter();

  useEffect(() => {
      router.push('/contact');
  }, [router]);

  return null;

}
