param(
  [string]$SourceRepo = "H:\brep\baytech\baytech-genesis",
  [string]$SourceRef = "main",
  [string]$BranchName,
  [switch]$UseCurrentBranch,
  [switch]$SkipInstall,
  [switch]$SkipValidation,
  [switch]$SkipCommit,
  [switch]$Push,
  [switch]$CreatePr
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

function Assert-SecretValue {
  param(
    [object]$Secret,
    [string]$Name,
    [string]$Expected
  )

  $property = $Secret.PSObject.Properties[$Name]
  if (-not $property -or $property.Value -ne $Expected) {
    throw ".secret.json must set $Name to '$Expected'."
  }
}

function Read-GitHubSecret {
  param([string]$TargetRoot)

  $secretPath = Join-Path $TargetRoot ".secret.json"
  if (-not (Test-Path -LiteralPath $secretPath)) {
    throw "GitHub operations require .secret.json in $TargetRoot."
  }

  $secret = Get-Content -Raw -LiteralPath $secretPath | ConvertFrom-Json
  Assert-SecretValue -Secret $secret -Name 'github_repo' -Expected 'baytech.cloud'

  if (-not $secret.github_owner) {
    throw ".secret.json must set github_owner."
  }

  if (-not $secret.github_pat) {
    throw ".secret.json must set github_pat."
  }

  return $secret
}

function Invoke-GitWithPat {
  param(
    [string]$Repo,
    [object]$Secret,
    [string[]]$GitArgs
  )

  $basic = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("x-access-token:$($Secret.github_pat)"))
  git -C $Repo -c "http.https://github.com/.extraheader=AUTHORIZATION: basic $basic" @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed with exit code $LASTEXITCODE."
  }
}

$TargetRepo = Resolve-FullPath (Join-Path $PSScriptRoot "..")
$SourceRepo = Resolve-FullPath $SourceRepo

if (-not $BranchName) {
  $BranchName = "zhiyi/import-genesis-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
}

if ($CreatePr) {
  $Push = $true
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
  ".secret.json",
  ".secret.example.json",
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

  if ($Push) {
    $secret = Read-GitHubSecret -TargetRoot $TargetRepo
    $repoUrl = "https://github.com/$($secret.github_owner)/$($secret.github_repo).git"
    Invoke-GitWithPat -Repo $TargetRepo -Secret $secret -GitArgs @("push", "-u", $repoUrl, "HEAD:$BranchName")
  }

  if ($CreatePr) {
    $secret = Read-GitHubSecret -TargetRoot $TargetRepo
    $previousGhToken = $env:GH_TOKEN
    try {
      $env:GH_TOKEN = $secret.github_pat
      gh pr create `
        --repo "$($secret.github_owner)/$($secret.github_repo)" `
        --base main `
        --head $BranchName `
        --title "Import Baytech Genesis source" `
        --body "Imports baytech-genesis source ref $SourceRef at $sourceCommit into the publishing repository. Validation is performed locally by this script before PR creation."
      if ($LASTEXITCODE -ne 0) {
        throw "gh pr create failed."
      }
    } finally {
      $env:GH_TOKEN = $previousGhToken
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
