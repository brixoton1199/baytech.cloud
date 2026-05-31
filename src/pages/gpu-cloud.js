// GPU Cloud Page - inquiry-led GPU capacity listing
import { createBreadcrumb } from '../router.js'

const gpuSystems = [
  {
    name: 'Nvidia H100',
    vendor: 'Nvidia',
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

function getSpecValue(system, label) {
  return system.specs.find((spec) => spec.label === label)?.value || ''
}

function renderUseCases(workloads) {
  return workloads
    .split(',')
    .map((workload) => workload.trim())
    .filter(Boolean)
    .map((workload) => `<span class="gpu-system-chip">${workload}</span>`)
    .join('')
}

function renderGpuSystemRow(system) {
  return `
    <tr>
      <td class="gpu-system-name-cell" data-label="System">
        <div class="gpu-system-name">
          <span class="gpu-system-vendor">${system.vendor}</span>
          <strong>${system.name}</strong>
        </div>
      </td>
      <td data-label="Use case">
        <div class="gpu-system-use-cases">
          ${renderUseCases(system.workloads)}
        </div>
      </td>
      <td data-label="Host CPU">${getSpecValue(system, 'CPU')}</td>
      <td data-label="System Memory">${getSpecValue(system, 'Mem')}</td>
      <td data-label="Local NVMe">${getSpecValue(system, 'Data')}</td>
      <td data-label="Network Fabric">${getSpecValue(system, 'Network')}</td>
      <td data-label="Configuration">
        ${system.configurable ? '<span class="gpu-system-chip gpu-system-chip-accent">Configurable</span>' : ''}
      </td>
      <td data-label="Availability">
        <div class="gpu-system-availability">
          <a href="/contact" class="btn btn-outlined gpu-system-action">Request for availability</a>
        </div>
      </td>
    </tr>
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

  const systemsSection = document.createElement('section')
  systemsSection.className = 'services-section animate-on-scroll'
  systemsSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">GPU Systems</p>
      <h2 class="section-title">Configurable systems for demanding AI workloads</h2>
      <p class="section-subtitle gpu-system-subtitle">Compare CPU, memory, NVMe, and network across configurable GPU systems.</p>
    </div>
    <div class="gpu-system-table-shell">
      <table class="gpu-system-table">
        <caption class="gpu-system-caption">Configurable GPU system profiles</caption>
        <colgroup>
          <col class="gpu-system-col-system">
          <col class="gpu-system-col-use-case">
          <col class="gpu-system-col-cpu">
          <col class="gpu-system-col-memory">
          <col class="gpu-system-col-nvme">
          <col class="gpu-system-col-network">
          <col class="gpu-system-col-config">
          <col class="gpu-system-col-availability">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">System</th>
            <th scope="col">Use case</th>
            <th scope="col">Host CPU</th>
            <th scope="col">System Memory</th>
            <th scope="col">Local NVMe</th>
            <th scope="col">Network Fabric</th>
            <th scope="col">Configuration</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody>
          ${gpuSystems.map(renderGpuSystemRow).join('')}
        </tbody>
      </table>
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
  container.appendChild(systemsSection)
  container.appendChild(trustSection)
  container.appendChild(cta)

  return container
}
