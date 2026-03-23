# Screen Similarizer

**React Website Template**

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A modern React website template built with Vite, TypeScript, and shadcn/ui. Features a responsive layout with hero section, stats dashboard, featured content cards, and a contact form.

## Features

- Responsive header with navigation
- Hero section with call-to-action
- Animated stats counters
- Featured content card grid
- Contact form with validation
- Dark mode support via `next-themes`
- Toast notifications (Radix + Sonner)
- Fully typed with TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Data Fetching | TanStack React Query 5 |
| Forms | React Hook Form + Zod |

## Project Structure

```
src/
  components/
    Header.tsx           # Navigation header
    Hero.tsx             # Hero section
    Stats.tsx            # Stats counters
    FeaturedCauses.tsx   # Content card grid
    ContactForm.tsx      # Contact form
    ui/                  # shadcn/ui components
  pages/
    Index.tsx            # Home page
  hooks/                 # Custom React hooks
  lib/
    utils.ts             # Utility functions (cn)
```

## License

MIT

---

Made with 💛 by Sean G
