export default function sitemap() {
  const baseUrl = 'https://www.water-zuivering.nl';
  const now = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/aanmelden', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/besparing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/uitleg', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/garantie', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/reviews', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
