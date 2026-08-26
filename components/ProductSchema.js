// Product structured data. No `offers`/price on purpose — this site's prices
// are promotional and change (zomeractie etc.), and none of these pages show
// a fixed price in the copy itself. Adding a price here that drifts from what
// a visitor actually sees risks a Google Merchant Center mismatch penalty, so
// it's left out until a page has a stable, always-accurate price to quote.
export default function ProductSchema({ name, description, image, url, rating, reviewCount }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    brand: {
      '@type': 'Brand',
      name: 'Water-zuivering',
    },
  };

  if (reviewCount > 0) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
