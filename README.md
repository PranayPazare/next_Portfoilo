# Pranay Pazare — Portfolio

Personal portfolio for **Pranay Pazare** — Blockchain & Full Stack Developer based in Pune, India. Web3 dApps, ERC-4337 smart wallets, RWA tokenization, and production backends on Ethereum, Polygon, and Solana.

Live: <https://next-portfoilo.vercel.app/>
Source: <https://github.com/PranayPazare/next_Portfoilo>

---

## Screenshots

### Home

![Home page — animated isometric PP banner, overview, social links, tech stack, experience, education, projects](docs/screenshots/home.png)

### Blog

![Blog list — searchable 2-column grid of posts with cover images](docs/screenshots/blog.png)

### Blog post

![Blog post — markdown body with cover image, inline images, code, and links](docs/screenshots/blog-post.png)

### Resume

![Resume page — name + role chip, bio, Download/Open buttons, embedded PDF](docs/screenshots/resume.png)

### Contact

![Contact page — working form (name, email, subject, message) wired to Web3Forms](docs/screenshots/contact.png)

---

## Tech stack

| Layer            | Choice                                              |
| ---------------- | --------------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack)                  |
| UI runtime       | React 19                                            |
| Styling          | Tailwind CSS v4 + shadcn/ui primitives              |
| Typography       | Geist Sans / Geist Mono / Press Start 2P (pixel)    |
| Animation        | `motion` (Framer Motion)                            |
| Content          | TypeScript data modules + `react-markdown`          |
| Forms            | Web3Forms (client-side `fetch`)                     |
| Hosting          | Vercel                                              |
| Package manager  | pnpm 11.5.3                                         |

---

## Features

- **Profile homepage** — overview, social links, tech stack, experience, education, and projects rendered from typed data in `src/features/portfolio/data/`.
- **Animated banner mark** — 3D-extruded pixel-block "PP" letterform in 30° isometric projection, with a mouse-tracking radial-gradient stroke and a spring-driven tap-press animation (`src/features/portfolio/components/chanhdai-mark-isometric.tsx`).
- **Blog** — `/blog` listing with client-side search, cover images, and dynamic `[slug]` post pages that render markdown via the existing `Markdown` component. Posts are TypeScript modules in `src/features/blog/data/posts.ts`, statically generated via `generateStaticParams`.
- **Resume** — `/resume` page with name + role chip, bio, Download / Open buttons, and the resume PDF embedded inline.
- **Contact** — `/contact` page with a working form (name, email, subject, message) submitted to Web3Forms. Inline submitting / success / error states; hidden honeypot for bot filtering.
- **Dark / light theme** — keyboard shortcut (`D`), Tailwind v4 `color-mix(in_oklab,…)` design tokens.
- **SEO-ready** — per-route metadata, OpenGraph + Twitter cards, JSON-LD Person + WebSite, robots directives, canonical URLs.

---

## SEO

The site ships with structured metadata Google's crawler is configured to consume:

- **Title template** — `%s — Pranay Pazare` on every route; root falls back to `Pranay Pazare — Blockchain & Full Stack Developer`.
- **Description** — 155-char Google-snippet-sized, in `SEO_DESCRIPTION` at `src/config/site.ts`.
- **Keywords** — 50+ targeted terms covering identity, role variants, location (Pune / India), tech stack (Solidity, Rust, React, Next.js, NestJS), chains (Ethereum, Polygon, Solana), Web3 specialties (ERC-4337, RWA tokenization, DeFi), and hire-intent terms. Editable in `src/features/portfolio/data/user.ts`.
- **OpenGraph + Twitter cards** — `summary_large_image` with the avatar as the OG image. Site-wide title/description fall through; per-route metadata (in `app/(app)/blog`, `/resume`, `/contact`) overrides as needed.
- **JSON-LD** — `Person` + `WebSite` schemas linked via stable `@id` anchors so Google merges the entity across pages. Includes `jobTitle`, `worksFor` (Blocsys Technologies), `address` (Pune, IN-MH), `knowsAbout` (skills array), and `sameAs` (social profiles flagged with `sameAs: true`).
- **Robots** — `index: true, follow: true` with `max-image-preview: "large"` and `max-snippet: -1` so Google can pull full snippet text and a hero image.
- **Geo meta** — `geo.region: IN-MH`, `geo.placename: Pune` for local-intent queries.
- **Sitemap-friendly** — all routes are statically generated (`○` Static or `●` SSG).

Update keywords + bio in:
- `src/features/portfolio/data/user.ts` (`keywords`, `bio`, `about`)
- `src/config/site.ts` (`SEO_DESCRIPTION`)
- `src/config/json-ld.ts` (`knowsAbout`, `worksFor`)

---

## Project structure

```
src/
├── app/(app)/                 # App Router routes (home, /blog, /resume, /contact)
├── components/                # Shared UI (header, footer, theme toggle, brand mark)
├── features/
│   ├── blog/data/posts.ts     # Blog post content
│   └── portfolio/             # Profile components + typed data modules
│       ├── components/        # ProfileHeader, Experiences, Projects, TechStack, …
│       └── data/              # user, experiences, projects, education, tech-stack, social-links
├── config/site.ts             # Site metadata, MAIN_NAV, source-code links
├── config/json-ld.ts          # Person + WebSite structured-data definitions
├── lib/                       # Utility helpers (fonts, json-ld, utils)
├── styles/                    # Global Tailwind styles
└── types/                     # Shared TypeScript types
docs/
└── screenshots/               # README screenshots (generated by scripts/capture-screenshots.mjs)
public/
├── avatar.png                 # Profile illustration
└── Pranay_Pazare_Resume.pdf   # CV served at /Pranay_Pazare_Resume.pdf
scripts/
└── capture-screenshots.mjs    # Puppeteer screenshot script (regenerates docs/screenshots/)
```

