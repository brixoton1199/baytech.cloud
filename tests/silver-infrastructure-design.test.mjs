import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { test } from 'node:test'
import { inflateSync } from 'node:zlib'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')
const processedHeroMap = new URL('../public/assets/ireland-map-hero-linework.png', import.meta.url)

function readPngStats(buffer) {
  assert.equal(buffer.toString('hex', 0, 8), '89504e470d0a1a0a')

  let offset = 8
  let width = 0
  let height = 0
  let colorType = 0
  const idatChunks = []

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset)
    const type = buffer.toString('ascii', offset + 4, offset + 8)
    const dataStart = offset + 8
    const dataEnd = dataStart + length
    const data = buffer.subarray(dataStart, dataEnd)

    if (type === 'IHDR') {
      width = data.readUInt32BE(0)
      height = data.readUInt32BE(4)
      assert.equal(data[8], 8)
      colorType = data[9]
    } else if (type === 'IDAT') {
      idatChunks.push(data)
    } else if (type === 'IEND') {
      break
    }

    offset = dataEnd + 4
  }

  assert.equal(colorType, 6)

  const bytesPerPixel = 4
  const stride = width * bytesPerPixel
  const raw = inflateSync(Buffer.concat(idatChunks))
  let rawOffset = 0
  let maxAlpha = 0
  let visiblePixels = 0
  let brightGreenPixels = 0
  let previousRow = Buffer.alloc(stride)

  for (let y = 0; y < height; y += 1) {
    const filter = raw[rawOffset]
    rawOffset += 1
    const row = Buffer.from(raw.subarray(rawOffset, rawOffset + stride))
    rawOffset += stride

    for (let x = 0; x < stride; x += 1) {
      const left = x >= bytesPerPixel ? row[x - bytesPerPixel] : 0
      const up = previousRow[x]
      const upLeft = x >= bytesPerPixel ? previousRow[x - bytesPerPixel] : 0

      if (filter === 1) {
        row[x] = (row[x] + left) & 0xff
      } else if (filter === 2) {
        row[x] = (row[x] + up) & 0xff
      } else if (filter === 3) {
        row[x] = (row[x] + Math.floor((left + up) / 2)) & 0xff
      } else if (filter === 4) {
        const p = left + up - upLeft
        const pa = Math.abs(p - left)
        const pb = Math.abs(p - up)
        const pc = Math.abs(p - upLeft)
        const predictor = pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft
        row[x] = (row[x] + predictor) & 0xff
      }
    }

    for (let x = 0; x < stride; x += bytesPerPixel) {
      const red = row[x]
      const green = row[x + 1]
      const alpha = row[x + 3]
      maxAlpha = Math.max(maxAlpha, alpha)
      if (alpha > 20) {
        visiblePixels += 1
        if (red < 90 && green > 180) brightGreenPixels += 1
      }
    }

    previousRow = row
  }

  return {
    width,
    height,
    maxAlpha,
    visiblePixels,
    brightGreenRatio: brightGreenPixels / visiblePixels,
  }
}

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
  assert.match(styleSource, /\.hero-with-map \.map-glow-main[\s\S]*opacity:\s*0\.7;/)
})

test('desktop hero starts flush with the viewport while preserving first-screen composition', () => {
  assert.match(styleSource, /\.hero-with-map\s*{[\s\S]*min-height:\s*100svh;/)
  assert.match(styleSource, /\.hero-with-map\s*{[\s\S]*margin:\s*calc\(-1 \* var\(--space-6\)\) calc\(-1 \* var\(--space-6\)\) 0;/)
  assert.match(styleSource, /\.hero-with-map \.hero-split-container\s*{[\s\S]*min-height:\s*calc\(100svh - 128px\);/)
  assert.doesNotMatch(styleSource, /\.hero-with-map\s*{[\s\S]{0,260}min-height:\s*calc\(100svh - 24px\);/)
})

test('processed hero map asset uses restrained modern linework instead of neon-heavy opacity', async () => {
  const stats = readPngStats(await readFile(processedHeroMap))

  assert.deepEqual({ width: stats.width, height: stats.height }, { width: 1200, height: 1536 })
  assert.ok(stats.visiblePixels > 50000)
  assert.ok(stats.maxAlpha <= 220)
  assert.ok(stats.brightGreenRatio < 0.18)
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

test('tablet navigation rail expands as an overlay instead of staying collapsed', () => {
  assert.match(styleSource, /@media \(max-width:\s*1200px\)[\s\S]*\.nav-rail\.expanded,\s*\.nav-rail:hover\s*{[\s\S]*width:\s*min\(var\(--rail-width-expanded\),\s*calc\(100vw - var\(--space-6\)\)\);/)
  assert.doesNotMatch(styleSource, /@media \(max-width:\s*1200px\)[\s\S]{0,260}\.nav-rail\.expanded,\s*\.nav-rail:hover\s*{[\s\S]{0,120}width:\s*var\(--rail-width-collapsed\);/)
})

test('collapsed navigation rail centers icons without hidden label gap', () => {
  assert.match(styleSource, /\.rail-item\s*{[\s\S]*gap:\s*0;/)
  assert.match(styleSource, /\.nav-rail\.expanded \.rail-item,\s*\.nav-rail:hover \.rail-item\s*{[\s\S]*gap:\s*var\(--space-3\);/)
  assert.match(styleSource, /\.rail-fab\s*{[\s\S]*gap:\s*0;/)
  assert.match(styleSource, /\.nav-rail\.expanded \.rail-fab,\s*\.nav-rail:hover \.rail-fab\s*{[\s\S]*gap:\s*var\(--space-2\);/)
})
