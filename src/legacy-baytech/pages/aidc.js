// AI Data Center Site & Resource Integration Page
import { createBreadcrumb } from '../router.js'

const capabilities = [
  ['Powered Land Identification & Review', 'Source, screen, and review powered land parcels across Europe with attention to power availability, grid proximity, zoning, and expansion potential.'],
  ['Power Permit & Grid Connection Pathway', 'Assess grid connection status, capacity offers, permit conditions, and interconnection timelines for AI data center-scale loads.'],
  ['Site Suitability Screening for AI Workloads', 'Evaluate parcels against AI data center requirements: density, cooling water or air, fiber routes, land use, environmental limits, and community factors.'],
  ['Energy, Cooling, Fiber & Infrastructure Mapping', 'Map power sources, cooling strategy, fiber connectivity, water access, substation distance, and supporting infrastructure per site.'],
  ['Investor, Operator, Landowner & Energy Partner Introductions', 'Introduce qualified counterparties: infrastructure investors, AI operators, landowners, and energy developers actively pursuing European AIDC opportunities.'],
  ['Joint Venture Opportunity Development', 'Help structure joint ventures between land, energy, capital, and operating partners around specific AIDC sites and pathways.'],
  ['AI Infrastructure Demand Alignment', 'Align site characteristics with real AI compute demand signals — model training clusters, inference regions, sovereign AI programs, and hyperscaler pipelines.'],
]

const whoWeWorkWith = [
  ['Landowners', 'Owners of powered land, industrial parcels, brownfield sites, or grid-adjacent property considering AI data center use.'],
  ['Developers', 'Data center and infrastructure developers seeking qualified land, power, and partner opportunities in Europe.'],
  ['Energy Partners', 'Independent power producers, renewable developers, and grid-connected generation projects seeking AI compute offtake.'],
  ['Investors & Infrastructure Funds', 'Capital allocators evaluating AI data center opportunities, JV structures, and platform investments.'],
  ['AI Compute Operators', 'AI cloud, model training, and inference operators looking for European sites with confirmed power pathways.'],
  ['Permit & Public Stakeholders', 'Municipal, regional, and national stakeholders coordinating AI infrastructure into local energy and development plans.'],
]

const opportunityTypes = [
  ['Powered Land', 'Parcels with existing or contracted power capacity suitable for AI data center loads.'],
  ['Power Permit', 'Sites with active grid connection permits, capacity allocations, or advanced interconnection positions.'],
  ['Energy Project', 'Generation or storage projects seeking co-located AI compute demand or offtake structures.'],
  ['JV Proposal', 'Structured joint venture opportunities between land, energy, capital, and operating partners.'],
  ['Brownfield / Retrofit Site', 'Industrial or legacy energy sites suitable for repositioning as AI data center campuses.'],
  ['Grid-Adjacent Parcel', 'Land with proximity to substations, transmission lines, or planned grid reinforcements.'],
]

const engagementSteps = [
  ['Intake', 'Receive site, power, or opportunity information from landowners, developers, energy partners, or investors.'],
  ['Screening', 'Screen the opportunity against AI data center suitability criteria: power, permit, land, cooling, connectivity, and demand alignment.'],
  ['Resource Mapping', 'Map surrounding infrastructure, power pathway, connection timeline, and supporting resources needed for AIDC use.'],
  ['Partner Matching', 'Introduce qualified counterparties across land, energy, capital, and AI operating sides based on the specific opportunity.'],
  ['Structuring & Handover', 'Support opportunity structuring, JV framing, and handover to development, investment, or operating parties.'],
]

