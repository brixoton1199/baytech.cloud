// GPU Cloud Page - inquiry-led GPU capacity listing
import { createBreadcrumb } from '../router.js'

const gpuCards = [
  {
    name: 'H100',
    label: 'Flagship training',
    description: 'For large-scale training, fine-tuning, and high-throughput AI workloads.',
    specs: ['Training clusters', 'Fine-tuning', 'High-throughput compute'],
  },
  {
    name: 'H200',
    label: 'LLM scale',
    description: 'For memory-intensive LLM workloads and next-generation AI infrastructure planning.',
    specs: ['LLM workloads', 'Memory-intensive AI', 'Capacity planning'],
  },
  {
    name: 'RTX Pro 6000',
    label: 'Professional AI',
    description: 'For professional visualization, inference, rendering, and applied AI teams.',
    specs: ['Inference', 'Rendering', 'Professional visualization'],
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

function renderGpuCard(card) {
  return `
    <article class="gpu-card solution-card card-elevated">
      <span class="solution-tag">${card.label}</span>
      <h3>${card.name}</h3>
      <p>${card.description}</p>
      <ul class="feature-list">
        ${card.specs.map((spec) => `<li>${spec}</li>`).join('')}
      </ul>
      <a href="/contact" class="btn btn-outlined">Request availability</a>
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
    <p>Inquiry-led access to H100, H200, and RTX Pro 6000 capacity with architecture, security, and deployment guidance from Baytech.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Request GPU Availability</a>
      <a href="/services" class="btn btn-outlined">Discuss Infrastructure</a>
    </div>
  `

  const cardsSection = document.createElement('section')
  cardsSection.className = 'services-section animate-on-scroll'
  cardsSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Available GPU Cards</p>
      <h2 class="section-title">Capacity for demanding AI workloads</h2>
      <p class="section-subtitle">Start with the GPU profile that fits your workload, then talk with Baytech about timing, architecture, and deployment readiness.</p>
    </div>
    <div class="solutions-grid gpu-card-grid">
      ${gpuCards.map(renderGpuCard).join('')}
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
      <p>Share your workload, timeline, and preferred GPU profile. We will help you map the right next step.</p>
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
