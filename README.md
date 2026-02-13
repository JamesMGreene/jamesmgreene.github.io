# jamesmgreene.github.io

My personal website, built with **React**, **Vite**, and **TypeScript**, deployed to [GitHub Pages](https://jamesmgreene.github.io/).

## Architecture

- **React + Vite + TypeScript**: A modern single-page application bundled by Vite
- **React Router**: Client-side routing for `/`, `/open-source`, `/best-project`, `/learning`, `/mcp-transcript`
- **CSS Modules**: Component-scoped styles for Layout, Header, and Footer; global theme styles preserved

### Entry Point

`index.html` → `src/main.tsx` → `src/App.tsx`

### Shared Components

- **`Layout`** — Wrapper with `<Outlet />` providing consistent page structure
- **`Header`** — Name, bio, and social links
- **`Footer`** — Site footer

### Pages

- `Home.tsx` — Technical Prowess, Personality, More about me
- `OpenSource.tsx` — Open source contributions
- `BestProject.tsx` — Best project narrative
- `Learning.tsx` — Learning activities and credentials
- `McpTranscript.tsx` — MCP transcript viewer

### Styles

- CSS Modules (`*.module.css`) for component-scoped styling
- Global theme styles in `src/styles/global.css` and `src/styles/pygment_trac.css`

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build`, and deploys the `dist/` directory to GitHub Pages.
