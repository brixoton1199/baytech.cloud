import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

async function readSource(path) {
  try {
    return await readFile(new URL(path, import.meta.url), 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') return ''
    throw error
  }
}

const routerSource = await readSource('../src/router.js')
const mainSource = await readSource('../src/main.js')
const homeSource = await readSource('../src/pages/home.js')
const solutionsSource = await readSource('../src/pages/solutions.js')
const styleSource = await readSource('../src/style.css')
const gpuPageSource = await readSource('../src/pages/gpu-cloud.js')

test('router registers the GPU Cloud page route and breadcrumb name', () => {
  assert.match(routerSource, /import \{ renderGpuCloud \} from '\.\/pages\/gpu-cloud\.js'/)
  assert.match(routerSource, /'\/gpu-cloud': renderGpuCloud/)
  assert.match(routerSource, /'\/gpu-cloud\.html': renderGpuCloud/)
  assert.match(routerSource, /'\/gpu-cloud': 'GPU Cloud'/)
})

test('desktop app shell exposes GPU Cloud after Solutions without adding it to mobile nav', () => {
  assert.match(mainSource, /href="\/solutions" class="rail-item" data-nav="solutions"[\s\S]*href="\/gpu-cloud" class="rail-item" data-nav="gpu-cloud"/)
  assert.match(mainSource, /<span class="rail-item-label">GPU Cloud<\/span>/)
  assert.match(mainSource, /'\/gpu-cloud': 'gpu-cloud'/)
  assert.doesNotMatch(mainSource, /mobile-nav-item" data-nav="gpu-cloud"/)
})

test('GPU Cloud page presents the approved inquiry-led card list', () => {
  assert.match(gpuPageSource, /export function renderGpuCloud/)
  assert.match(gpuPageSource, /name: 'H100'/)
  assert.match(gpuPageSource, /name: 'H200'/)
  assert.match(gpuPageSource, /name: 'RTX Pro 6000'/)
  assert.match(gpuPageSource, /Request GPU Availability/)
  assert.match(gpuPageSource, /Request availability/)
  assert.match(gpuPageSource, /\/contact/)
  assert.doesNotMatch(gpuPageSource, /Deploy now|Pricing|Checkout|Buy now|real-time inventory/i)
})

test('homepage, Solutions page, and footer link users to GPU Cloud', () => {
  assert.match(homeSource, /href="\/gpu-cloud"/)
  assert.match(solutionsSource, /href="\/gpu-cloud"/)
  assert.match(mainSource, /href="\/gpu-cloud"/)
})

test('GPU Cloud styles are scoped and responsive', () => {
  assert.match(styleSource, /\.page-gpu-cloud/)
  assert.match(styleSource, /\.gpu-cloud-hero/)
  assert.match(styleSource, /\.gpu-card-grid/)
  assert.match(styleSource, /\.gpu-card/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.gpu-card-grid/)
})
