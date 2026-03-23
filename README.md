<div align="center">
  <h1>Community Foundation</h1>
  <p><strong>Modern nonprofit platform with scroll-driven animations and glass morphism design</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square" alt="shadcn/ui" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
  </p>

  <br />
  <a href="https://screen-similarizer.vercel.app"><strong>Live Demo →</strong></a>
</div>

---

## Overview

A fully responsive nonprofit website featuring a hero section with animated gradient orbs, scroll-triggered reveal animations, and glass morphism card effects. Designed as a complete single-page experience with impact statistics, program showcases, and a validated contact form.

## Preview

> [View the live application →](https://screen-similarizer.vercel.app)

## Features

▸ **Hero Section** — Full-viewport layout with gradient overlays and animated orbs

▸ **Impact Statistics** — Animated counters for families supported, funds raised, and community reach

▸ **Program Showcase** — Education Access, Community Health, and Economic Empowerment cards

▸ **Contact Form** — Floating-label inputs with client-side validation and toast notifications

▸ **Scroll Animations** — IntersectionObserver-powered reveal effects throughout

▸ **Glass Morphism** — Modern card effects with premium hover interactions

▸ **Fully Responsive** — Mobile-first design with smooth section navigation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Data Fetching | TanStack React Query 5 |
| Forms | React Hook Form + Zod |

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:8080` in your browser.

```bash
# Production build
npm run build

# Preview build
npm run preview
```

## Project Structure

```
src/
  components/
    Header.tsx           # Fixed nav with smooth scrolling
    Hero.tsx             # Full-viewport hero section
    About.tsx            # Mission statement and value pillars
    Stats.tsx            # Animated impact counters
    FeaturedCauses.tsx   # Program cards
    ContactForm.tsx      # Validated contact form
    Footer.tsx           # Footer with links and socials
    ui/                  # shadcn/ui components
  pages/
    Index.tsx            # Home page
  hooks/                 # Custom React hooks
  lib/
    utils.ts             # Utility functions
```

## License

[MIT](LICENSE)

---

<p align="center">Made with 💛 by Sean G</p>
