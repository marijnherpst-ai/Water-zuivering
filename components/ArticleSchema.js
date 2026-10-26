// Article structured data for kennisbank pieces. datePublished/dateModified are
// only set when a page passes a real date — there's no publish-date tracking in
// the CMS, and inventing one would be inaccurate data in the schema.
// about/mentions are optional entity hints (e.g. the city and water company).
export default function ArticleSchema({ headline, description, image, url, datePublished, dateModified, about, mentions }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    url,
    author: {
      '@type': 'Person',
      name: 'Tomas',
      jobTitle: 'Oprichter van Water-zuivering',
      url: 'https://www.water-zuivering.nl/over-ons',
      worksFor: { '@id': 'https://www.water-zuivering.nl/#organization' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Water-zuivering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.water-zuivering.nl/icon.svg',
      },
    },
    ...(datePublished && { datePublished, dateModified: dateModified || datePublished }),
    ...(about && { about }),
    ...(mentions && { mentions }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