---

## Local development

```bash
pnpm install
pnpm dev
```

Opens at <http://localhost:3000>. Hot-reload is on by default (Turbopack).

### Useful scripts

| Command                                | Purpose                                |
| -------------------------------------- | -------------------------------------- |
| `pnpm dev`                             | Dev server                             |
| `pnpm build`                           | Production build (`next build`)        |
| `pnpm start`                           | Serve the production build             |
| `pnpm lint`                            | ESLint                                 |
| `pnpm check-types`                     | TypeScript check (`tsc --noEmit`)      |
| `pnpm test`                            | Vitest (watch mode)                    |
| `node scripts/capture-screenshots.mjs` | Regenerate README screenshots          |

---

## Environment variables

| Variable                                  | Required | What it does                                                                                                                                                 |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_APP_URL`                     | optional | Canonical site URL used for OG / sitemap metadata. Defaults to `https://next-portfoilo.vercel.app`.                                                          |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`        | optional | Access key from <https://web3forms.com>. Without it, the contact form returns a clear "not configured" error instead of silently failing.                    |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`    | optional | Google Search Console HTML-tag verification token. Renders as `<meta name="google-site-verification" content="…" />`. See [Search Console setup](#google-search-console-setup) below. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION`      | optional | Bing Webmaster Tools verification token. Renders as `<meta name="msvalidate.01" content="…" />`.                                                              |
| `NEXT_PUBLIC_YANDEX_VERIFICATION`         | optional | Yandex Webmaster verification token.                                                                                                                          |

Set them on Vercel under **Project → Settings → Environment Variables** for all environments (Production, Preview, Development).

---

## Google Search Console setup

The site exposes a real sitemap at `/sitemap.xml` (lists all static routes + every blog post with their `date` as `lastModified`) and a `robots.txt` that points crawlers at it. Submitting the sitemap to Google Search Console is what gets the site indexed.

1. Go to <https://search.google.com/search-console> and add a property:
   - Pick **URL prefix** (not Domain — that requires DNS access).
   - Enter the full URL including protocol: `https://next-portfoilo.vercel.app/` (or your custom domain once configured).
2. Choose the **HTML tag** verification method. Google shows a snippet like:
   ```html
   <meta name="google-site-verification" content="abc123…XYZ" />
   ```
   Copy just the `content="…"` value.
3. In Vercel → Project → Settings → Environment Variables, add:
   - Name: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: the token from step 2
   - Environments: **Production** (Preview/Dev optional)
4. Redeploy (push any commit, or hit "Redeploy" on the latest deployment). The meta tag will be on every page.
5. Back in Search Console, click **Verify**. Should succeed instantly.
6. Once verified, in Search Console go to **Sitemaps** → submit `sitemap.xml`. Google will start crawling within hours.

Same flow applies to Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION`) and Yandex Webmaster (`NEXT_PUBLIC_YANDEX_VERIFICATION`) if you want them too.

---

## Deploy

The repo is wired for Vercel. Push to `main` triggers a build automatically via the GitHub integration.

To deploy a fresh fork:

1. Import the repo at <https://vercel.com/new>.
2. Framework preset: **Next.js** (auto-detected).
3. Set environment variables (optional, see above).
4. Deploy. The build command (`next build`) and install command (`pnpm install --no-frozen-lockfile`, defined in `vercel.json`) are handled automatically.

---

## Editing content

Most updates live in typed data modules — no React or TSX changes required:

- **Profile bio, role, social links, avatar** → `src/features/portfolio/data/user.ts`, `social-links.ts`
- **Experience timeline** → `src/features/portfolio/data/experiences.tsx`
- **Projects** → `src/features/portfolio/data/projects.ts`
- **Tech stack chips** → `src/features/portfolio/data/tech-stack.tsx`
- **Education** → `src/features/portfolio/data/education.ts`
- **Blog posts** → push entries into `POSTS` in `src/features/blog/data/posts.ts`
- **Resume PDF** → replace `public/Pranay_Pazare_Resume.pdf`
- **Nav menu** → `MAIN_NAV` in `src/config/site.ts`
- **SEO keywords** → `keywords` in `src/features/portfolio/data/user.ts`
- **SEO description** → `SEO_DESCRIPTION` in `src/config/site.ts`
- **Structured data** → `knowsAbout` / `worksFor` / `address` in `src/config/json-ld.ts`

---

## Credits

This site is built on top of [`chanhdai.com`](https://github.com/ncdai/chanhdai.com), an open-source portfolio template by **Nguyễn Chánh Đại ([@ncdai](https://github.com/ncdai))** released under the MIT License. The layout system, panel components, and visual language are derived from that project; the personal content, blog, contact form, blockchain-focused tech stack, and 3D-extruded banner mark are original to this fork.

If you like the design, please **star the original**: <https://github.com/ncdai/chanhdai.com>.

---

## License

[MIT](./LICENSE). Original copyright by Nguyễn Chánh Đại is preserved per the MIT terms; modifications and personal content in this fork are © Pranay Pazare.
