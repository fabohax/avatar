/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Medium() {
  const router = useRouter();

  useEffect(() => {
      router.push('https://discord.com/users/698284387833348216');
  }, [router]);

  return null;

}
