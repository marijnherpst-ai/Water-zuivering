// Product structured data. An offer is only added when a page passes
// `prijsVanaf`, and then it must be the same "vanaf" price the page shows
// (see PrijsVanaf), so schema and visible copy never drift apart. It's an
// AggregateOffer with only a lowPrice because the exact price depends on the
// quote (montage, faucet finish, filters).
export default function ProductSchema({ name, description, image, url, rating, reviewCount, prijsVanaf }) {
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

  if (prijsVanaf) {
    data.offers = {
      '@type': 'AggregateOffer',
      lowPrice: prijsVanaf,
      priceCurrency: 'EUR',
      offerCount: 1,
      availability: 'https://schema.org/InStock',
      url,
    };
  }

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
