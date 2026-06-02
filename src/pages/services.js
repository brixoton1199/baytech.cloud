// Managed AI Page - AI Plus capability surface
import { createBreadcrumb } from '../router.js'

const capabilityPillars = [
  ['Model Strategy', 'Select and evaluate API models, open-source models, private deployments, fine-tuning, RAG, and managed endpoints based on the actual workload.'],
  ['Private Data Architecture', 'Design retrieval, permissions, document pipelines, data boundaries, governance, and deployment isolation for private AI use cases.'],
  ['Managed Endpoints', 'Create production inference services with API-style access, monitoring, scaling decisions, access controls, and support planning.'],
  ['AI Application Integration', 'Connect models to support systems, documents, CRMs, operations tools, internal platforms, and human review workflows.'],
  ['AI Operations', 'Monitor quality, latency, cost, usage, model changes, access, incidents, and performance after launch.'],
]

const deploymentRows = [
  ['Fast adoption with hosted models', 'Hosted model integration', 'Select the right model, secure the workflow, manage cost visibility, and integrate model output into business tools.'],
  ['Private model serving', 'Managed private deployment', 'Plan the model serving architecture, endpoint, access boundary, monitoring, and support model.'],
  ['Enterprise knowledge assistant', 'RAG and private knowledge system', 'Structure documents, retrieval, permissions, answer evaluation, and user workflow.'],
  ['Heavy inference or training', 'GPU-backed platform', 'Match model size, memory, storage, network, endpoint pattern, and operations support.'],
  ['Business workflow automation', 'AI application integration', 'Connect AI into approvals, systems of record, support flows, reporting, and internal processes.'],
]

export function renderServices() {
  const container = document.createElement('div')
  container.className = 'page-services'

  const breadcrumb = createBreadcrumb('Managed AI')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Managed AI</p>
    <h1>AI systems selected, deployed, and operated with Baytech</h1>
    <p>Baytech helps teams move from model decisions to private data architecture, managed endpoints, GPU-backed workloads, business integration, and production operations.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Plan a Managed AI Deployment</a>
      <a href="/" class="btn btn-outlined">Start an AI Plus Assessment</a>
    </div>
  `

  const layoutWrapper = document.createElement('div')
  layoutWrapper.className = 'page-with-sidebar'

  const mainContent = document.createElement('div')
  mainContent.className = 'page-main'
  mainContent.innerHTML = `
    <section class="services-section">
      <div class="section-header">
        <p class="section-label">What Baytech Manages</p>
        <h2 class="section-title">From model decision to production AI service</h2>
        <p class="section-subtitle">Managed AI is the operating layer between a model idea and a reliable AI system. Baytech helps connect model, data, deployment, workflow, and support choices.</p>
      </div>
      <div class="services-grid">
        ${capabilityPillars.map(([title, text]) => `
          <article class="service-card card-elevated" id="${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/contact" class="btn btn-tonal">Plan this path</a>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="services-section">
      <div class="section-header">
        <p class="section-label">Find Your Path</p>
        <h2 class="section-title">Different AI workloads need different operating models</h2>
      </div>
      <div class="solutions-grid">
        ${deploymentRows.map(([need, path, role]) => `
          <article class="solution-card card-elevated">
            <span class="solution-tag">${path}</span>
            <h3>${need}</h3>
            <p>${role}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="services-section">
      <div class="section-header">
        <p class="section-label">After Launch</p>
        <h2 class="section-title">Production AI needs ownership</h2>
        <p class="section-subtitle">A model endpoint is not the finish line. Baytech helps teams maintain the system around it: access, monitoring, cost, usage, quality, performance, updates, and support.</p>
      </div>
      <div class="solutions-grid">
        ${['Monitoring and logs', 'Cost and capacity review', 'Access and governance updates', 'Model and prompt iteration', 'Performance and latency tuning', 'Operational support'].map((item) => `
          <article class="solution-card card-elevated">
            <span class="solution-tag">Operations</span>
            <h3>${item}</h3>
          </article>
        `).join('')}
      </div>
    </section>
  `

  const sidebar = document.createElement('aside')
  sidebar.className = 'page-sidebar'
  sidebar.innerHTML = `
    <div class="sidebar-card">
      <h3>Managed AI</h3>
      <div class="sidebar-links">
        <a href="#model-strategy" class="active">Model Strategy</a>
        <a href="#private-data-architecture">Private Data Architecture</a>
        <a href="#managed-endpoints">Managed Endpoints</a>
        <a href="#ai-application-integration">AI Application Integration</a>
        <a href="#ai-operations">AI Operations</a>
      </div>
    </div>

    <div class="sidebar-card sidebar-cta">
      <h3>Choose the right AI path</h3>
      <p>Bring a model, data boundary, endpoint, or workload question.</p>
      <a href="/contact" class="btn">Talk to Baytech</a>
    </div>
  `

  layoutWrapper.appendChild(mainContent)
  layoutWrapper.appendChild(sidebar)

  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Know your workload. Choose your path. Operate with confidence.</h2>
      <p>Baytech can help select, deploy, integrate, and operate the AI path that fits your model, data, platform, and business workflow.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Plan a Managed AI Deployment</a>
        <a href="/gpu-cloud" class="btn btn-tonal">Discuss GPU Capacity</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(layoutWrapper)
  container.appendChild(cta)

  return container
}
