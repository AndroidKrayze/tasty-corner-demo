# Tasty Corner

Production marketing site for **Tasty Corner** — neighbourhood corner café at 54 Blandford Street, Marylebone (Chiltern corner).

Stack: Next.js App Router · TypeScript · Tailwind CSS · Framer Motion  
Static export configured for GitHub Pages at `/tasty-corner-demo`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127/tasty-corner-demo/](http://127.0.0.1:43127/tasty-corner-demo/)

## Production build

```bash
npm run build
```

Output lands in `out/` (includes `basePath` `/tasty-corner-demo`, `trailingSlash`, and `public/.nojekyll` for GitHub Pages).

## Deployment

GitHub Pages serves the **`gh-pages` branch** (root), published by GitHub's own
`pages-build-deployment` workflow. `.github/workflows/deploy.yml` lints, builds,
and force-pushes `out/` to `gh-pages` on every push to `main`, so merging to
`main` is all it takes to go live at
<https://androidkrayze.github.io/tasty-corner-demo/>. Pull requests run the same
lint and build without deploying.

## Menu data

The menu lives in `src/menu.ts`, transcribed from the printed menu card in
store. Prices and item names are only changed when the printed card changes.

## Contact

- **Phone:** [020 7935 2149](tel:+442079352149)
- **Address:** 54 Blandford Street, Marylebone, London W1U 7HZ
