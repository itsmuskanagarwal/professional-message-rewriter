# Development Workflow

## Overview

All changes must go through a Pull Request process. No direct pushes to `main`.

## Step-by-Step Workflow

### 1. Start Fresh (Always)

```bash
git checkout main
git pull origin main
```

### 2. Create an Issue

First, create an issue describing the work:

```bash
gh issue create --title "Your Issue Title" \
  --body "Detailed description of what needs to be done"
```

Note the issue number returned (e.g., #42)

### 3. Create a Branch

Branch naming: `<type>/<issue-number>-<short-description>`

Types:

- `fix/` - bug fixes
- `feature/` - new features
- `refactor/` - code refactoring
- `docs/` - documentation
- `chore/` - maintenance tasks

Example:

```bash
git checkout -b fix/42-vercel-build-command
```

### 4. Make Your Changes

Edit files, test locally, commit regularly:

```bash
git add .
git commit -m "type(scope): descriptive message"
```

Commit message format:

```
type(scope): short description

Longer explanation if needed.
Fixes #42
```

### 5. Push Your Branch

```bash
git push origin fix/42-vercel-build-command
```

### 6. Create a Pull Request

```bash
gh pr create \
  --title "Fix: Correct Vercel build command" \
  --body "Closes #42\n\nThis PR fixes the pnpm --filter flag issue..." \
  --head fix/42-vercel-build-command \
  --base main
```

### 7. Wait for PR Review & Approval

- At least 1 approval required before merge
- All CI checks must pass

### 8. Merge & Clean Up

After PR is merged:

```bash
git checkout main
git pull origin main
git branch -d fix/42-vercel-build-command
git push origin --delete fix/42-vercel-build-command
```

### 9. Manual Deployment (Vercel)

Go to Vercel dashboard → Deployments → Redeploy or manually trigger

## Important Notes

- Never commit directly to main
- Always pull latest before starting new work
- Link PRs to issues using "Closes #XX" in PR body
- Keep commits small and logical
- Write clear commit messages

## Example Complete Workflow

```bash
# 1. Get latest
git checkout main && git pull origin main

# 2. Create issue
gh issue create --title "Fix Vercel deployment" --body "Build command needs updating"

# 3. Create branch (assuming issue #45)
git checkout -b fix/45-vercel-deployment

# 4. Make changes
# ... edit files ...

# 5. Commit and push
git add .
git commit -m "fix(vercel): use correct pnpm filter syntax"
git push origin fix/45-vercel-deployment

# 6. Create PR
gh pr create --title "Fix: Vercel deployment command" \
  --body "Closes #45\n\nUses correct pnpm --filter syntax" \
  --head fix/45-vercel-deployment --base main

# 7. After approval & merge, clean up
git checkout main && git pull origin main
```
