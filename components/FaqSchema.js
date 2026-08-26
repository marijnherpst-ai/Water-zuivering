// FAQPage structured data. Takes the exact same [question, answer] pairs
// rendered on the page, so the schema can never drift from what's visible.
export default function FaqSchema({ items }) {
  if (!items?.length) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
