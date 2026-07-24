# Bruno Ramires — Portfolio CV

> **Live:** [brunormferreira.github.io](https://brunormferreira.github.io)

Terminal-style portfolio built with **Angular 19** — monospace fonts, typing animations, matrix rain canvas, CRT scanline overlay.

## Stack

- Angular 19 (standalone components)
- SCSS with design tokens
- Canvas API (matrix rain)
- GitHub Actions → GitHub Pages

## Quick Start

```bash
pnpm install
pnpm start        # dev server at localhost:4200
pnpm build:prod   # production build
```

## Deploy

Push to `main` branch → GitHub Actions automatically builds and deploys to GitHub Pages.

### Setup (one-time)

1. Create repo `brunormferreira.github.io` on GitHub under your account
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push code to `main`
4. Site will be live at `https://brunormferreira.github.io`

### Notes

- The CI workflow auto-detects the repo type and sets the correct base href for GitHub Pages.
- If the repo name is `<user>.github.io`, it deploys at root (`/`).
- If it is a project repo, it deploys under `/<repo>/`.

## License

MIT
