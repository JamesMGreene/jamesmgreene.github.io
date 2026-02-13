# Copilot Instructions

## Project Overview

This is a personal website for James M. Greene, built with **React**, **Vite**, and **TypeScript**, deployed to GitHub Pages at `jamesmgreene.github.io`.

## Build & Development

- **Dev server**: `npm run dev`
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Deployment

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which installs dependencies, runs `npm run build`, and deploys the `dist/` directory to GitHub Pages.

## Architecture

- **Entry point**: `index.html` → `src/main.tsx` → `src/App.tsx`
- **Routing**: React Router (`react-router-dom`) with client-side routes for `/`, `/open-source`, `/best-project`, `/learning`, `/mcp-transcript`.
- **Shared components**: `src/components/Layout.tsx` (wrapper with `<Outlet />`), `Header.tsx`, and `Footer.tsx` are shared across all pages.
- **Page components**: `src/pages/Home.tsx`, `OpenSource.tsx`, `BestProject.tsx`, `Learning.tsx`, `McpTranscript.tsx`.
- **Styles**: CSS Modules for component-scoped styles (`*.module.css`), global theme styles in `src/styles/global.css` and `src/styles/pygment_trac.css`.
- **Assets**: Static images in `src/assets/`.

## Conventions

- Use **TypeScript** for all source files.
- Use **CSS Modules** for component-scoped styling.
- Internal navigation uses React Router `<Link>` components, not `<a>` tags.
- External links use standard `<a>` tags.
- The site uses the Modernist theme's CSS adapted into CSS Modules and global styles.
