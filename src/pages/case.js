// AI Plus proof points page
import { createBreadcrumb } from '../router.js'

const proofAreas = [
  {
    tag: 'Model',
    title: 'Model and deployment decisions',
    text: 'Future proof points will focus on why a model and deployment path were selected, not only what tool was used.'
  },
  {
    tag: 'Data',
    title: 'Private data and knowledge systems',
    text: 'Examples will describe how data boundaries, retrieval quality, and permission logic were handled.'
  },
  {
    tag: 'Platform',
    title: 'GPU capacity and managed operation',
    text: 'Platform proof will cover hardware fit, endpoint behavior, monitoring, and operational ownership.'
  },
  {
    tag: 'Workflow',
    title: 'Business adaptation',
    text: 'Business proof will show where the AI system fits into real work and what changed for the team using it.'
  }
]

export function renderCase() {
  const container = document.createElement('div')
  container.className = 'page-case'

  const breadcrumb = createBreadcrumb('Proof Points')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Proof Points</p>
    <h1>AI Plus proof points are being prepared</h1>
    <p>Baytech will publish AI Plus examples only when the work can be described responsibly, with accurate context and without invented metrics.</p>
  `

  const proofGrid = document.createElement('section')
  proofGrid.className = 'services-section'
  proofGrid.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">What We Will Show</p>
      <h2 class="section-title">Proof should explain decisions, not decorate claims</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">Until verified customer stories are ready, this page stays honest about the evidence Baytech intends to share.</p>
    </div>
    <div class="solutions-grid">
      ${proofAreas.map((item) => `
        <div class="case-card card-elevated">
          <span class="case-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `).join('')}
    </div>
  `

  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Discuss a current AI Plus problem</h2>
      <p>If you are evaluating a model, private data architecture, GPU platform, or managed AI workflow, Baytech can help shape the next step directly.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Talk to Baytech</a>
        <a href="/solutions" class="btn btn-tonal">Explore Solutions</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(proofGrid)
  container.appendChild(cta)

  return container
}
