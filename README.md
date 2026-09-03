# Gaur Link - Fence & Fittings

Leading manufacturer and supplier of precision pressed steel, malleable iron, and aluminum fence fittings and gate hardware for American contractors and distributors.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Animation:** Motion
- **Font:** Plus Jakarta Sans

## Project Structure

```
src/
├── App.tsx                     # Router and page switching
├── main.tsx                    # Entry point
├── index.css                   # Global styles + Tailwind
├── types.ts                    # Shared TypeScript types
├── assets/
│   ├── images/                 # Static images (JPG)
│   └── logo/                   # Brand logo
├── components/
│   └── common/                 # Shared across pages
│       ├── FenceFixLogo.tsx
│       ├── Navbar.tsx
│       └── Footer.tsx
├── pages/
│   ├── home/                   # Home page + all sections
│   ├── coming-soon/            # Launch countdown page
│   ├── about/                  # About page (stub)
│   └── contact/                # Contact page (stub)
└── data/
    ├── images.ts               # Image imports
    └── products.ts             # Product catalog data
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Build

```bash
npm run build
```

Output in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

Runs `tsc --noEmit` with strict mode.

### Clean

```bash
npm run clean
```

Removes `dist/` and `server.js`.

## Pages

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Active | Coming soon / launch countdown |
| `/home` | Active | Full landing page with all sections |
| `/about` | Stub | About page |
| `/contact` | Stub | Contact page |

## Home Page Sections

1. Hero with lead capture form
2. Why Choose Us
3. Trust Bar (stats)
4. Services Showcase (product cards)
5. Marquee Ticker
6. How It Works
7. Case Studies
8. Testimonials Grid
9. Service Areas Map
10. FAQ
11. Conversion Banner (CTA)

## Deployment

Optimized for Vercel. Static `dist/` output, no server required.

```bash
npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages).

## License

Private project. All rights reserved.
