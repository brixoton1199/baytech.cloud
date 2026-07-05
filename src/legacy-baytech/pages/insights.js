// Resources Page - AI Plus guide cards
import { createBreadcrumb } from '../router.js'

const guideCards = [
  {
    tag: 'Model Choice',
    title: 'Model Selection Guide',
    text: 'Compare open, commercial, small, and specialist models against accuracy, latency, privacy, cost, and operational requirements.',
    fit: ['Model shortlist', 'Evaluation criteria', 'Deployment tradeoffs']
  },
  {
    tag: 'Private AI',
    title: 'Private AI Deployment Checklist',
    text: 'Map the data, permission, retrieval, hosting, and monitoring decisions needed before a private AI system goes into production.',
    fit: ['Data boundaries', 'RAG readiness', 'Access controls']
  },
  {
    tag: 'GPU Platform',
    title: 'GPU Sizing For AI Workloads',
    text: 'Understand how model size, context window, batch profile, memory, storage, and concurrency shape the GPU platform you need.',
    fit: ['Inference sizing', 'Training capacity', 'Throughput planning']
  },
  {
    tag: 'Knowledge Systems',
    title: 'RAG And Private Knowledge Systems',
    text: 'Plan a retrieval architecture that connects business knowledge to models without flattening governance or data ownership.',
    fit: ['Source systems', 'Search quality', 'Permission design']
  },
  {
    tag: 'Production',
    title: 'From PoC To Production',
    text: 'Move beyond demos with a practical path for testing, observability, fallbacks, support, and change management.',
    fit: ['Pilot scope', 'Reliability model', 'Operational handoff']
  },
  {
    tag: 'Managed AI',
    title: 'Managed Endpoints Explained',
    text: 'Clarify when an AI endpoint should be hosted, managed, monitored, and improved as a production service.',
    fit: ['Endpoint design', 'Monitoring', 'Cost control']
  }
]

const faqs = [
  {
    question: 'Where should we start if we are unsure which model to use?',
    answer: 'Start with the workload, data boundary, latency requirement, and business outcome. Baytech can help shortlist models and test them against realistic prompts and source data.'
  },
  {
    question: 'Do we need our own GPU capacity?',
    answer: 'Not always. Some workloads fit managed endpoints or cloud-hosted models. Dedicated GPU capacity becomes important when privacy, throughput, model size, training, or predictable access matter.'
  },
  {
    question: 'Can private company data be used safely with AI?',
    answer: 'Yes, if the system is designed around data ownership, access rules, retrieval quality, hosting choices, and auditability before the model is connected to business workflows.'
  },
  {
    question: 'What does Baytech operate after launch?',
    answer: 'Baytech can support endpoints, GPU systems, retrieval pipelines, workflow integrations, monitoring, and improvement cycles so the AI system stays useful after the first deployment.'
  }
]

export function renderInsights() {
  const container = document.createElement('div')
  container.className = 'page-insights'

  const breadcrumb = createBreadcrumb('Resources')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Resources</p>
    <h1>Guides for choosing and operating AI systems</h1>
    <p>Practical starting points for model selection, private AI, GPU sizing, managed endpoints, and production AI operations.</p>
  `

  const resourcesGrid = document.createElement('section')
  resourcesGrid.className = 'services-section'
  resourcesGrid.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">AI Plus Guides</p>
      <h2 class="section-title">Decisions to make before AI becomes production work</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">These guide topics are designed to help teams frame the right conversation before buying models, GPUs, or integration work.</p>
    </div>
    <div class="solutions-grid">
      ${guideCards.map((card) => `
        <article class="insight-card card-elevated">
          <div class="insight-meta">
            <span class="insight-tag">${card.tag}</span>
            <span class="insight-date">Planning Guide</span>
          </div>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          <ul class="feature-list">
            ${card.fit.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <a href="/contact" class="btn btn-text">Plan This With Baytech</a>
        </article>
      `).join('')}
    </div>
  `

  const faqSection = document.createElement('section')
  faqSection.className = 'services-section'
  faqSection.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">Questions</p>
      <h2 class="section-title">AI Plus planning questions</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">The first useful answer is often not a product name. It is a better decision path.</p>
    </div>
    <div class="solutions-grid">
      ${faqs.map((item) => `
        <div class="solution-card card-elevated">
          <span class="solution-tag">FAQ</span>
          <h3>${item.question}</h3>
          <p>${item.answer}</p>
        </div>
      `).join('')}
    </div>
  `

  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Turn AI uncertainty into a clear plan</h2>
      <p>Bring the model question, data question, workload question, or business workflow you are facing. Baytech will help shape the path.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-tonal">Explore Managed AI</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(resourcesGrid)
  container.appendChild(faqSection)
  container.appendChild(cta)

  return container
}
