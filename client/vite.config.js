import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Generates sitemap.xml + robots.txt and fills SEO placeholders in index.html
// from VITE_SITE_URL (set it in .env or in your Vercel project settings).
const seo = (siteUrl) => ({
  name: 'seo',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
  generateBundle() {
    const lastmod = new Date().toISOString().split('T')[0]
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
    })
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    })
  },
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://example.com').replace(/\/$/, '')
  return { plugins: [react(), seo(siteUrl)] }
})
