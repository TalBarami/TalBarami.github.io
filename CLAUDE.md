# TalBarami.github.io

Personal portfolio and academic CV for Tal Barami.
Built with [Astro](https://astro.build), Tailwind CSS v4, and YAML data files.
Deployed to GitHub Pages via GitHub Actions.

---

## Dev Commands

| Command           | Description                               |
|-------------------|-------------------------------------------|
| `npm install`     | Install dependencies (first time only)    |
| `npm run dev`     | Start local dev server at localhost:4321  |
| `npm run build`   | Build production output to `dist/`        |
| `npm run preview` | Preview the production build locally      |
| `npm run check`   | Type-check all Astro/TS files             |

---

## Updating Content

**You never need to touch `.astro` files to update content.**

| What to update         | File to edit                          |
|------------------------|---------------------------------------|
| Name, bio, socials     | `src/data/profile.yaml`               |
| Education entries      | `src/content/education.yaml`          |
| Work experience        | `src/content/experience.yaml`         |
| Publications/projects  | `src/content/publications.yaml`       |
| Teaching               | `src/content/teaching.yaml`           |

### Adding a new publication

Open `src/content/publications.yaml` and prepend a new entry (entries render in file order, newest first):

```yaml
- title: "My New Paper Title"
  authors:
    - "Author One"
    - "Tal Barami"
    - "Author Three"
  abstract: "One-paragraph summary."
  venue: "Conference or Journal Name"
  year: 2026
  links:
    - label: "Paper"
      url: "https://link-to-paper"
    - label: "Code"
      url: "https://github.com/..."
      icon: "/assets/logos/github.svg"
  tags:
    - Tag One
    - Tag Two
```

### Uploading new assets

| Asset type           | Directory                    |
|----------------------|------------------------------|
| Profile photo        | `public/assets/images/`      |
| Company/org logos    | `public/assets/logos/`       |
| PDFs (CV, syllabi)   | `public/assets/documents/`   |

Reference them in YAML as `/assets/images/filename.ext` (absolute from `public/`).

---

## Project Structure

```
src/
  data/              # Site-wide data (profile, contact info, analytics)
  content/           # Section content as YAML (education, experience, publications, teaching)
  components/
    layout/          # Header, Footer, Section wrapper
    sections/        # One component per CV section (Hero, Education, etc.)
    ui/              # Reusable primitives (Tag, Card, ExternalLink)
  layouts/           # BaseLayout: wraps every page, injects GA, meta, fonts
  pages/             # index.astro — only page; imports data and renders sections
  styles/            # tokens.css (design tokens), global.css, print.css
public/
  assets/
    images/          # Photos, institutional logos (bgu.png, pic.jpg)
    logos/           # Social/company SVG+PNG icons
    documents/       # CV PDF and course syllabi
.github/workflows/   # GitHub Actions deploy pipeline
```

---

## Deployment

Pushes to `main` automatically trigger `.github/workflows/deploy.yml`, which builds
the Astro project and deploys `dist/` to GitHub Pages.

**One-time setup required:**
In repository Settings → Pages, set **Source** to **"GitHub Actions"**
(not the legacy "Deploy from a branch" option).

---

## Design System

Design tokens (colors, spacing, typography) live in `src/styles/tokens.css` as CSS custom
properties. Tailwind v4 is configured via `@theme` in `global.css` and uses these tokens.
To change the accent color or font, update `tokens.css` — no component changes needed.

---

## Google Analytics

The GA Measurement ID lives in `src/data/profile.yaml` under `analytics.gaMeasurementId`.
`BaseLayout.astro` reads it and injects the gtag snippet **only in production builds**
(`import.meta.env.PROD`), so local dev is never tracked.

---

## Print / CV Export

`src/styles/print.css` contains all `@media print` rules. To export a PDF CV, open the
live site in a browser and use File → Print → Save as PDF.
