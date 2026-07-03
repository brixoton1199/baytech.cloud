import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const scriptSource = await readFile(
  new URL('../tools/import-from-baytech-genesis.ps1', import.meta.url),
  'utf8',
)

test('import tool is driven from baytech.cloud and creates a PR branch', () => {
  assert.match(scriptSource, /\$TargetRepo\s*=\s*Resolve-FullPath\s*\(Join-Path \$PSScriptRoot "\.\."\)/)
  assert.match(scriptSource, /git -C \$TargetRepo switch -c \$BranchName/)
  assert.match(scriptSource, /zhiyi\/import-genesis-/)
  assert.doesNotMatch(scriptSource, /HEAD:main/)
})

test('import tool preserves publishing-repo local files and tooling', () => {
  for (const preservedPath of ['.secret.json', '.secret.example.json', 'AGENTS.md', 'tools', '.github']) {
    assert.match(scriptSource, new RegExp(`"${preservedPath.replace('.', '\\.')}"`))
  }

  const pathsToCopyBlock = scriptSource.match(/\$pathsToCopy = @\([\s\S]*?\r?\n\)/)?.[0] ?? ''

  assert.match(scriptSource, /Remove-TargetPath -TargetRoot \$TargetRepo -RelativePath \$relativePath/)
  assert.doesNotMatch(pathsToCopyBlock, /"tools"/)
})

test('import tool uses source worktree snapshots and .secret.json for GitHub operations', () => {
  assert.match(scriptSource, /git -C \$SourceRepo worktree add --detach \$snapshotRepo \$sourceCommit/)
  assert.match(scriptSource, /-Name 'github_repo' -Expected 'baytech\.cloud'/)
  assert.match(scriptSource, /\$env:GH_TOKEN = \$secret\.github_pat/)
  assert.match(scriptSource, /gh pr create/)
  assert.match(scriptSource, /AUTHORIZATION: basic \$basic/)
})
