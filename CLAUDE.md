# Video Portfolio — CLAUDE.md

## Project Overview
A single-page portfolio website for **Leeshark** (full-stack developer + creative studio).
Built with React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + AOS.

## Stack
- **Framework**: React 19 (JSX, no TypeScript)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **Animation**: Framer Motion 12 (scroll-driven) + AOS 2 (entry animations)
- **Package manager**: npm

## Dev Commands
```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Project Structure
```
src/
  main.jsx              # App entry point
  App.jsx               # Root component (renders all sections in order)
  index.css             # Global styles + Tailwind import + custom AOS animations
  App.css               # Additional base styles
  components/
    Preloader.jsx       # Full-screen red splash (2.2s, Framer Motion exit)
    Navbar.jsx          # Fixed top nav, glassmorphism, mobile hamburger
    Hero.jsx            # Full-screen video background, play/pause button
    About.jsx           # Red section, ID badge card with lanyard, skill icons
    Services.jsx        # White section, scroll-driven animated dashed path + tag cards
    Contact.jsx         # Dark section, parallax heading, red form panel
    Footer.jsx          # Dark footer, huge "leeshark" text
  assets/
    about/              # image.png, react.png, node.png, mongodb.png
    hero video/         # Developer_introduces_self_and_sk…_202606051918.mp4
public/
  favicon.svg
  icons.svg
```

## Brand / Design Tokens
- **Primary red**: `#ff2a2a`
- **Dark bg**: `#0a0a0a` / `#111111`
- **Font**: system sans-serif; footer uses `font-mono`
- **Brand name**: `Leeshark.` (with red dot)

## Key Patterns
- Tailwind v4: styles imported via `@import "tailwindcss"` in `index.css` — no config file
- AOS: initialized once in `Hero.jsx` (`AOS.init`), `data-aos` attributes used across all components
- Framer Motion scroll: `useScroll` + `useSpring` in `Services.jsx` drives the animated SVG path
- Custom AOS animation: `drop-bounce` defined in `index.css`
- Video asset imported directly in `Hero.jsx` via Vite asset handling

## Notes
- No routing — pure single-page scroll
- Contact form has no backend wired yet (submit is a no-op)
- `[Location]` placeholder in `About.jsx` line 45 needs real location
- Hero heading text uses `-webkit-text-stroke` for outlined text effect
