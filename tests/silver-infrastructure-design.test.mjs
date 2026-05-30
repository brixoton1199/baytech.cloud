import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')

test('homepage uses the silver infrastructure hero instead of the old map-first hero', () => {
  assert.match(homeSource, /hero-infrastructure-panel/)
  assert.match(homeSource, /infrastructure-orbit-card/)
  assert.match(homeSource, /infrastructure-plane/)
  assert.doesNotMatch(homeSource, /hero-map-container/)
  assert.match(homeSource, /href="\/contact" class="btn btn-filled"/)
  assert.match(homeSource, /href="\/services" class="btn btn-outlined"/)
})

test('light theme tokens define white silver surfaces with restrained Baytech green accents', () => {
  assert.match(styleSource, /--md-surface:\s*#f8fafc;/)
  assert.match(styleSource, /--md-on-surface:\s*#202225;/)
  assert.match(styleSource, /--baytech-silver-grid:\s*rgba\(87,\s*98,\s*115,\s*0\.12\);/)
  assert.match(styleSource, /--baytech-signal:\s*#26b86a;/)
  assert.match(styleSource, /\.hero-infrastructure-panel/)
  assert.match(styleSource, /\.infrastructure-plane/)
})

test('app shell keeps sensitive business contact content unchanged', () => {
  assert.match(mainSource, /77 Camden Street Lower,/)
  assert.match(mainSource, /support@baytech\.cloud/)
  assert.match(mainSource, /\+44 7886 066968/)
})
