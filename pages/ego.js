/*index.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Ego() {
  const router = useRouter();

  useEffect(() => {
    const deviceLanguage = navigator.language.slice(0, 2);
    const supportedLanguages = ['en', 'es', 'pt'];
    const languageRoutes = {
      en: '/en/ego',
      es: '/es/ego',
      pt: '/pt/ego'
    };

    if (supportedLanguages.includes(deviceLanguage)) {
      router.push(languageRoutes[deviceLanguage]);
    } else {
      router.push('/en');
    }
  }, [router]);

  return null;

}
