// Sitewide Organization/LocalBusiness structured data (JSON-LD). Rendered once
// in the root layout so every page carries consistent NAP (name/address/phone)
// and business-identity signals for Google. Kept static/stable on purpose —
// data that changes per request (like the live review rating) is added
// separately as a supplementary LocalBusiness block on the homepage.
export default function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://www.water-zuivering.nl/#organization',
    name: 'Water-zuivering',
    url: 'https://www.water-zuivering.nl',
    email: 'info@water-zuivering.nl',
    telephone: '+31626944877',
    image: 'https://www.water-zuivering.nl/assets/img/hero-vrouw-water.webp',
    logo: 'https://www.water-zuivering.nl/icon.svg',
    identifier: 'KVK 88718301',
    description:
      'Water-zuivering installeert osmosewatersystemen voor thuis: zuiver drinkwater rechtstreeks uit de kraan, zonder chloor, PFAS, medicijnresten of microplastics.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industrieweg 110',
      postalCode: '2651 BD',
      addressLocality: 'Berkel en Rodenrijs',
      addressCountry: 'NL',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
