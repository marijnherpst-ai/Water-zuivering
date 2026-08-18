export default function sitemap() {
  const baseUrl = 'https://www.water-zuivering.nl';
  const now = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/aanmelden', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/besparing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/uitleg', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/garantie', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/handleiding', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/reviews', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/3-weg-kraan', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/kennisbank', priority: 0.5, changeFrequency: 'weekly' },
    { path: '/kennisbank/wat-is-osmosewater', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/waterontharder-vs-waterzuiveraar', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/is-kraanwater-veilig', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/wat-kost-een-waterzuiveringssysteem', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/waterfilter-vervangen-hoe-vaak', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/pfas-in-kraanwater', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/kraanwater-vs-flessenwater', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/waterfilter-onder-de-gootsteen', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/kalkaanslag-in-huis', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/3-weg-kraan-uitleg', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/kennisbank/waterzuiveraar-installeren', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/algemene-voorwaarden', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacybeleid', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookiebeleid', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
