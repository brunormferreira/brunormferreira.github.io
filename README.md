# Bruno Ramires — Portfolio CV

> **Live:** [brunormferreira.github.io](https://brunormferreira.github.io)

Terminal-style portfolio built with **Angular 19** — monospace fonts, typing animations, matrix rain canvas, CRT scanline overlay.

## Stack

- Angular 19 (standalone components)
- Angular Router (`/` and `/posts`)
- SCSS with design tokens
- Canvas API (matrix rain)
- GitHub Actions → GitHub Pages
- Markdown posts + generated TypeScript index

## Project Structure

The app is organized by responsibility and feature domain to keep growth predictable:

```text
src/app/
├─ layout/                     # Global visual shell pieces
│  └─ matrix-rain/
├─ shared/                     # Reusable cross-feature building blocks
│  └─ directives/
├─ features/                   # Route/domain-oriented modules
│  ├─ home/
│  │  ├─ home.page.ts          # Route container for '/'
│  │  └─ sections/             # Home-only UI sections (hero, about, etc.)
│  └─ posts/
│     ├─ posts.page.ts         # Route container for '/posts'
│     └─ post-detail/
│        └─ post-detail.page.ts # Route container for '/posts/:slug'
└─ content/                    # Typed static content + generated data
  └─ generated/
    └─ posts.generated.ts
```

### Naming conventions

- `*.page.ts`: components used directly by the router (entry points per route).
- `*.component.ts`: composable UI pieces, usually reused or scoped to a feature section.
- `shared/`: framework-agnostic or cross-feature building blocks.
- `layout/`: global shell visuals and app chrome elements.

## Quick Start

```bash
pnpm install
pnpm start        # dev server at localhost:4200
pnpm build:prod   # production build
```

## Posts (DX Workflow)

Posts are Markdown files in `public/posts/`. A build-time script parses frontmatter, validates metadata, and generates a typed TypeScript index consumed by the Angular app.

### Creating a new post

```bash
pnpm run post:new -- "My Post Title"
```

This creates `public/posts/YYYY-MM-DD-my-post-title.md` with a frontmatter template.

### Writing and publishing

1. Open the generated `.md` file
2. Fill in the frontmatter fields:

```yaml
---
title: 'My Post Title'
description: 'One-line summary shown in the posts list'
date: '2026-07-24' # YYYY-MM-DD
category: 'Angular' # Primary category (shown as badge)
tags: # Used for filtering
  - Angular
  - DX
draft: true # true = hidden from the site
---
```

3. Write the post content below the `---` separator (standard Markdown)
4. Set `draft: false` when ready to publish
5. Start the dev server — generation runs automatically:

```bash
pnpm start
```

### What happens under the hood

| Step                        | What runs                                                                                              | Output                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| `pnpm start` / `pnpm build` | `prebuild` hook runs `posts:generate`                                                                  | `src/app/content/generated/posts.generated.ts` |
| Generation                  | Reads all `.md` files, validates frontmatter, filters drafts, sorts newest-first, calculates read time | Typed `POSTS` array                            |
| Validation                  | Checks: title, description, date (YYYY-MM-DD), category, tags (array), non-empty body, unique slugs    | Fails with all errors listed if invalid        |

### Manual generation (optional)

```bash
pnpm run posts:generate
```

### Frontmatter rules

| Field         | Required | Format                                 |
| ------------- | -------- | -------------------------------------- |
| `title`       | Yes      | Non-empty string                       |
| `description` | Yes      | Non-empty string                       |
| `date`        | Yes      | `YYYY-MM-DD`                           |
| `category`    | Yes      | Non-empty string                       |
| `tags`        | No       | Array of strings (empty `[]` is valid) |
| `draft`       | No       | `true` / `false` (defaults to `false`) |

## Deploy

Push to `main` branch → GitHub Actions automatically builds and deploys to GitHub Pages.

## License

MIT
