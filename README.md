# Bil — Portfolio

### Muhamad Nabil Faiz Amrullah — Informatics Student & Full-Stack Developer

NIM 242502040042 · Class 3TI01 · Semester 5
Teknik Informatika, Universitas Cendekia Abditama (UCA) — Tangerang, Indonesia

A fast, responsive, and minimal portfolio showcasing my projects, technical blog posts, skills, and journey as a developer.

> **Template credit:** built on [devfolio-v2 by igmoni](https://github.com/igmoni/devfolio-v2). The template is igmoni's work; all personal content here (projects, blog, identity, images) is Bil's own. No sponsor, database, or payment code from the template is included in this version.

---

## About

- **Warlok** — fandom community website (novels, fanart, comics), Next.js + Supabase
- **CyberShield** — cybersecurity dashboard (firewall, traffic, attack sims), React + Recharts
- **IoT Ojol Navigation** — ESP32 + 2.4" TFT companion display for ojol drivers
- **TugasKita** — task manager with Google Drive integration, Next.js + Supabase
- **Video Multimedia AI** — 5.5-minute motion-graphics video on Teknologi & AI

Plus two blog posts: building Warlok with Next.js + Supabase, and showing a phone map on an ESP32 + TFT display.

## Links

- GitHub: https://github.com/Aaronabil
- X: https://x.com/aaronabil_aster
- Email: nabilmuhamad630@gmail.com

## Tech Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Content:** MDX
- **Icons:** Lucide React
- **Deployment:** Vercel

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm run start
```

Set the public site URL (used for canonical links, sitemap, and Open Graph) with:

```bash
SITE_URL=https://your-domain.vercel.app npm run build
```

Without it, the site defaults to `http://localhost:3000`.

### Environment variables

Copy `.env.example` to `.env.local`. Everything is optional:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Website base URL used for metadata and canonical URLs |
| `RESEND_API_KEY` / `CONTACT_EMAIL` / `RESEND_FROM_EMAIL` | Resend contact form (optional) |
| `SPOTIFY_*` | Spotify now-playing (not configured) |
| `WAKATIME_*` | WakaTime coding activity (not configured) |
| `NEXT_PUBLIC_UMAMI_*` | Umami analytics (not configured) |

**Important:** never commit `.env.local` or share real API keys, secrets, or tokens.

## What was removed / disabled vs the template

- **Sponsors removed entirely:** sponsor UI/components/routes, Dodo Payments checkout + webhook API routes, `src/lib/sponsors/`, `src/lib/prisma.ts`, the `prisma/` directory, and the Prisma/Dodo/`@vercel/blob` dependencies + `postinstall prisma generate` script. The build passes with no database and no Dodo env vars.
- **Spotify, WakaTime, Vercel Analytics, Umami, InsightCard:** removed from the home page and their API routes deleted. No keys needed.
- **Geo-tracking proxy (`src/proxy.ts`, `@usenotra/geo`):** removed — it sent visitor data to a third-party ingest endpoint.
- **Buy Me a Coffee / Coffee button:** removed.
- **Side Quests page:** removed (gym stats and languages were the template author's).
- **Books / Movies pages:** kept, but empty with an honest note — Bil does not publish a reading or watch list here yet. No books or movies were invented.
- **Resume page:** no PDF resume exists yet, so the page is a summary (identity, education, projects, skills) with links to GitHub and the project pages.
- **Profile photo:** placeholder initials avatar at `public/assets/bil-avatar.svg`. To use a real photo, replace it with `avatar.jpg` (square) and update `src/components/home/HeroAvatar.tsx`; the banner is a gradient, drop a `banner.jpg` in `public/` if a photo banner is wanted.
- **Contact form:** works only when Resend is configured. Without it, the API fails gracefully and tells visitors to email Bil directly at nabilmuhamad630@gmail.com.

## How to edit content

- **Name, title, links, socials:** `src/config/hero.ts`
- **Experience:** `src/config/experience.ts` (student + project experience only — no job invented)
- **Skills:** `src/config/skills.tsx`
- **Projects:** case studies in `src/data/projects/*.mdx` (frontmatter: `title`, `shortTitle`, `description`, `about`, `image`, `stack`, `github`, `live`, `timeline`, `role`, `team`, `status`, `isPublished`, `date`)
- **Blog posts:** add an `.mdx` file in `src/data/blog/` (frontmatter: `title`, `desc`, `image`, `tags`, `date`, `isPublished`)
- **Gears / setup:** `src/lib/gears.ts` and `src/lib/setup.ts`
- **Site metadata / URL:** `src/config/meta.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set `SITE_URL` to the production website URL.
4. Deploy. No database and no extra env vars are required; add `RESEND_*` only if the contact form should send email.

## License

No open-source license is currently specified for the template. Unless a license is added, do not assume the template's code, branding, or assets are licensed for unrestricted reuse. Bil's own content (projects, blog posts, images) is his.
