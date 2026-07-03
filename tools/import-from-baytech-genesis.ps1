param(
  [string]$SourceRepo = "H:\brep\baytech\baytech-genesis",
  [string]$SourceRef = "main",
  [string]$BranchName,
  [switch]$UseCurrentBranch,
  [switch]$SkipInstall,
  [switch]$SkipValidation,
  [switch]$SkipCommit
)

$ErrorActionPreference = "Stop"

function Resolve-FullPath {
  param([string]$Path)
  return [System.IO.Path]::GetFullPath($Path)
}

function Assert-ChildPath {
  param(
    [string]$Root,
    [string]$Path
  )

  $rootFull = Resolve-FullPath $Root
  $pathFull = Resolve-FullPath $Path

  if (-not $rootFull.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
    $rootFull = $rootFull + [System.IO.Path]::DirectorySeparatorChar
  }

  if (-not $pathFull.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to touch path outside target repo: $pathFull"
  }
}

function Remove-TargetPath {
  param(
    [string]$TargetRoot,
    [string]$RelativePath
  )

  $targetPath = Join-Path $TargetRoot $RelativePath
  Assert-ChildPath -Root $TargetRoot -Path $targetPath

  if (Test-Path -LiteralPath $targetPath) {
    Remove-Item -LiteralPath $targetPath -Recurse -Force
  }
}

function Copy-RepoPath {
  param(
    [string]$SourceRoot,
    [string]$TargetRoot,
    [string]$RelativePath
  )

  $sourcePath = Join-Path $SourceRoot $RelativePath
  $targetPath = Join-Path $TargetRoot $RelativePath

  if (-not (Test-Path -LiteralPath $sourcePath)) {
    return
  }

  Assert-ChildPath -Root $TargetRoot -Path $targetPath
  $parent = Split-Path -Parent $targetPath
  if (-not (Test-Path -LiteralPath $parent)) {
    New-Item -ItemType Directory -Force -Path $parent | Out-Null
  }

  Remove-TargetPath -TargetRoot $TargetRoot -RelativePath $RelativePath
  Copy-Item -LiteralPath $sourcePath -Destination $targetPath -Recurse -Force
}

function Invoke-CheckedCommand {
  param(
    [string]$Description,
    [scriptblock]$Command
  )

  & $Command
  if ($LASTEXITCODE -ne 0) {
    throw "$Description failed with exit code $LASTEXITCODE."
  }
}

$TargetRepo = Resolve-FullPath (Join-Path $PSScriptRoot "..")
$SourceRepo = Resolve-FullPath $SourceRepo

if (-not $BranchName) {
  $BranchName = "zhiyi/import-genesis-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
}

if (-not (Test-Path -LiteralPath (Join-Path $TargetRepo ".git"))) {
  throw "This script must be run from the baytech.cloud repository."
}

if (-not (Test-Path -LiteralPath (Join-Path $TargetRepo "AGENTS.md"))) {
  throw "AGENTS.md not found. Refusing to import into an unexpected target."
}

if (-not (Test-Path -LiteralPath (Join-Path $SourceRepo ".git"))) {
  throw "Source repo is not a git repository: $SourceRepo"
}

$dirtyTarget = git -C $TargetRepo status --short
if ($LASTEXITCODE -ne 0) {
  throw "Unable to read target git status."
}

if ($dirtyTarget) {
  $dirtyList = ($dirtyTarget -join [Environment]::NewLine)
  throw "Target repo has uncommitted changes. Commit or stash them before importing:`n$dirtyList"
}

if (-not $UseCurrentBranch) {
  $currentBranch = (git -C $TargetRepo branch --show-current).Trim()
  if ($LASTEXITCODE -ne 0) {
    throw "Unable to read current branch."
  }

  if ($currentBranch -ne "main") {
    throw "Run from main to create an import branch, or pass -UseCurrentBranch intentionally."
  }

  git -C $TargetRepo switch -c $BranchName
  if ($LASTEXITCODE -ne 0) {
    throw "Unable to create branch $BranchName."
  }
} else {
  $BranchName = (git -C $TargetRepo branch --show-current).Trim()
  if (-not $BranchName) {
    throw "Detached HEAD is not supported with -UseCurrentBranch."
  }
}

$sourceCommit = (git -C $SourceRepo rev-parse $SourceRef).Trim()
if ($LASTEXITCODE -ne 0 -or -not $sourceCommit) {
  throw "Unable to resolve source ref '$SourceRef'."
}

