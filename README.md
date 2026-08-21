# Shubham Modh — Freelance Portfolio

Client-facing freelance portfolio of **Shubham Modh**, freelance .NET &
full-stack developer — web applications, REST APIs, dashboards, real-time and
GPS/IoT systems on ASP.NET Core, Angular, and PostgreSQL.

Built with **Next.js 16** (App Router, static export) and **Tailwind CSS 4**.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

Outputs a fully static site to `out/` (`output: "export"` in
`next.config.ts`) — deploys anywhere; Vercel picks it up automatically.

## Structure

- `src/app/` — layout (fonts, metadata) and the single landing page
- `src/components/` — one component per section: Nav, Hero, Services, Work,
  Process, Engagement, Faq, Contact, Footer, plus client components
  (Reveal, MobileMenu)
- `src/app/globals.css` — design tokens (committed light look with dark
  bands) mapped to Tailwind utilities via `@theme`
