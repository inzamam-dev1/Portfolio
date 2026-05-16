# Portfolio — Md Inzamam

A dark-themed, animated portfolio site built with **Vite + React**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx          ← React entry point
    ├── App.jsx           ← Root layout (imports all sections)
    ├── index.css         ← Global styles, CSS variables, animations
    ├── data/
    │   └── portfolio.js  ← ✏️  Edit ALL your content here
    ├── hooks/
    │   └── useInView.js  ← Intersection Observer hook
    └── components/
        ├── Reveal.jsx    ← Scroll-triggered fade-up wrapper
        ├── Navbar.jsx    ← Sticky nav with active-section highlight
        ├── Hero.jsx      ← Landing section with animated avatar
        ├── Stats.jsx     ← 4 stat counters
        ├── About.jsx     ← Bio + detail cards
        ├── Skills.jsx    ← Tech stack cards
        ├── Projects.jsx  ← Portfolio project cards
        ├── Contact.jsx   ← Email + social links
        └── Footer.jsx
```

## Personalising

**All content lives in one file:** `src/data/portfolio.js`

Edit these exports:

| Export    | What it controls                        |
|-----------|-----------------------------------------|
| `owner`   | Name, role, bio, email, location        |
| `stats`   | The 4 stat numbers                      |
| `details` | About section detail grid               |
| `skills`  | Tech stack categories and tags          |
| `projects`| Project cards (title, desc, links, etc) |
| `socials` | Footer social icon links                |
| `badges`  | Floating badges on the hero avatar      |

No need to touch any component files — just update the data.

## Theming

CSS custom properties are defined in `src/index.css` under `:root`.
Change `--accent` to swap the highlight color across the entire site.

```css
:root {
  --accent:  #00e5b0;   /* ← change this */
  --bg:      #0b0c0e;
  ...
}
```