$snapshotRepo = Join-Path ([System.IO.Path]::GetTempPath()) "baytech-genesis-import-$([Guid]::NewGuid().ToString('N'))"
$snapshotCreated = $false

$pathsToCopy = @(
  ".prettierignore",
  ".prettierrc",
  "bun.lock",
  "bunfig.toml",
  "components.json",
  "eslint.config.js",
  "package.json",
  "public",
  "src",
  "tsconfig.json",
  "vite.config.ts"
)

$preservedTargetLocalPaths = @(
  ".git",
  ".github",
  "AGENTS.md",
  "README.md",
  "docs",
  "tools"
)

$conflictingTargetPaths = @(
  "index.html",
  "package-lock.json",
  "vite.config.js",
  "baytech.cloud",
  "dist",
  "build",
  ".output",
  ".vinxi",
  ".tanstack",
  ".wrangler",
  "node_modules",
  "tests"
)

try {
  git -C $SourceRepo worktree add --detach $snapshotRepo $sourceCommit
  if ($LASTEXITCODE -ne 0) {
    throw "Unable to create source snapshot worktree."
  }
  $snapshotCreated = $true

  $sourcePackagePath = Join-Path $snapshotRepo "package.json"
  if (-not (Test-Path -LiteralPath $sourcePackagePath)) {
    throw "Source package.json not found in snapshot."
  }

  $sourcePackage = Get-Content -Raw -LiteralPath $sourcePackagePath | ConvertFrom-Json
  if ($sourcePackage.name -ne "tanstack_start_ts") {
    throw "Expected baytech-genesis package name 'tanstack_start_ts'; found '$($sourcePackage.name)'."
  }

  Write-Host "Importing Baytech Lovable source"
  Write-Host "  Target repo: $TargetRepo"
  Write-Host "  Target branch: $BranchName"
  Write-Host "  Source repo: $SourceRepo"
  Write-Host "  Source ref: $SourceRef"
  Write-Host "  Source commit: $sourceCommit"

  foreach ($relativePath in $conflictingTargetPaths) {
    Remove-TargetPath -TargetRoot $TargetRepo -RelativePath $relativePath
  }

  foreach ($relativePath in $pathsToCopy) {
    Copy-RepoPath -SourceRoot $snapshotRepo -TargetRoot $TargetRepo -RelativePath $relativePath
  }

  Write-Host "Preserved publishing-repo local paths:"
  foreach ($relativePath in $preservedTargetLocalPaths) {
    Write-Host "  $relativePath"
  }

  if (-not $SkipInstall) {
    if (Get-Command bun -ErrorAction SilentlyContinue) {
      Invoke-CheckedCommand -Description "bun install" -Command { bun install --cwd $TargetRepo }
    } else {
      Invoke-CheckedCommand -Description "npm install" -Command { npm install --prefix $TargetRepo }
    }
  }

  if (-not $SkipValidation) {
    if (Get-Command bun -ErrorAction SilentlyContinue) {
      Invoke-CheckedCommand -Description "bun test" -Command { bun run --cwd $TargetRepo test }
      Invoke-CheckedCommand -Description "bun build" -Command { bun run --cwd $TargetRepo build }
    } else {
      Invoke-CheckedCommand -Description "npm test" -Command { npm --prefix $TargetRepo run test }
      Invoke-CheckedCommand -Description "npm build" -Command { npm --prefix $TargetRepo run build }
    }

    Invoke-CheckedCommand -Description "git diff --check" -Command { git -C $TargetRepo diff --check }
  }

  if (-not $SkipCommit) {
    git -C $TargetRepo add .
    if ($LASTEXITCODE -ne 0) {
      throw "git add failed."
    }

    $diffExit = 0
    git -C $TargetRepo diff --cached --quiet
    $diffExit = $LASTEXITCODE
    if ($diffExit -eq 0) {
      Write-Host "No import changes to commit."
    } elseif ($diffExit -eq 1) {
      git -C $TargetRepo commit -m "Import Baytech Genesis source" -m "Source: $SourceRepo@$sourceCommit"
      if ($LASTEXITCODE -ne 0) {
        throw "git commit failed."
      }
    } else {
      throw "git diff --cached --quiet failed with exit code $diffExit."
    }
  }

  Write-Host "Import complete."
} finally {
  if ($snapshotCreated) {
    git -C $SourceRepo worktree remove --force $snapshotRepo | Out-Null
  }

  if (Test-Path -LiteralPath $snapshotRepo) {
    Remove-Item -LiteralPath $snapshotRepo -Recurse -Force
  }
}
