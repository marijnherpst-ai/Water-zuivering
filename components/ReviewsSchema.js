// Structured data for the /reviews page itself: the same organization entity as
// OrganizationSchema/RatingSchema (shared @id so Google merges them), but here
// also carrying the individual Review items so this specific page is eligible
// for review rich snippets, not just the homepage's aggregate rating.
export default function ReviewsSchema({ rating, count, reviews }) {
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
    review: (reviews || []).slice(0, 20).map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.review_text,
      datePublished: r.created_at,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
