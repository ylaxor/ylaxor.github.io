# Ali Ncibi — Personal Website & Blog

A clean, modern, fully static personal website and blog built with
**[Astro](https://astro.build)**, designed to be easily extended and deployed
on **GitHub Pages** in a couple of clicks.

![Screenshot placeholder — replace with a real screenshot](public/og-image.png)

## Features

- **CV as a single source of truth** — all content (experience, education,
  skills, languages) lives in one typed TypeScript file
  (`src/data/cv.ts`). Update it once and the whole site updates.
- **Markdown blog** — write posts as `.md` or `.mdx` files in
  `src/content/blog/`; frontmatter-driven metadata, draft support, RSS feed
  and sitemap included.
- **Modern, accessible design** — fluid typography via `clamp()`, dark mode
  via `prefers-color-scheme`, `prefers-reduced-motion` support, semantic HTML,
  keyboard-navigable focus states.
- **Design tokens** — every colour, spacing, radius, shadow and transition is
  a CSS custom property in `src/styles/tokens.css`. Re-theme the whole site
  from one file.
- **Zero client-side JavaScript** — the site is 100% static HTML + CSS.
- **SEO built-in** — meta tags, Open Graph, Twitter cards, canonical URLs,
  RSS and an auto-generated sitemap.
- **CI/CD** — a GitHub Actions workflow builds and deploys the site to Pages
  on every push to `main`.

## Tech Stack

| Layer        | Choice                                                     |
| ------------ | ---------------------------------------------------------- |
| Framework    | [Astro](https://astro.build) (static output)               |
| Content      | Astro Content Collections (Markdown + MDX)                 |
| Styling      | Hand-written CSS with custom properties (design tokens)    |
| Code quality | TypeScript (`astro check`), Prettier                       |
| Fonts        | Inter (UI) + JetBrains Mono (code), self-hosted via Google |
| Deployment   | GitHub Pages via GitHub Actions                            |

## Quick Start

### Prerequisites

- Node.js **18.14.1+** (20 LTS recommended)
- npm 9+

### Install & run locally

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
```

### Build & preview

```bash
npm run build      # static site → dist/
npm run preview    # preview the production build locally
```

### Quality checks

```bash
npm run check      # TypeScript + Astro diagnostics (astro check)
npm run lint       # prettier --check
npm run format     # prettier --write
```

## Project Structure

```
.
├── .github/workflows/deploy.yml    # CI/CD → GitHub Pages
├── public/                         # static assets (copied as-is)
│   ├── favicon.svg
│   ├── og-image.png                # social share image
│   └── robots.txt
└── src/
    ├── components/
    │   ├── layout/                 # Header, Footer
    │   ├── cv/                     # CV sections (Hero, Education, …)
    │   ├── blog/                   # BlogPostCard
    │   └── ui/                     # Section, Card, Tag, Timeline
    ├── content/
    │   ├── blog/                   # 📝 your Markdown/MDX posts live here
    │   └── config.ts               # content-collection schema (frontmatter)
    ├── data/
    │   ├── cv.ts                   # ✏️ all CV content — edit me
    │   └── site.ts                 # site metadata & path helpers
    ├── layouts/
    │   ├── BaseLayout.astro        # global <head>, header, footer
    │   └── BlogLayout.astro        # single-post layout
    ├── pages/
    │   ├── index.astro             # homepage (the CV)
    │   ├── blog/
    │   │   ├── index.astro         # blog listing
    │   │   └── [...slug].astro     # individual posts
    │   └── rss.xml.js              # RSS feed generator
    ├── styles/
    │   ├── tokens.css              # 🎨 design tokens (colors, spacing, …)
    │   ├── reset.css               # modern CSS reset
    │   ├── typography.css          # type scale, prose styling
    │   ├── layout.css              # grid/flex/utility classes
    │   └── global.css              # entry point (imports the above)
    └── utils/
        └── date.ts                 # date + reading-time helpers
```

## Customizing the CV

Open **`src/data/cv.ts`**. It is fully typed, so your editor will tell you
exactly what shape each object expects.

| Block            | Key in `cv`      | Example                             |
| ---------------- | ---------------- | ----------------------------------- |
| Name / headline  | `name`, `title`  | `"Ali Ncibi"`                       |
| Tagline          | `tagline`        | your intro paragraph                |
| Contact details  | `contact`        | email, phone, GitHub, location      |
| Languages        | `languages`      | name + level + proficiency `0-100`  |
| Education        | `education`      | degree, institution, dates, points  |
| Experience       | `experience`     | role, company, dates, bullet points |
| Data & AI skills | `dataSkills`     | foundations / modalities / toolkit  |
| Computer skills  | `computerSkills` | array of `{ title, items }`         |

Example — adding an education entry:

```ts
education: [
  {
    title: 'PhD in Computer Science',
    role: 'Doctoral Researcher',
    start: 'Mar. 2023',
    end: 'Jun. 2026',
    duration: '3 years',
    location: 'Versailles, France',
    institution: 'University of Paris Saclay',
    points: ['A short description of the programme.'],
  },
  // …
],
```

## Writing Blog Posts

### 1. Create a file

Add a Markdown or MDX file to `src/content/blog/`:

```
src/content/blog/
├── my-first-post.md
└── another-post.mdx
```

The filename becomes the URL slug: `my-first-post.md` →
`/blog/my-first-post/`.

### 2. Add frontmatter

```md
---
title: 'My post title'
description: 'A one-liner shown on the blog index and in search results.'
pubDate: '2026-08-02'
updatedDate: '2026-08-03' # optional
tags: ['machine-learning', 'notes']
draft: false # optional, default false
featured: false # optional, default false
heroImage: '/images/cover.png' # optional
---

Markdown content goes here.
```

### Frontmatter reference

| Field         | Type       | Required | Notes                                             |
| ------------- | ---------- | -------- | ------------------------------------------------- |
| `title`       | `string`   | ✅       | Post title                                        |
| `description` | `string`   | ✅       | Shown on cards and in `<meta name="description">` |
| `pubDate`     | `date`     | ✅       | Accepts `YYYY-MM-DD` or a parseable date string   |
| `updatedDate` | `date`     | –        | Shown only if different from `pubDate`            |
| `tags`        | `string[]` | –        | Rendered on cards and posts                       |
| `draft`       | `boolean`  | –        | Hides the post from lists, pages and RSS          |
| `featured`    | `boolean`  | –        | Reserved for highlighting posts                   |
| `heroImage`   | `string`   | –        | Path to an image shown at the top of the post     |

### Drafts

Posts with `draft: true` stay in the repository but are **excluded** from:

- the blog index,
- the individual post page (`[...slug].astro`),
- the RSS feed.

Set `draft: false` (or remove the field) to publish.

### Markdown superpowers

Because the blog uses the MDX integration, posts can import and embed
components:

```mdx
---
title: 'Using a component in MDX'
pubDate: '2026-08-02'
description: 'MDX lets you embed components inside your posts.'
---

import Counter from '../../components/ui/Counter.astro';

<Counter start={5} />
```

> Note: Astro components in MDX are rendered at build time (static), so this
> works even with zero JavaScript on the client.

## Styling & Theming

All visual decisions are CSS custom properties defined in
**`src/styles/tokens.css`**.

### Colors

```css
--color-bg, --color-bg-elevated, --color-bg-subtle
--color-text, --color-text-muted, --color-text-faint
--color-primary, --color-accent
--color-success, --color-warning, --color-danger
--color-border, --color-border-strong
```

Dark mode is automatic via `@media (prefers-color-scheme: dark)` — just add a
second set of values in that block and every component updates.

### Typography

A fluid type scale built with `clamp()` keeps text proportional on any screen
size:

```css
--text-xs … --text-4xl   /* clamp(min, preferred, max) */
--font-sans, --font-mono
```

### Spacing, radius, shadows

```css
--space-0 … --space-32   /* consistent spacing scale */
--radius-sm … --radius-full
--shadow-sm … --shadow-xl
```

### Adding a new section to the homepage

1. Create a component in `src/components/cv/` (or reuse the `Section` + `Timeline` components).
2. Add your content to `src/data/cv.ts`.
3. Import and render it in `src/pages/index.astro`:

```astro
---
import MyNewSection from '@/components/cv/MyNewSection.astro';
---

<MyNewSection />
```

## Deployment to GitHub Pages

The repository ships a ready-to-use GitHub Actions workflow
(`.github/workflows/deploy.yml`). It builds on push to `main` and deploys the
static site to Pages.

### One-time setup (only if not already configured)

1. On GitHub, go to **Settings → Pages** for your repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The workflow does the rest.

### Custom domain

To use a custom domain:

1. Add a `CNAME` file in `public/` containing your domain (e.g. `example.com`).
2. Update `site` and `base` in `astro.config.mjs` and `src/data/site.ts`.

### Project (user) pages vs project pages

This repo is configured for a **project page** served at
`https://<username>.github.io/<repo-name>/` (hence the `base` in
`astro.config.mjs`).

- **Project page**: `base: '/<repo-name>'` — the default in this repo.
- **User/organisation page** (repo named `<username>.github.io`): remove
  `base` (or set it to `''`) and the workflow deploys to the root.

> When you change `base`, also update `src/data/site.ts` (`base`, `url`) and
> `public/robots.txt`.

## Adding New Pages

Routes are file-based in `src/pages/`:

```
src/pages/
├── about.astro        → /about/
├── projects.astro     → /projects/
└── contact.astro      → /contact/
```

Every page should wrap its content in `BaseLayout` for consistent meta tags,
header and footer:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="About" description="About me.">
  <main class="container">…</main>
</BaseLayout>
```

## Performance & Accessibility Notes

- **No client-side JavaScript** — pages are pure HTML + CSS.
- **Fluid `clamp()` type scale** avoids layout shift and awkward mobile text.
- **Semantic HTML5** (`header`, `nav`, `main`, `section`, `article`,
  `time`, `progress`) with ARIA labels where useful.
- **Skip-to-content link**, visible focus rings, and
  `prefers-reduced-motion` support.
- **Dark mode** respects the operating-system preference.

## Scripts Reference

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Build the static site into `dist/`  |
| `npm run preview` | Preview the production build        |
| `npm run check`   | Run Astro + TypeScript diagnostics  |
| `npm run lint`    | Check formatting with Prettier      |
| `npm run format`  | Auto-format all files with Prettier |

## License

MIT — feel free to use this as a starting point for your own site. If you do,
a link back is appreciated but not required.

---

Built with ❤️ and [Astro](https://astro.build).
