import Link from 'next/link';
import { mono } from '@/components/Ontwerp';

// Visible author line for knowledge-base articles (E-E-A-T). Facts match /over-ons.
export default function AuteurRegel() {
  return (
    <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em] text-dim`}>
      Geschreven door <Link href="/over-ons" className="underline hover:text-ink">Tomas</Link>, oprichter van Water-zuivering · 4 jaar ervaring met waterzuivering
    </p>
  );
}
