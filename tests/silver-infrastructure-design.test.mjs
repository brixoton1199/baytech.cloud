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
  assert.match(styleSource, /--md-surface:\s*#f8faf4;/)
  assert.match(styleSource, /--md-surface-container:\s*#fbfcf7;/)
  assert.match(styleSource, /--md-on-surface:\s*#202225;/)
  assert.match(styleSource, /--baytech-silver-grid:\s*rgba\(84,\s*113,\s*92,\s*0\.045\);/)
  assert.match(styleSource, /--baytech-signal:\s*#26b86a;/)
  assert.match(styleSource, /\.hero-with-map/)
  assert.match(styleSource, /\.hero-map-container/)
  assert.match(styleSource, /\.map-glow-wrapper::after/)
  assert.match(styleSource, /\.map-glow-main/)
  assert.match(styleSource, /invert\(1\)/)
  assert.doesNotMatch(styleSource, /\.hero-infrastructure-panel/)
})

test('hero map is integrated as a low-contrast right-side texture', () => {
  assert.match(styleSource, /linear-gradient\(180deg,\s*#fbfcf7 0%,\s*#f8faf4 52%,\s*#f4f8ef 100%\)/)
  assert.match(styleSource, /\.hero-with-map[\s\S]*linear-gradient\(135deg,\s*#fbfcf7 0%,\s*#f8faf4 52%,\s*#f4f8ef 100%\)/)
  assert.match(styleSource, /\.hero-with-map::before[\s\S]*radial-gradient\(ellipse at 74% 38%,\s*rgba\(38,\s*184,\s*106,\s*0\.08\),\s*transparent 62%\)/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*position:\s*absolute;[\s\S]*right:\s*clamp\(-220px,\s*-14vw,\s*-120px\);/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-main[\s\S]*opacity:\s*0\.32;/)
})

test('bright theme removes center-line technical crosshair textures', () => {
  assert.match(styleSource, /\.services-section::before,\s*\.cta-section::before\s*{\s*display:\s*none;/)
  assert.doesNotMatch(styleSource, /\.hero-with-map::before[\s\S]{0,260}linear-gradient\(90deg,\s*rgba\(87,\s*98,\s*115/)
  assert.doesNotMatch(styleSource, /\.hero-with-map \.map-glow-wrapper::before[\s\S]{0,300}linear-gradient\(90deg,\s*rgba\(87,\s*98,\s*115/)
})

test('app shell keeps sensitive business contact content unchanged', () => {
  assert.match(mainSource, /77 Camden Street Lower,/)
  assert.match(mainSource, /support@baytech\.cloud/)
  assert.match(mainSource, /\+44 7886 066968/)
})
