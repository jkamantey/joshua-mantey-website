# manteyjoshua.com

Personal research site for Joshua Kojo Aduampong Mantey. React 19 + React Router
on Vite, **prerendered to static HTML at build time**.

## Why it is prerendered

A plain Vite/React SPA ships an empty `<div id="root">`. Anything that does not
run JavaScript — LinkedIn and Slack link previews, some search and AI crawlers —
therefore sees a blank page with only a title. The build now renders every route
to real HTML so the content is in the markup, then lets React hydrate it.

Check it any time with:

```bash
npm run build
grep -c mucus dist/index.html     # should be > 0, not 0
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server. Serves the empty shell and mounts client-side, which is fine for development. |
| `npm run build` | Full production build: client bundle, SSR bundle, then prerender. Output in `dist/`. |
| `npm run preview` | Serve `dist/` locally, exactly as deployed. |
| `npm run og` | Regenerate `public/images/og-card.jpg` from `tools/og-card.html`. Needs Google Chrome. |

`npm run build` runs three steps in order:

1. `build:client` — normal Vite build into `dist/`.
2. `build:ssr` — a server bundle of `src/entry-server.jsx` into `.ssr-build/` (gitignored, deleted afterwards).
3. `prerender` — `scripts/prerender.mjs` renders each route and writes `dist/<route>/index.html`, plus `dist/sitemap.xml`.

## Adding or changing a page

Routes live in **two** places and both need updating:

- `src/App.jsx` — the `<Route>` for rendering.
- `src/site.js` — the `ROUTES` entry with that page's `title` and `description`.

`src/site.js` is the single source of truth for the canonical URL, the per-page
head tags, the sitemap and the JSON-LD. A route missing from it will not be
prerendered and will not appear in the sitemap.

## Social preview image

`public/images/og-card.jpg` (1200×630) is generated from `tools/og-card.html`.
Edit that file and run `npm run og`. It is currently built from a portrait —
a render from your own simulations would be a stronger card.

After deploying a change to the card or to any page description, re-scrape the
URL in the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/),
because LinkedIn caches previews aggressively.

## Deploying

`dist/` is committed to the repository, so build before committing:

```bash
npm run build
git add dist && git commit
```

**One thing to check on the host:** if it has a catch-all SPA rewrite
(`/*` → `/index.html`), remove it. Every route now has its own real
`index.html`, and a catch-all would serve the homepage markup to crawlers for
every URL, undoing the prerendering. Deep links work without it.
