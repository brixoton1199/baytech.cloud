// GPU Platform Page - inquiry-led AI workload capacity listing
import { createBreadcrumb } from '../router.js'

const gpuSystems = [
  {
    name: 'Nvidia H100',
    vendor: 'Nvidia',
    vendorMark: 'NV',
    configurable: true,
    workloads: ['Rendering', 'Inference'],
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
    workloads: ['Rendering', 'Inference'],
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
    workloads: ['Training', 'Rendering', 'Inference'],
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
    workloads: ['Training', 'Rendering', 'Inference'],
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
    workloads: ['Training', 'Rendering', 'Inference'],
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
    workloads: ['Inference'],
    specs: [
      { label: 'CPU', value: 'Intel 6740P 48C 2.1GHz' },
      { label: 'Mem', value: '64GB 5600MHz * 16' },
      { label: 'Data', value: '3.84TB * 8' },
      { label: 'Network', value: '400G' },
    ],
  },
]

const workloadFit = [
  {
    title: 'Inference',
    text: 'Plan serving capacity, latency, throughput, endpoint design, monitoring, and model update flow.',
  },
  {
    title: 'Training And Fine-Tuning',
    text: 'Plan GPU memory, dataset flow, local storage, checkpointing, network design, and scaling behavior.',
  },
  {
    title: 'Rendering And Multimodal',
    text: 'Support image, video, rendering, simulation, and multimodal workloads with appropriate compute and storage profiles.',
  },
  {
    title: 'Private Model Serving',
    text: 'Run private models with deployment isolation, secure access, observability, and support planning.',
  },
]

const platformDecisions = [
  {
    title: 'GPU Memory And Model Size',
    text: 'Model size, context length, batch size, and precision all affect GPU memory requirements.',
  },
  {
    title: 'Storage And Data Locality',
    text: 'Training and multimodal workloads need the data path planned with local storage, throughput, and dataset movement in mind.',
  },
  {
    title: 'Network And Distributed Workloads',
    text: 'Clusters and multi-GPU workloads need network design that supports scale, synchronization, and reliability.',
  },
  {
    title: 'Dedicated Or Shared Capacity',
    text: 'Isolation, usage pattern, budget, security, and operational control all affect capacity strategy.',
  },
  {
    title: 'Endpoint, Batch, Or Cluster',
    text: 'Inference, batch processing, training, and fine-tuning each need different deployment shapes.',
  },
  {
    title: 'Monitoring And Support',
    text: 'Production AI workloads need visibility into usage, latency, errors, performance, and capacity over time.',
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

function renderWorkloadTags(workloads) {
  return workloads
    .map((workload) => `<span class="gpu-system-workload-tag">${workload}</span>`)
    .join('')
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
          ${renderWorkloadTags(system.workloads)}
          ${system.configurable ? '<span class="gpu-system-configurable"><span class="solution-tag">Configurable</span></span>' : ''}
        </div>
        <div class="gpu-system-summary-actions">
          <a href="/contact" class="btn btn-tonal gpu-system-action">
            <span>Request Availability</span>
            <span class="gpu-system-action-arrow" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </header>
      <section class="gpu-system-profile" aria-label="${system.name} system specification">
        <div class="gpu-system-profile-header">
          <span>System specification</span>
          <span>Baseline configuration</span>
        </div>
        <dl class="gpu-system-specs">
          ${system.specs.map(renderSpec).join('')}
        </dl>
      </section>
    </article>
  `
}

export function renderGpuCloud() {
  const container = document.createElement('div')
  container.className = 'page-gpu-cloud'

  const breadcrumb = createBreadcrumb('GPU Platform')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">GPU Platform</p>
    <h1>GPU systems for AI workloads that need real capacity</h1>
    <p>Configurable NVIDIA and AMD systems for inference, training, fine-tuning, rendering, multimodal workloads, and private model deployment. Baytech helps match the system to the workload before capacity decisions are locked in.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Discuss GPU Capacity</a>
      <a href="/services" class="btn btn-outlined">Plan an AI Deployment</a>
    </div>
  `

  const workloadSection = document.createElement('section')
  workloadSection.className = 'services-section animate-on-scroll'
  workloadSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Workload Fit</p>
      <h2 class="section-title">Start with the workload, then choose the system</h2>
      <p class="section-subtitle">GPU decisions depend on model size, memory, storage, network, latency, throughput, isolation, and operations. Baytech helps translate those requirements into a platform path.</p>
    </div>
    <div class="solutions-grid gpu-trust-grid">
      ${workloadFit.map((item) => `
        <article class="gpu-trust-card solution-card card-elevated">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `).join('')}
    </div>
  `

  const cardsSection = document.createElement('section')
  cardsSection.className = 'services-section animate-on-scroll'
  cardsSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Available System Profiles</p>
      <h2 class="section-title">Configurable NVIDIA and AMD GPU systems</h2>
      <p class="section-subtitle gpu-system-subtitle">Use these baseline profiles as a starting point. Baytech helps match the system to model size, workload type, data flow, storage, network, deployment model, and production operation.</p>
    </div>
    <div class="solutions-grid gpu-card-grid">
      ${gpuSystems.map(renderGpuSystem).join('')}
    </div>
  `

  const decisionSection = document.createElement('section')
  decisionSection.className = 'services-section animate-on-scroll'
  decisionSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Platform Decisions</p>
      <h2 class="section-title">The right GPU choice is an architecture decision</h2>
      <p class="section-subtitle">Capacity conversations should include model size, storage, network, deployment shape, isolation, observability, and support.</p>
    </div>
    <div class="solutions-grid gpu-trust-grid">
      ${platformDecisions.map((item) => `
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
      <p>Bring your model, workload, or target latency. Baytech can help translate AI workload requirements into GPU, storage, network, deployment, and support choices.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Discuss GPU Capacity</a>
        <a href="/services" class="btn btn-tonal">Plan a Managed AI Deployment</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(workloadSection)
  container.appendChild(cardsSection)
  container.appendChild(decisionSection)
  container.appendChild(cta)

  return container
}