export function renderAidc() {
  const container = document.createElement('div')
  container.className = 'page-aidc'

  const breadcrumb = createBreadcrumb('AI Data Centers')
  container.appendChild(breadcrumb)

  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">AI Data Centers</p>
    <h1>AI Data Center Site & Resource Integration</h1>
    <p>Connecting powered land, energy access, and strategic partners for AI data center development in Europe.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Discuss an AIDC Opportunity</a>
      <a href="/contact" class="btn btn-outlined">Submit Land or Power Asset</a>
    </div>
  `

  const pipelineNodes = [
    ['LAND', 'Powered Land'],
    ['PWR',  'Power Pathway'],
    ['PRM',  'Permits'],
    ['COOL', 'Cooling'],
    ['FIB',  'Fiber'],
    ['CAP',  'Capital'],
    ['OPS',  'Operators'],
  ]

  const intro = document.createElement('section')
  intro.className = 'services-section aidc-intro-section'
  intro.innerHTML = `
    <div class="section-header">
      <p class="section-label">Why Integration Matters</p>
      <h2 class="section-title">AI data centers need more than compute demand</h2>
      <p class="section-subtitle">AI data center development requires the right land, power pathway, permitting conditions, connectivity, cooling strategy, capital structure, and operating partners. Baytech helps interested parties identify, evaluate, and structure AI data center development through resource integration, opportunity screening, and partner coordination.</p>
    </div>
    <div class="resource-pipeline" role="list" aria-label="AI data center resource stack">
      ${pipelineNodes.map(([icon, label], i) => `
        <div class="pipeline-node" role="listitem">
          <span class="pipeline-icon">${icon}</span>
          <span class="pipeline-label">${label}</span>
        </div>
        ${i < pipelineNodes.length - 1 ? '<span class="pipeline-arrow" aria-hidden="true">→</span>' : ''}
      `).join('')}
    </div>
  `

  const layoutWrapper = document.createElement('div')
  layoutWrapper.className = 'page-with-sidebar'

  const mainContent = document.createElement('div')
  mainContent.className = 'page-main'
  mainContent.innerHTML = `
    <section class="services-section" id="our-role">
      <div class="section-header">
        <p class="section-label">Our Role</p>
        <h2 class="section-title">How Baytech helps</h2>
      </div>
      <div class="services-grid">
        ${capabilities.map(([title, text]) => `
          <article class="service-card card-elevated" id="${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}">
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="/contact" class="btn btn-tonal">Discuss this scope</a>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="services-section" id="who-we-work-with">
      <div class="section-header">
        <p class="section-label">Who We Work With</p>
        <h2 class="section-title">Coordinating across the AIDC value chain</h2>
      </div>
      <div class="solutions-grid">
        ${whoWeWorkWith.map(([title, text]) => `
          <article class="solution-card card-elevated">
            <span class="solution-tag">Partner</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="services-section" id="opportunity-types">
      <div class="section-header">
        <p class="section-label">Opportunity Types We Assess</p>
        <h2 class="section-title">From powered parcels to JV proposals</h2>
      </div>
      <div class="solutions-grid">
        ${opportunityTypes.map(([title, text]) => `
          <article class="solution-card card-elevated">
            <span class="solution-tag">Opportunity</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="services-section" id="engagement-path">
      <div class="section-header">
        <p class="section-label">Engagement Path</p>
        <h2 class="section-title">How a Baytech AIDC engagement moves forward</h2>
      </div>
      <div class="solutions-grid">
        ${engagementSteps.map(([title, text], i) => `
          <article class="solution-card card-elevated">
            <span class="solution-tag">Step ${i + 1}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `

  const sidebar = document.createElement('aside')
  sidebar.className = 'page-sidebar'
  sidebar.innerHTML = `
    <div class="sidebar-card">
      <h3>On This Page</h3>
      <div class="sidebar-links">
        <a href="#our-role" class="active">Our Role</a>
        <a href="#who-we-work-with">Who We Work With</a>
        <a href="#opportunity-types">Opportunity Types</a>
        <a href="#engagement-path">Engagement Path</a>
      </div>
    </div>

    <div class="sidebar-card sidebar-cta">
      <h3>Have a site, permit, or capital to place?</h3>
      <p>Share powered land, a grid position, an energy project, or a JV concept for European AI data center development.</p>
      <a href="/contact" class="btn">Talk to Baytech</a>
    </div>
  `

  layoutWrapper.appendChild(mainContent)
  layoutWrapper.appendChild(sidebar)

  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Powered land. Power pathway. Partners. Structured for AI.</h2>
      <p>Baytech helps landowners, developers, energy partners, investors, and AI operators integrate the resources needed to move European AI data center projects forward.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Discuss an AIDC Opportunity</a>
        <a href="/contact" class="btn btn-tonal">Submit Land or Power Asset</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(intro)
  container.appendChild(layoutWrapper)
  container.appendChild(cta)

  return container
}
