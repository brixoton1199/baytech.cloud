// GPU Cloud Page - inquiry-led GPU capacity listing
import { createBreadcrumb } from '../router.js'

const gpuSystems = [
  {
    name: 'Nvidia H100',
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
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
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
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
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
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
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
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
    vendor: 'AMD',
    vendorMark: 'AMD',
    configurable: true,
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
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
    workloads: 'Inference',
    specs: [
      { label: 'CPU', value: 'Intel 6740P 48C 2.1GHz' },
      { label: 'Mem', value: '64GB 5600MHz * 16' },
      { label: 'Data', value: '3.84TB * 8' },
      { label: 'Network', value: '400G' },
    ],
  },
]

const trustItems = [
  {
    title: 'Architecture guidance',
    text: 'Translate model, data, and team needs into a deployment plan before capacity decisions lock you in.',
  },
  {
    title: 'Network and security readiness',
    text: 'Plan secure access, identity boundaries, connectivity, and operational controls around GPU workloads.',
  },
  {
    title: 'Operational planning',
    text: 'Coordinate capacity, observability, automation, and support paths for production AI infrastructure.',
  },
]

const specLabels = {
  Mem: 'Memory',
  Data: 'Local NVMe',
}

function renderSpec(spec) {
  const label = specLabels[spec.label] || spec.label

  return `
    <div class="gpu-system-spec">
      <dt>${label}</dt>
      <dd>${spec.value}</dd>
    </div>
  `
}

// Preserve peer-card source contract: class="gpu-card solution-card card-elevated"
function renderGpuSystem(system) {
  return `
    <article class="gpu-card solution-card card-elevated gpu-system-row">
      <header class="gpu-system-summary">
        <div class="gpu-system-title-line">
          <span class="gpu-system-vendor" aria-hidden="true">${system.vendorMark}</span>
          <div>
            <span class="gpu-system-kicker">GPU system</span>
            <h3>${system.name}</h3>
          </div>
        </div>
        <div class="gpu-system-meta">
          <span class="gpu-system-workloads">${system.workloads}</span>
          ${system.configurable ? '<span class="gpu-system-configurable"><span class="solution-tag">Configurable</span></span>' : ''}
        </div>
      </header>
      <section class="gpu-system-profile" aria-label="${system.name} deployment attributes">
        <div class="gpu-system-profile-header">
          <span>Deployment attributes</span>
          <span>Baseline profile</span>
        </div>
        <dl class="gpu-system-specs">
          ${system.specs.map(renderSpec).join('')}
        </dl>
      </section>
      <aside class="gpu-system-request">
        <div class="gpu-system-request-copy">
          <span class="gpu-system-request-label">Availability</span>
          <span class="gpu-system-request-note">Scoped by workload and deployment window.</span>
        </div>
        <a href="/contact" class="btn btn-outlined gpu-system-action">Request for availability</a>
      </aside>
    </article>
  `
}

export function renderGpuCloud() {
  const container = document.createElement('div')
  container.className = 'page-gpu-cloud'

  const breadcrumb = createBreadcrumb('GPU Cloud')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">AI Infrastructure</p>
    <h1>GPU Cloud</h1>
    <p>Inquiry-led access to configurable Nvidia and AMD GPU systems with architecture, security, and deployment guidance from Baytech.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Discuss GPU capacity</a>
      <a href="/services" class="btn btn-outlined">Discuss Infrastructure</a>
    </div>
  `

  const cardsSection = document.createElement('section')
  cardsSection.className = 'services-section animate-on-scroll'
  cardsSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">GPU Systems</p>
      <h2 class="section-title">Configurable systems for demanding AI workloads</h2>
      <p class="section-subtitle">Compare deployment-ready GPU system profiles by compute host, memory, local NVMe storage, and network fabric, then scope availability with Baytech.</p>
    </div>
    <div class="solutions-grid gpu-card-grid">
      ${gpuSystems.map(renderGpuSystem).join('')}
    </div>
  `

  const trustSection = document.createElement('section')
  trustSection.className = 'services-section animate-on-scroll'
  trustSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Why Baytech</p>
      <h2 class="section-title">GPU infrastructure is more than hardware</h2>
      <p class="section-subtitle">We connect capacity conversations with cloud architecture, security, networking, and operational planning.</p>
    </div>
    <div class="solutions-grid gpu-trust-grid">
      ${trustItems.map((item) => `
        <article class="gpu-trust-card solution-card card-elevated">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `).join('')}
    </div>
  `

  const cta = document.createElement('section')
  cta.className = 'cta-section animate-on-scroll'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Discuss GPU capacity</h2>
      <p>Share your workload, timeline, and preferred system profile. We will help you map the right next step.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Contact Baytech</a>
        <a href="/solutions" class="btn btn-tonal">Explore Solutions</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(cardsSection)
  container.appendChild(trustSection)
  container.appendChild(cta)

  return container
}
