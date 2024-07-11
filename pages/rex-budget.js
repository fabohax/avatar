import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Stax() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://docs.google.com/document/d/1OZcRv93PEPTeLAD0yNKDCHUsNaJ3HIyAvIsybgvLalo/edit?usp=sharing');
  }, [router]);

  return null;

}
