// Article structured data for kennisbank pieces. No datePublished/dateModified
// on purpose — there's no real publish-date tracking in the CMS for these
// pages, and inventing one would be inaccurate data in the schema.
export default function ArticleSchema({ headline, description, image, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    url,
    author: {
      '@type': 'Organization',
      name: 'Water-zuivering',
      url: 'https://www.water-zuivering.nl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Water-zuivering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.water-zuivering.nl/icon.svg',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
