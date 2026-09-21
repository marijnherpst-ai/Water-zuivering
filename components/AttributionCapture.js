'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { onthoudLanding, bewaarAlsToegestaan } from '@/lib/attribution';

export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    onthoudLanding();
    bewaarAlsToegestaan();
  }, [pathname]);

  useEffect(() => {
    const opToestemming = () => bewaarAlsToegestaan();
    window.addEventListener('CookiebotOnAccept', opToestemming);
    window.addEventListener('CookiebotOnConsentReady', opToestemming);
    return () => {
      window.removeEventListener('CookiebotOnAccept', opToestemming);
      window.removeEventListener('CookiebotOnConsentReady', opToestemming);
    };
  }, []);

  return null;
}
