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
  for (const preservedPath of ['AGENTS.md', 'README.md', 'docs', 'tools', '.github']) {
    assert.match(scriptSource, new RegExp(`"${preservedPath.replace('.', '\\.')}"`))
  }

  const pathsToCopyBlock = scriptSource.match(/\$pathsToCopy = @\([\s\S]*?\r?\n\)/)?.[0] ?? ''

  assert.match(scriptSource, /Remove-TargetPath -TargetRoot \$TargetRepo -RelativePath \$relativePath/)
  assert.doesNotMatch(pathsToCopyBlock, /"tools"/)
})

test('import tool uses source worktree snapshots without publishing to GitHub', () => {
  assert.match(scriptSource, /git -C \$SourceRepo worktree add --detach \$snapshotRepo \$sourceCommit/)
  assert.doesNotMatch(scriptSource, /\[switch\]\$Push/)
  assert.doesNotMatch(scriptSource, /\[switch\]\$CreatePr/)
  assert.doesNotMatch(scriptSource, /\.secret\.json/)
  assert.doesNotMatch(scriptSource, /\$env:GH_TOKEN/)
  assert.doesNotMatch(scriptSource, /gh pr create/)
  assert.doesNotMatch(scriptSource, /AUTHORIZATION: basic/)
})
