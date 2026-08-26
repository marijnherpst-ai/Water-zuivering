// BreadcrumbList structured data — reinforces the real site hierarchy
// (Home > Kennisbank > Article) for Google, matching the visible breadcrumb
// trail a user would mentally construct from the URL/nav.
export default function BreadcrumbSchema({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
