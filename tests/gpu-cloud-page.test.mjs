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

test('desktop and mobile app shell prioritize GPU Cloud after Home', () => {
  const desktopHomeIndex = mainSource.indexOf('class="rail-item" data-nav="home"')
  const desktopGpuIndex = mainSource.indexOf('class="rail-item" data-nav="gpu-cloud"')
  const desktopServicesIndex = mainSource.indexOf('class="rail-item" data-nav="services"')
  const mobileHomeIndex = mainSource.indexOf('class="mobile-nav-item" data-nav="home"')
  const mobileGpuIndex = mainSource.indexOf('class="mobile-nav-item" data-nav="gpu-cloud"')
  const mobileServicesIndex = mainSource.indexOf('class="mobile-nav-item" data-nav="services"')

  assert.ok(desktopHomeIndex < desktopGpuIndex)
  assert.ok(desktopGpuIndex < desktopServicesIndex)
  assert.ok(mobileHomeIndex < mobileGpuIndex)
  assert.ok(mobileGpuIndex < mobileServicesIndex)
  const mobileGpuBlock = mainSource.slice(mobileGpuIndex, mobileServicesIndex)

  assert.match(mainSource, /<span class="rail-item-label">GPU Cloud<\/span>/)
  assert.match(mobileGpuBlock, /aria-label="GPU Cloud"/)
  assert.match(mobileGpuBlock, /<span>GPUs<\/span>/)
  assert.doesNotMatch(mobileGpuBlock, /<span>GPU Cloud<\/span>/)
  assert.match(mainSource, /'\/gpu-cloud': 'gpu-cloud'/)
  assert.doesNotMatch(mainSource, /mobile-nav-item" data-nav="about"/)
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
  assert.match(styleSource, /\.gpu-card/)
  assert.match(styleSource, /\.page-gpu-cloud \.page-header-actions/)
  assert.match(gpuPageSource, /class="solutions-grid gpu-card-grid"/)
  assert.match(gpuPageSource, /class="solutions-grid gpu-trust-grid"/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.page-gpu-cloud \.page-header-actions/)
  assert.doesNotMatch(styleSource, /\.gpu-cloud-hero|\.gpu-cloud-visual|\.gpu-spec-list/)
})

test('GPU Cloud page follows peer subpage header, card, button, and CTA rhythm', () => {
  assert.match(styleSource, /\.page-content > \.page-gpu-cloud/)
  assert.match(gpuPageSource, /pageHeader\.className = 'page-header'/)
  assert.match(gpuPageSource, /<h1>GPU Cloud<\/h1>/)
  assert.doesNotMatch(gpuPageSource, /gpu-cloud-hero|gpu-cloud-visual|gpu-visual-/)
  assert.match(gpuPageSource, /class="gpu-card solution-card card-elevated"/)
  assert.match(gpuPageSource, /class="solution-tag"/)
  assert.match(gpuPageSource, /class="feature-list"/)
  assert.match(gpuPageSource, /class="btn btn-outlined">Request availability/)
  assert.match(gpuPageSource, /cta\.className = 'cta-section animate-on-scroll'/)
  assert.match(mainSource, /href="\/gpu-cloud" class="sheet-link"[\s\S]*GPU Cloud/)
})
