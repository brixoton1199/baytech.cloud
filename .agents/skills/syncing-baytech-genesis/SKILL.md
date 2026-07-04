---
name: syncing-baytech-genesis
description: Use when syncing or importing the Baytech Genesis/Lovable/TanStack source into H:\brep\baytech\baytech.cloud, validating visual parity against main, preventing .output/.wrangler build artifacts from entering commits, pushing the import branch, or opening the Baytech import PR.
---

# Syncing Baytech Genesis

Use this skill for the Baytech.cloud publishing repo when the user asks to sync, import, refresh, test, push, or PR the Baytech Genesis source. The import path is local-first: the importer creates or updates a branch and validates the build, but GitHub publishing is a separate explicit step.

## Start Safely

- Read the repo `AGENTS.md` first.
- Work from `H:\brep\baytech\baytech.cloud`.
- Check `git status --short --branch` before changing anything.
- Keep the import on a short-lived `zhiyi/...` branch; do not treat direct `main` edits as ready.
- Do not edit generated `baytech.cloud/`, `.output/`, `.wrangler/`, `.vinxi/`, `.tanstack/`, `.nitro/`, or `dist-ssr/` output by hand.

## Import Workflow

From a clean `main` when starting a fresh import:

```powershell
git fetch --prune
git switch main
git pull --ff-only origin main
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\import-from-baytech-genesis.ps1
```

The importer should:

- resolve `H:\brep\baytech\baytech-genesis` at `main`,
- create a branch like `zhiyi/import-genesis-YYYYMMDD-HHMMSS`,
- preserve publishing-repo local paths such as `AGENTS.md`, `README.md`, `docs`, `tools`, and `.github`,
- run install, `node --test`, build, and `git diff --check`,
- commit only source/config and intended deletions.

Use `-UseCurrentBranch` only for an intentional smoke test or rerun on an already-created branch.

## Artifact Guard

Generated TanStack/Nitro/Wrangler output must not be tracked.

After any import or build, verify:

```powershell
git ls-files .output .wrangler
git check-ignore -v --no-index .output\nitro.json .wrangler\deploy\config.json
git status --short
```

Expected:

- `git ls-files .output .wrangler` prints nothing,
- `git check-ignore` points at `.gitignore`,
- `git status` has no generated output entries.

If generated output is already tracked, remove it from the index and commit the deletion:

```powershell
git rm -r --cached -- .output .wrangler
```

Keep `.gitignore` aligned with the current TanStack output directories:

```gitignore
dist-ssr/
.output/
.wrangler/
.vinxi/
.tanstack/
.nitro/
```

## Importer Changes

When editing `tools/import-from-baytech-genesis.ps1`, use test-first checks in `tests/import-from-genesis-tool.test.mjs`.

The importer must not:

- read `.secret.json`,
- set `GH_TOKEN`,
- push,
- create PRs,
- run naked `git add .`,
- delete `tests/import-from-genesis-tool.test.mjs`.

The importer should stage an allowlist of copied source/config paths plus tracked deletions from known obsolete paths.

Verify importer edits with:

```powershell
node --test tests\import-from-genesis-tool.test.mjs
$parseErrors = $null
[System.Management.Automation.PSParser]::Tokenize((Get-Content -Raw -LiteralPath 'tools\import-from-baytech-genesis.ps1'), [ref]$parseErrors) | Out-Null
if ($parseErrors -and $parseErrors.Count -gt 0) { $parseErrors | Format-List | Out-String; exit 1 }
git diff --check HEAD
```

For high-risk importer changes, run a temporary clone smoke: run the importer with `-UseCurrentBranch`, require final `git status --porcelain` to be empty, and require tracked `.output/.wrangler` count to be `0`. Remove only verified temp directories under `$env:TEMP`.

## Visual Parity Check

Keep the current import branch running on `http://127.0.0.1:5173/`. Start a separate main worktree on `http://127.0.0.1:5174/` when comparing against main.

Recommended sample routes:

- `/`
- `/gpu-cloud`
- `/contact`

Check both desktop and mobile:

- body copy, nav labels, CTA labels, logo and map placement,
- computed widths for the home hero,
- browser title when strict content parity matters,
- console errors/warnings,
- horizontal overflow,
- one real nav click, such as desktop GPU Platform.

Known review nuance: bottom mobile nav labels were crowded on both main and the import during the first sync; call it out as existing behavior, not a new import regression, unless evidence changes.

## GitHub Publishing

Before any GitHub mutation, read `.secret.json` and only report target metadata, never the token. Confirm:

- `github_owner` is `brixoton1199`,
- `github_repo` is `baytech.cloud`,
- `github_pat` exists.

Do not rely on global `gh` auth. For each `gh` command, set `GH_TOKEN` from `github_pat` only inside that command environment.

Push the current branch after validation:

```powershell
$secret = Get-Content -Raw -LiteralPath .secret.json | ConvertFrom-Json
$env:GH_TOKEN = $secret.github_pat
git push -u origin (git branch --show-current)
```

Prefer draft PRs while visual/content parity is still under review:

```powershell
$secret = Get-Content -Raw -LiteralPath .secret.json | ConvertFrom-Json
$env:GH_TOKEN = $secret.github_pat
$repo = "$($secret.github_owner)/$($secret.github_repo)"
$branch = (git branch --show-current).Trim()
gh pr create --repo $repo --base main --head $branch --draft --title "Import Baytech Genesis source" --body "<summary, verification, notes>"
```

PR body should include:

- what was imported,
- artifact guard / importer behavior,
- validation commands,
- known visual/content gaps.
