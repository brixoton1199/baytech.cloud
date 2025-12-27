// Our Approach Page - Technology Strategy Methodology

export function renderApproach() {
  const container = document.createElement('div')
  container.className = 'page-approach'

  // Page Header
  const header = document.createElement('section')
  header.className = 'page-header animate-on-scroll'
  header.innerHTML = `
    <div class="section-header" style="max-width: 800px; margin: 0 auto; text-align: center;">
      <span class="section-label">Our Methodology</span>
      <h1 style="font-size: var(--md-display-large); margin: var(--space-4) 0;">Technology Strategy Approach</h1>
      <p class="section-subtitle">We don't just execute projects. We partner with you to align technology with business objectives, architect scalable solutions, and build strategic roadmaps for sustainable growth.</p>
    </div>
  `

  // Approach Sections
  const approach = document.createElement('section')
  approach.className = 'approach-section animate-on-scroll'
  approach.innerHTML = `
    <div class="approach-grid">
      <div class="approach-card">
        <div class="approach-number">01</div>
        <h3>Discovery & Strategy</h3>
        <p>We start by understanding your business goals, current technology landscape, and strategic challenges. This forms the foundation for aligned technology decisions.</p>
      </div>
      
      <div class="approach-card">
        <div class="approach-number">02</div>
        <h3>Architecture & Planning</h3>
        <p>Our architects design scalable, resilient solutions that support your business growth. Every decision is documented with clear rationale and long-term vision.</p>
      </div>
      
      <div class="approach-card">
        <div class="approach-number">03</div>
        <h3>Implementation & Governance</h3>
        <p>Execution with continuous oversight. We implement with best practices, establish governance frameworks, and ensure knowledge transfer to your team.</p>
      </div>
      
      <div class="approach-card">
        <div class="approach-number">04</div>
        <h3>Optimization & Evolution</h3>
        <p>Technology strategy isn't static. We continuously monitor, optimize, and evolve your infrastructure to adapt to changing business needs and technological advances.</p>
      </div>
    </div>
  `

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section animate-on-scroll'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Ready to Align Technology with Business Strategy?</h2>
      <p>Let's discuss how our strategic approach can transform your technology landscape.</p>
      <div style="display: flex; gap: var(--space-4); justify-content: center; margin-top: var(--space-6);">
        <a href="/contact" class="btn btn-filled">Schedule Consultation</a>
        <a href="/services" class="btn btn-outlined">Explore Services</a>
      </div>
    </div>
  `

  container.appendChild(header)
  container.appendChild(approach)
  container.appendChild(cta)

  return container
}

