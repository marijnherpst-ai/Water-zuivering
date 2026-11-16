import { notFound } from 'next/navigation';
import StadPagina from '@/components/waterhardheid/StadPagina';
import { STAD_PAGINAS, STAD_VOLGORDE } from '@/lib/waterhardheid/stedenPaginas';

// Only the cities in STAD_PAGINAS exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return STAD_VOLGORDE.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = STAD_PAGINAS[slug];
  if (!s) return {};
  return {
    alternates: { canonical: `/waterhardheid/${s.slug}` },
    title: s.title,
    description: s.description,
    openGraph: {
      title: `Waterhardheid ${s.naam}`,
      description: s.description,
      url: `https://www.water-zuivering.nl/waterhardheid/${s.slug}`,
      type: 'website',
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!STAD_PAGINAS[slug]) notFound();
  return <StadPagina stad={slug} />;
}
