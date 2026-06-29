# Pranay Pazare — Portfolio

Personal portfolio for **Pranay Pazare** — Blockchain & Full Stack Developer.

Live: <https://next-portfoilo.vercel.app/>
Source: <https://github.com/PranayPazare/next_Portfoilo>

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
- **SEO-ready** — per-route metadata, OpenGraph + Twitter cards, canonical URLs, sitemap-friendly static routes.

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
├── lib/                       # Utility helpers (fonts, json-ld, utils)
├── styles/                    # Global Tailwind styles
└── types/                     # Shared TypeScript types
public/
├── avatar.png                 # Profile illustration
└── Pranay_Pazare_Resume.pdf   # CV served at /Pranay_Pazare_Resume.pdf
```

---

## Local development

```bash
pnpm install
pnpm dev
```

Opens at <http://localhost:3000>. Hot-reload is on by default (Turbopack).

### Useful scripts

| Command            | Purpose                                |
| ------------------ | -------------------------------------- |
| `pnpm dev`         | Dev server                             |
| `pnpm build`       | Production build (`next build`)        |
| `pnpm start`       | Serve the production build             |
| `pnpm lint`        | ESLint                                 |
| `pnpm check-types` | TypeScript check (`tsc --noEmit`)      |
| `pnpm test`        | Vitest (watch mode)                    |

---

## Environment variables

| Variable                              | Required | What it does                                                                                          |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL`                 | optional | Canonical site URL used for OG / sitemap metadata. Defaults to `https://pranaypazare.dev`.            |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`    | optional | Access key from <https://web3forms.com>. Without it, the contact form returns a clear "not configured" error instead of silently failing. |

Set them on Vercel under **Project → Settings → Environment Variables** for all environments (Production, Preview, Development).

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

---

## Credits

This site is built on top of [`chanhdai.com`](https://github.com/ncdai/chanhdai.com), an open-source portfolio template by **Nguyễn Chánh Đại ([@ncdai](https://github.com/ncdai))** released under the MIT License. The layout system, panel components, and visual language are derived from that project; the personal content, blog, contact form, blockchain-focused tech stack, and 3D extruded banner mark are original to this fork.

If you like the design, please **star the original**: <https://github.com/ncdai/chanhdai.com>.

---

## License

[MIT](./LICENSE). Original copyright by Nguyễn Chánh Đại is preserved per the MIT terms; modifications and personal content in this fork are © Pranay Pazare.
