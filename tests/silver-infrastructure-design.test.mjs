import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')

test('homepage keeps the original map hero structure while shifting to silver colors', () => {
  assert.match(homeSource, /hero-with-map/)
  assert.match(homeSource, /hero-map-container/)
  assert.match(homeSource, /map-glow-wrapper/)
  assert.match(homeSource, /ireland-map\.png/)
  assert.doesNotMatch(homeSource, /hero-infrastructure-panel/)
  assert.doesNotMatch(homeSource, /infrastructure-orbit-card/)
  assert.match(homeSource, /href="\/contact" class="btn btn-filled"/)
  assert.match(homeSource, /href="\/services" class="btn btn-outlined"/)
})

test('light theme tokens define white silver surfaces with restrained Baytech green accents', () => {
  assert.match(styleSource, /--md-surface:\s*#fbfcfe;/)
  assert.match(styleSource, /--md-surface-container:\s*#f7fafd;/)
  assert.match(styleSource, /--md-on-surface:\s*#202225;/)
  assert.match(styleSource, /--baytech-silver-grid:\s*rgba\(87,\s*98,\s*115,\s*0\.08\);/)
  assert.match(styleSource, /--baytech-signal:\s*#26b86a;/)
  assert.match(styleSource, /\.hero-with-map/)
  assert.match(styleSource, /\.hero-map-container/)
  assert.match(styleSource, /\.map-glow-wrapper::after/)
  assert.match(styleSource, /\.map-glow-main/)
  assert.match(styleSource, /invert\(1\)/)
  assert.doesNotMatch(styleSource, /\.hero-infrastructure-panel/)
})

test('hero map fades into a lower-gray page background', () => {
  assert.match(styleSource, /linear-gradient\(180deg,\s*#ffffff 0%,\s*#fbfdff 54%,\s*#f7fbfe 100%\)/)
  assert.match(styleSource, /\.hero-with-map[\s\S]*linear-gradient\(135deg,\s*#ffffff 0%,\s*#fbfdff 52%,\s*#f8fbfe 100%\)/)
  assert.match(styleSource, /\.hero-with-map::after[\s\S]*rgba\(251,\s*253,\s*255,\s*0\.94\)/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-wrapper::after[\s\S]*rgba\(255,\s*255,\s*255,\s*0\.98\)/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-main[\s\S]*opacity:\s*0\.46;/)
})

test('app shell keeps sensitive business contact content unchanged', () => {
  assert.match(mainSource, /77 Camden Street Lower,/)
  assert.match(mainSource, /support@baytech\.cloud/)
  assert.match(mainSource, /\+44 7886 066968/)
})
