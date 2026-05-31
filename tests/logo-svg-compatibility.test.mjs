import { readFile } from 'node:fs/promises'
import test from 'node:test'
import assert from 'node:assert/strict'

const logoFiles = [
  'src/assets/baytech-logo.svg',
  'src/assets/baytech-logo-mark.svg',
  'public/assets/baytech-logo.svg',
  'public/assets/baytech-logo-mark.svg',
]

for (const file of logoFiles) {
  test(`${file} uses direct vector paths for Safari-safe rendering`, async () => {
    const svg = await readFile(file, 'utf8')

    assert.match(svg, /<path\b/, 'logo SVG should contain direct path geometry')
    assert.doesNotMatch(svg, /<mask\b/i, 'logo SVG should not depend on SVG masks')
    assert.doesNotMatch(svg, /<image\b/i, 'logo SVG should not embed raster image masks')
    assert.doesNotMatch(svg, /<symbol\b/i, 'logo SVG should not require external <use> symbol clones')
    assert.doesNotMatch(svg, /base64/i, 'logo SVG should not embed base64 raster payloads')
  })
}

test('site logo markup does not use external SVG symbol references', async () => {
  const files = [
    'src/main.js',
    'src/pages/home.js',
  ]

  for (const file of files) {
    const source = await readFile(file, 'utf8')
    assert.doesNotMatch(
      source,
      /href="\/assets\/baytech-logo(?:-mark)?\.svg#/,
      `${file} should not render Baytech logos through external SVG <use> references`,
    )
    assert.doesNotMatch(
      source,
      /<img[^>]+src="\/assets\/baytech-logo(?:-mark)?\.svg"/,
      `${file} should keep Baytech SVGs inline so logo colors inherit from site CSS`,
    )
  }
})
