# @tonewise/extension

Plasmo-based browser extension for ToneWise. Targets Chrome MV3 and Firefox MV2.

## Develop

```bash
pnpm --filter @tonewise/extension dev
```

Then load `apps/extension/build/chrome-mv3-dev` as an unpacked extension in Chrome.

## Phase ownership

P3 (week 7–8). The popup, content-script field detection, and floating ToneWise button
are scaffolded as stubs and built out by the Frontend Architect in P3.

## Build for production

```bash
pnpm --filter @tonewise/extension build         # Chrome MV3
pnpm --filter @tonewise/extension build:firefox  # Firefox MV2
pnpm --filter @tonewise/extension package        # Zips for store submission
```
