# Zero21 — React / TypeScript / Vite website

A responsive, single-page consultancy website based on the revised Zero21 visual direction and the professional experience supplied in James Ashton's CV.

## Getting started

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

For a deployable static build:

```bash
npm run build
npm run preview
```

Upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages or any static host. Set build command to `npm run build` and publish directory to `dist`.

## Website sections

- **Home** — hero and consulting proposition
- **Expertise** — architecture, full stack engineering, AI, technical leadership; expandable details
- **Selected Work** — two cards with accessible detailed case-study dialogs
- **Experience** — cross-sector credentials
- **Approach** — engagement process and models
- **About** — short context about James Ashton, not a separate founder/company pitch
- **Contact** — LinkedIn call to action (no email address is published)

The main navigation links to sections on the same page. This keeps the first version compact and easy to update.

## Content / configuration

- Change case studies, tags and engagement attribution in `src/data/content.ts`.
- Change expertise descriptions, service approach and navigation in `src/App.tsx`.
- Change brand colours, typography and layout in `src/styles.css`.
- Change SEO title, description and social metadata in `index.html`.
- Replace `/public/images/` illustrations with approved project screenshots later, if desired.
- The LinkedIn contact URL is configured in `src/data/content.ts`. The site deliberately does not publish an email address.
- The personal website **jamesashton.com** is intentionally not linked, since it is still being designed.

### Contact behaviour

There is no backend, and the site never includes an email address in its HTML or JavaScript. Visitors are sent to LinkedIn to start a conversation. If a contact form is wanted later, use a form service or backend that keeps the recipient address server-side.

### Accuracy and illustrative imagery

The 2026 broadcasting case study is attributed to a Zero21 client engagement. The immersive-platform example is explicitly marked as **prior leadership**, not work performed by Zero21 on behalf of that organisation.

All project images are **illustrative**, not screenshots from private client systems. The hero is an AI-generated conceptual image, and the other images are bespoke SVG illustrations.

## Accessibility and responsive design

- Semantic sections, labelled navigation, focus styles, skip link and form labels
- Keyboard dismissible case-study dialogs
- Tablet and mobile layouts, mobile navigation, and reduced-motion support
- No client secrets, API keys, analytics scripts, or cookie tracking

## Notes

This package is an implementation source project, not a deployed website. Install dependencies and run the Vite build in a network-enabled environment. If you later want dedicated multi-page routes, React Router can be added without redesigning the core components.
