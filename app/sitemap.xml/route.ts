export function GET() {
  const today = new Date().toISOString().split('T')[0];
  const urls = ['/', '/success', '/cancel'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>https://teslatech2026.com${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '/' ? '1.0' : '0.5'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
