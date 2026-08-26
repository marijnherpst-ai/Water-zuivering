// Supplementary LocalBusiness structured data carrying the live aggregateRating.
// Rendered only on the homepage, where the average rating and review count are
// already fetched from Supabase for the on-page reviews section — this reuses
// those same numbers so the schema can never drift from what's shown to users.
export default function RatingSchema({ rating, count }) {
  if (!count || count <= 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://www.water-zuivering.nl/#organization',
    name: 'Water-zuivering',
    url: 'https://www.water-zuivering.nl',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
