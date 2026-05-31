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
const expectedGpuSystems = [
  {
    name: 'Nvidia H100',
    workloads: 'Rendering, inference',
    specs: [
      { label: 'CPU', value: 'Intel 8468 48C 2.1GHz * 2' },
      { label: 'Mem', value: '64GB 4800MHz * 32' },
      { label: 'Data', value: '3.84TB * 2' },
      { label: 'Network', value: '400G' },
    ],
  },
  {
    name: 'Nvidia H200',
    workloads: 'Rendering, inference',
    specs: [
      { label: 'CPU', value: 'Intel 8558 48C 2.1GHz * 2' },
      { label: 'Mem', value: '64GB 5600MHz * 32' },
      { label: 'Data', value: '3.84TB * 4' },
      { label: 'Network', value: '400G' },
    ],
  },
  {
    name: 'Nvidia B200',
    workloads: 'Training, rendering, inference',
    specs: [
      { label: 'CPU', value: 'Intel 6960P 72C 2.7GHz * 2' },
      { label: 'Mem', value: '128GB 6400MHz * 16' },
      { label: 'Data', value: '3.84TB * 8' },
      { label: 'Network', value: '400G' },
    ],
  },
  {
    name: 'Nvidia B300',
    workloads: 'Training, rendering, inference',
    specs: [
      { label: 'CPU', value: 'Intel 6776P 64C 2.3GHz' },
      { label: 'Mem', value: '96GB 6400MHz * 32' },
      { label: 'Data', value: '3.84TB * 8' },
      { label: 'Network', value: '800G' },
    ],
  },
  {
    name: 'AMD MI350X',
    workloads: 'Training, rendering, inference',
    specs: [
      { label: 'CPU', value: 'EPYC 9575F 64C 3.3GHz' },
      { label: 'Mem', value: '128GB 64MHz * 24' },
      { label: 'Data', value: '3.84TB * 3' },
      { label: 'Network', value: '800G' },
    ],
  },
  {
    name: 'Nvidia RTX Pro 6000',
    workloads: 'Inference',
    specs: [
      { label: 'CPU', value: 'Intel 6740P 48C 2.1GHz' },
      { label: 'Mem', value: '64GB 5600MHz * 16' },
      { label: 'Data', value: '3.84TB * 8' },
      { label: 'Network', value: '400G' },
    ],
  },
]

function escapedPattern(text) {
  return new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
}

function gpuSystemBlock(name) {
  const nameToken = `name: '${name}'`
  const start = gpuPageSource.indexOf(nameToken)
  assert.notEqual(start, -1, `${name} source object is missing`)

  const nextSystemStarts = expectedGpuSystems
    .map((system) => gpuPageSource.indexOf(`name: '${system.name}'`, start + nameToken.length))
    .filter((index) => index !== -1)
  const end = nextSystemStarts.length > 0 ? Math.min(...nextSystemStarts) : gpuPageSource.indexOf(']', start)

  assert.notEqual(end, -1, `${name} source object end is missing`)
  return gpuPageSource.slice(start, end)
}

function specPairPattern({ label, value }) {
  const labelSource = `label: '${label}'`
  const valueSource = `value: '${value}'`
  const noObjectBoundary = '[^{}]*?'

  return new RegExp(
    `\\{${noObjectBoundary}${escapedPattern(labelSource).source}${noObjectBoundary}${escapedPattern(valueSource).source}${noObjectBoundary}\\}` +
      `|\\{${noObjectBoundary}${escapedPattern(valueSource).source}${noObjectBoundary}${escapedPattern(labelSource).source}${noObjectBoundary}\\}`,
  )
}

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

test('GPU Cloud page presents the approved configurable SKU rows', () => {
  assert.match(gpuPageSource, /export function renderGpuCloud/)

  for (const system of expectedGpuSystems) {
    const systemBlock = gpuSystemBlock(system.name)

    assert.match(systemBlock, escapedPattern(`name: '${system.name}'`))
    assert.match(systemBlock, escapedPattern(`workloads: '${system.workloads}'`))
    for (const spec of system.specs) {
      assert.match(systemBlock, specPairPattern(spec))
    }
  }

  assert.equal((gpuPageSource.match(/name: '/g) || []).length, expectedGpuSystems.length)
  assert.match(gpuPageSource, /Configurable/)
  assert.match(gpuPageSource, /Request for availability/)
  assert.match(gpuPageSource, /gpuSystems/)
  assert.match(gpuPageSource, /gpu-system-row/)
  assert.match(gpuPageSource, /\/contact/)
  assert.doesNotMatch(gpuPageSource, /Request GPU Availability|Request availability/)
  assert.doesNotMatch(gpuPageSource, /Deploy now|Pricing|Checkout|Buy now|# GPUs|Price per GPU|inventory|quantity|notify/i)
})

test('homepage, Solutions page, and footer link users to GPU Cloud', () => {
  assert.match(homeSource, /href="\/gpu-cloud"/)
  assert.match(solutionsSource, /href="\/gpu-cloud"/)
  assert.match(mainSource, /href="\/gpu-cloud"/)
  assert.match(homeSource, /configurable Nvidia and AMD GPU systems/i)
  assert.match(solutionsSource, /configurable Nvidia and AMD GPU systems/i)
  assert.doesNotMatch(homeSource, /H100, H200, and RTX Pro 6000/)
  assert.doesNotMatch(solutionsSource, /H100, H200, and RTX Pro 6000/)
})

test('GPU Cloud styles are scoped and responsive', () => {
  assert.match(styleSource, /\.page-gpu-cloud/)
  assert.match(styleSource, /\.gpu-card/)
  assert.match(styleSource, /\.gpu-system-grid/)
  assert.match(styleSource, /\.gpu-system-row/)
  assert.match(styleSource, /\.gpu-system-specs/)
  assert.match(styleSource, /\.gpu-system-configurable/)
  assert.match(styleSource, /\.gpu-system-action/)
  assert.match(styleSource, /\.page-gpu-cloud \.page-header-actions/)
  assert.match(gpuPageSource, /class="solutions-grid gpu-card-grid"/)
  assert.match(gpuPageSource, /class="solutions-grid gpu-trust-grid"/)
  assert.match(styleSource, /@media \(max-width:\s*768px\)[\s\S]*\.page-gpu-cloud \.page-header-actions/)
  assert.doesNotMatch(styleSource, /\.gpu-cloud-hero|\.gpu-cloud-visual|\.gpu-spec-list/)
  assert.doesNotMatch(styleSource, /\.gpu-(?:[\w-]*(?:marketplace|pricing|quantity)[\w-]*)/)
})

test('GPU Cloud page follows peer subpage header, card, button, and CTA rhythm', () => {
  assert.match(styleSource, /\.page-content > \.page-gpu-cloud/)
  assert.match(gpuPageSource, /pageHeader\.className = 'page-header'/)
  assert.match(gpuPageSource, /<h1>GPU Cloud<\/h1>/)
  assert.doesNotMatch(gpuPageSource, /gpu-cloud-hero|gpu-cloud-visual|gpu-visual-/)
  assert.match(gpuPageSource, /class="gpu-card solution-card card-elevated"/)
  assert.match(gpuPageSource, /class="solution-tag"/)
  assert.match(gpuPageSource, /class="gpu-system-specs"/)
  assert.match(gpuPageSource, /class="btn btn-outlined gpu-system-action">Request for availability/)
  assert.match(gpuPageSource, /cta\.className = 'cta-section animate-on-scroll'/)
  assert.match(mainSource, /href="\/gpu-cloud" class="sheet-link"[\s\S]*GPU Cloud/)
})
