import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const indexSource = await readFile(new URL('../index.html', import.meta.url), 'utf8')

function readIcoDirectory(buffer) {
  const count = buffer.readUInt16LE(4)
  const entries = []

  for (let index = 0; index < count; index += 1) {
    const entryOffset = 6 + index * 16
    entries.push({
      width: buffer[entryOffset] || 256,
      height: buffer[entryOffset + 1] || 256,
      bitDepth: buffer.readUInt16LE(entryOffset + 6),
      byteLength: buffer.readUInt32LE(entryOffset + 8),
      imageOffset: buffer.readUInt32LE(entryOffset + 12),
    })
  }

  return entries
}

function readLargestDibIcon(buffer) {
  const entry = readIcoDirectory(buffer).toSorted((a, b) => b.width - a.width)[0]
  const image = buffer.subarray(entry.imageOffset, entry.imageOffset + entry.byteLength)

  assert.equal(image.readUInt32LE(0), 40, 'ICO image should use a BITMAPINFOHEADER DIB')
  assert.equal(entry.bitDepth, 32, 'ICO image should retain alpha with 32-bit pixels')

  const width = image.readInt32LE(4)
  const storedHeight = image.readInt32LE(8)
  const height = storedHeight / 2
  const pixelOffset = 40

  assert.equal(width, entry.width)
  assert.equal(height, entry.height)

  function pixelAt(x, y) {
    const bottomUpY = height - 1 - y
    const offset = pixelOffset + (bottomUpY * width + x) * 4

    return {
      b: image[offset],
      g: image[offset + 1],
      r: image[offset + 2],
      a: image[offset + 3],
    }
  }

  return { entry, pixelAt }
}

test('site head explicitly points browsers at the root ICO favicon', () => {
  assert.match(
    indexSource,
    /<link rel="icon" type="image\/x-icon" href="\/favicon\.ico">/,
  )
  assert.doesNotMatch(indexSource, /rel="apple-touch-icon"/)
})

test('root favicon is a valid ICO container', async () => {
  const favicon = await readFile(new URL('../public/favicon.ico', import.meta.url))

  assert.equal(favicon.readUInt16LE(0), 0, 'ICO reserved field should be zero')
  assert.equal(favicon.readUInt16LE(2), 1, 'ICO type should be image icon')
  assert.ok(favicon.readUInt16LE(4) >= 1, 'ICO should contain at least one image')
})

test('root favicon keeps the folded logo mark as black artwork on transparent background', async () => {
  const favicon = await readFile(new URL('../public/favicon.ico', import.meta.url))
  const { entry, pixelAt } = readLargestDibIcon(favicon)
  const corners = [
    pixelAt(0, 0),
    pixelAt(entry.width - 1, 0),
    pixelAt(0, entry.height - 1),
    pixelAt(entry.width - 1, entry.height - 1),
  ]
  const sampledPixels = []

  for (let y = 0; y < entry.height; y += 1) {
    for (let x = 0; x < entry.width; x += 1) {
      const pixel = pixelAt(x, y)
      if (pixel.a > 128) {
        sampledPixels.push(pixel)
      }
    }
  }

  assert.ok(corners.every((pixel) => pixel.a === 0), 'favicon corners should stay transparent')
  assert.ok(sampledPixels.length > 0, 'favicon should contain visible logo pixels')
  assert.ok(
    sampledPixels.every((pixel) => pixel.r <= 40 && pixel.g <= 40 && pixel.b <= 40),
    'visible favicon artwork should be black, matching the collapsed rail mark',
  )
})
