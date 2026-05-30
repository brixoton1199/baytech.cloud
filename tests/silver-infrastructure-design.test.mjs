import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { test } from 'node:test'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')
const processedHeroMap = new URL('../public/assets/ireland-map-hero-linework.png', import.meta.url)

test('homepage keeps the original map hero structure while using the processed hero map asset', async () => {
  const assetInfo = await stat(processedHeroMap)

  assert.ok(assetInfo.size > 0)
  assert.match(homeSource, /hero-with-map/)
  assert.match(homeSource, /hero-map-container/)
  assert.match(homeSource, /map-glow-wrapper/)
  assert.match(homeSource, /ireland-map-hero-linework\.png/)
  assert.doesNotMatch(homeSource, /\/assets\/ireland-map\.png/)
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
  assert.doesNotMatch(styleSource, /\.hero-with-map[\s\S]{0,900}invert\(1\)/)
  assert.doesNotMatch(styleSource, /\.hero-infrastructure-panel/)
})

test('hero map is integrated as a sharper processed right-side texture', () => {
  assert.match(styleSource, /linear-gradient\(180deg,\s*#fbfcf7 0%,\s*#f8faf4 52%,\s*#f4f8ef 100%\)/)
  assert.match(styleSource, /\.hero-with-map[\s\S]*linear-gradient\(135deg,\s*#fbfcf7 0%,\s*#f8faf4 52%,\s*#f4f8ef 100%\)/)
  assert.match(styleSource, /\.hero-with-map::before\s*{\s*display:\s*none;/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-wrapper::after\s*{\s*display:\s*none;/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*position:\s*absolute;[\s\S]*right:\s*clamp\(-84px,\s*-5vw,\s*-48px\);/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*top:\s*0;/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*bottom:\s*0;/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*display:\s*flex;/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*transform:\s*none;/)
  assert.match(styleSource, /\.hero-with-map \.hero-map-container[\s\S]*width:\s*min\(54vw,\s*700px\);/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-main[\s\S]*filter:\s*none;/)
  assert.match(styleSource, /\.hero-with-map \.map-glow-main[\s\S]*opacity:\s*0\.58;/)
})

test('desktop hero keeps a first-screen composition before the services content', () => {
  assert.match(styleSource, /\.hero-with-map\s*{[\s\S]*min-height:\s*calc\(100svh - 24px\);/)
  assert.match(styleSource, /\.hero-with-map \.hero-split-container\s*{[\s\S]*min-height:\s*calc\(100svh - 128px\);/)
})

test('mobile hero constrains logo, title, and actions to avoid clipping', () => {
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.hero-with-map \.hero-logo-image\s*{[\s\S]*width:\s*min\(72vw,\s*280px\);/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.hero-with-map \.hero-content-left h1\s*{[\s\S]*max-width:\s*280px;/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.hero-supporting-title\s*{[\s\S]*width:\s*min\(100%,\s*260px\);/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.hero-supporting-title\s*{[\s\S]*white-space:\s*normal;/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.hero-with-map \.hero-actions\s*{[\s\S]*width:\s*min\(100%,\s*280px\);/)
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
