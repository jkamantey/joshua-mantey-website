// Turns the client-side React build into real static HTML.
//
// Run after `vite build` (client) and `vite build --ssr` (server). For every
// route in src/site.js it renders the React tree to markup, injects it plus the
// route's head tags into the built index.html, and writes dist/<route>/index.html.
// The client then hydrates that markup instead of replacing an empty <div>.
//
// The point is that crawlers which do not run JavaScript -- LinkedIn, Slack,
// and some search and AI crawlers -- can read the page.

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr-build');

const { render, ROUTES, SITE_URL, OG_IMAGE, AUTHOR, TAGLINE } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.mjs')).href
);

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

function headFor(route) {
  const url = SITE_URL + (route.path === '/' ? '/' : route.path);
  const image = SITE_URL + OG_IMAGE;

  const tags = [
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="author" content="${esc(AUTHOR)}" />`,
    `<meta property="og:type" content="${route.path === '/' ? 'profile' : 'website'}" />`,
    `<meta property="og:site_name" content="Joshua Mantey" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(AUTHOR)}, chemical engineering PhD student at Northeastern University" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ];

  if (route.path === '/') {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: AUTHOR,
      alternateName: 'Joshua Mantey',
      url: SITE_URL + '/',
      image: image,
      email: 'mailto:mantey.j@northeastern.edu',
      jobTitle: 'PhD Student, Chemical Engineering',
      description: TAGLINE,
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Northeastern University',
        department: { '@type': 'Organization', name: 'SimBioSys Laboratory' },
      },
      knowsAbout: [
        'Molecular dynamics simulation',
        'Computational biophysics',
        'Oral drug delivery',
        'Mucus and mucin transport barriers',
        'Machine learning for molecular property prediction',
        'Chemical engineering',
      ],
      sameAs: [
        'https://www.linkedin.com/in/mantey-joshua',
        'https://scholar.google.com/citations?user=8lAWa2sAAAAJ',
      ],
    };
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(person)}</script>`
    );
  }

  return tags.map((t) => '    ' + t).join('\n');
}

function pageFor(route, appHtml) {
  let html = template;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(route.title)}</title>`
  );
  html = html.replace(
    /<meta\s+name="description"[^>]*>/,
    `<meta name="description" content="${esc(route.description)}" />`
  );
  html = html.replace('</head>', `${headFor(route)}\n  </head>`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  return html;
}

// --- render every route -------------------------------------------------

for (const route of ROUTES) {
  const appHtml = render(route.path);
  const outDir =
    route.path === '/' ? distDir : path.join(distDir, route.path.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), pageFor(route, appHtml));
  console.log(`prerendered ${route.path} -> ${path.relative(root, outDir)}/index.html`);
}

// --- sitemap + robots ---------------------------------------------------

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.7'}</priority>
  </url>`
).join('\n')}
</urlset>
`;

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('wrote dist/sitemap.xml');

await rm(ssrDir, { recursive: true, force: true });
