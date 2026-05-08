export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://teslatech2026.com/sitemap.xml
`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
