# Hostel Website (Web Brawl GC)

Modern single-page hostel site built with Next.js 14 App Router, Tailwind CSS, and motion/3D flourishes. Includes theme toggling, animated sections, and responsive layouts tailored for hostel showcase content.

## Features

- App Router with shared layout, metadata, and global fonts/theme providers
- Responsive sticky navbar with smooth-scrolling anchors
- Animated hero with 3D/Three.js hook-up and CTA buttons
- Notice board carousel for announcements
- Section blocks: About, Facilities grid, Team highlights, Gallery, Contact
- Dark/light mode via `next-themes` and persisted preference
- Toast support and Framer Motion animation patterns

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for styling; custom theme colors/fonts in `tailwind.config.ts`
- Framer Motion for animations
- Three.js via `@react-three/fiber` and `@react-three/drei` (hero visual)
- Lucide React icons; react-hot-toast; next-themes

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, theme + toast providers
  page.tsx          # Home page assembling all sections
  globals.css       # Tailwind base and global styles
components/
  Navbar.tsx, Hero.tsx, NoticeBoard.tsx, Facilities.tsx, AboutUsGrid.tsx
  Team.tsx, Gallery.tsx, Contact.tsx, Footer.tsx
  ThemeProvider.tsx, ToastProvider.tsx, ScrollReveal.tsx
  assets/           # Local images (gallery, council photos, hero backgrounds)
tailwind.config.ts  # Design tokens (colors, fonts)
next.config.js      # Next.js configuration
```

## Getting Started

Prerequisites: Node.js 18+ and npm.

1. Install dependencies  
   `npm install`

2. Run the dev server  
   `npm run dev`  
   Visit http://localhost:3000

3. Production build  
   `npm run build`  
   `npm run start`

## Available Scripts

- `npm run dev` – start Next.js in development
- `npm run build` – create production build
- `npm run start` – run the production server
- `npm run lint` – lint the project with Next.js ESLint config

## Customization Tips

- Update brand colors and fonts in `tailwind.config.ts` (`primary` palette, `fontFamily`)
- Swap hero/background/gallery assets in `components/assets/`
- Edit section data in corresponding components (e.g., facilities grid, team list, notices)

## Deployment

Build with `npm run build` and deploy the `.next` output to any Next.js-compatible host (Vercel recommended). Ensure environment matches Node 18+.
