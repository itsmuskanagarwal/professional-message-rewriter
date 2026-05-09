# @tonewise/web

The Next.js 14 App Router web client for ToneWise.

## Develop

```bash
pnpm --filter @tonewise/web dev
```

Open http://localhost:3000.

## Phase ownership

- **P2** — Web App UI (this package). Tone presets, rewrite UI, usage counter, 429 state, accessibility audit.
- The agent pipeline lives in [`packages/agents`](../../packages/agents).
- The browser extension shares the same agents via the workspace dependency `@tonewise/agents`.

## Environment

Copy `.env.example` to `.env.local` and fill in keys before running `dev`.
