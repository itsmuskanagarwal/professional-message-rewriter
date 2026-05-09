# ToneWise

> AI-powered workplace communication assistant — zero login, free tier, production grade.

Rewrite Slack, email, and Jira messages with the right tone in seconds. No login.
10 free rewrites a day.

## Status

**Phase P0 — Research & Architecture.** This repository is the engineering
scaffold. The agent pipeline, rate limiter, and UI ship in P1–P3. See
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the system design.

## Repository layout

```
tonewise/
├── apps/
│   ├── web/            # Next.js 14 App Router (web client + Edge API)
│   └── extension/      # Plasmo browser extension (Chrome MV3 + Firefox MV2)
├── packages/
│   └── agents/         # Shared agent pipeline — consumed by both apps
├── docs/
│   └── ARCHITECTURE.md # System design, pipeline contract, phase gates
└── .github/workflows/  # CI + Vercel deploy
```

## Prerequisites

- **Node 20.10+** (`.nvmrc` pinned). On macOS: `brew install node` or use `nvm`.
- **pnpm 9+** — `npm install -g pnpm` once Node is on the box.

## Setup

```bash
git clone <this repo>
cd tonewise
pnpm install
cp apps/web/.env.example apps/web/.env.local   # fill in keys for P1+
pnpm dev                                        # runs web + extension in parallel
```

## Day-to-day commands

| Command                 | What it does                                         |
| ----------------------- | ---------------------------------------------------- |
| `pnpm dev`              | Run all workspaces' dev servers in parallel          |
| `pnpm build`            | Production build for every workspace                 |
| `pnpm test`             | Run unit + integration tests across workspaces       |
| `pnpm lint`             | ESLint across the monorepo                           |
| `pnpm typecheck`        | `tsc --noEmit` per workspace                         |
| `pnpm format`           | Prettier write across all source files               |
| `pnpm --filter @tonewise/web dev`       | Just the web app                       |
| `pnpm --filter @tonewise/extension dev` | Just the extension                     |

## How Claude Code is used here

This project is built with Claude Code acting as every specialist role.
Section 10 of the [master spec](#) carries the exact role-activation prompts.
Each phase has named owners (Engineering Lead, Backend Architect, Frontend
Architect, QA, Domain Researcher, Compliance, Technical Writer) — reflected in
[`.github/CODEOWNERS`](.github/CODEOWNERS).

## License

TBD — Compliance Officer to file in P4.
