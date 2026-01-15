// Home Page - MD3 Panel Architecture
// Two-Pane Hero, Elevated Cards, Service Chips, Trust Bar

export function renderHome() {
  const container = document.createElement('div')
  container.className = 'page-home'

  // ============================================
  // HERO SECTION - Two Pane Layout with Map
  // ============================================
  const hero = document.createElement('section')
  hero.className = 'hero hero-with-map'
  hero.id = 'home'
  hero.innerHTML = `
    <div class="hero-split-container">
      <div class="hero-content-left">
        <div class="hero-logo">
          <img src="/assets/baytech logo.png" alt="Baytech Logo" class="hero-logo-image" />
        </div>
        <h1>Technology Strategy, Realized.</h1>
        <h2 style="font-family: var(--md-font-brand); font-size: var(--md-headline-large); font-weight: 400; color: var(--md-on-surface-variant); margin: var(--space-4) 0;">Align Your Infrastructure with Ambition.</h2>
        <p class="hero-subtitle">We are your dedicated technology consultants. We architect secure, scalable foundations and provide the strategic guidance Irish businesses need to innovate and grow.</p>
        <div class="hero-actions">
          <a href="/contact" class="btn btn-filled">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Schedule a Strategic Consultation
          </a>
          <a href="/services" class="btn btn-outlined">View Services</a>
        </div>
      </div>
      
      <div class="hero-map-container">
        <div class="map-glow-wrapper">
          <img src="/assets/ireland-map.png" alt="Map of Ireland with Dublin highlighted" class="ireland-map-image map-glow-layer-1" />
          <img src="/assets/ireland-map.png" alt="" class="ireland-map-image map-glow-layer-2" aria-hidden="true" />
          <img src="/assets/ireland-map.png" alt="" class="ireland-map-image map-glow-layer-3" aria-hidden="true" />
          <img src="/assets/ireland-map.png" alt="" class="ireland-map-image map-glow-main" />
        </div>
      </div>
    </div>
  `


  // ============================================
  // SERVICE CHIPS (Quick Filters)
  // ============================================
  const chipsSection = document.createElement('section')
  chipsSection.className = 'services-section animate-on-scroll'
  chipsSection.innerHTML = `
    <div class="section-header animate-slide-left" style="--delay: 0ms;">
      <p class="section-label">How We Partner With You</p>
      <h2 class="section-title">From Strategy to Execution</h2>
      <p class="section-subtitle">Comprehensive technology consulting that bridges business objectives with scalable infrastructure.</p>
    </div>
    
    <div class="services-grid stagger-children animate-on-scroll" style="margin-top: var(--space-10);">
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h3>Technology Strategy & Advisory</h3>
        <p>Your business goals, translated into a resilient technology roadmap. We provide vendor-agnostic analysis, future-state architecture design, and ongoing governance to ensure your investments drive growth.</p>
        <a href="/services#strategy-advisory" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
        <h3>Cloud & Infrastructure Architecture</h3>
        <p>Beyond migration. We design, secure, and optimize cloud environments (AWS, Azure, GCP) to be the scalable, efficient foundation for your applications and data.</p>
        <a href="/services#cloud-architecture" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h3>Enterprise Network & Security</h3>
        <p>Architect resilient, zero-trust network infrastructures. From SD-WAN design to identity management and compliance frameworks—security by design, not afterthought.</p>
        <a href="/services#network-security" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h3>DevOps & Operational</h3>
        <p>Transform deployment into a competitive advantage. CI/CD pipelines, infrastructure as code, observability, and SRE best practices—accelerate delivery without sacrificing reliability.</p>
        <a href="/services#devops-operational" class="service-link">Learn More →</a>
      </div>
    </div>
  `

  // ============================================
  // INSIGHTS ON TECHNOLOGY LEADERSHIP
  // ============================================
  const insightsSection = document.createElement('section')
  insightsSection.className = 'insights-section animate-on-scroll'
  insightsSection.innerHTML = `
    <div class="section-header" style="text-align: center; max-width: 800px; margin: 0 auto var(--space-10);">
      <p class="section-label">Expert Perspectives</p>
      <h2 class="section-title">Insights on Technology Leadership</h2>
      <p class="section-subtitle">Understanding the strategic value of technology consulting</p>
    </div>
    
    <div class="insights-list stagger-children" style="max-width: 900px; margin: 0 auto;">
      <div class="insight-card">
        <h4 class="insight-question">Q: What's the difference between a technology consultant and an IT service provider?</h4>
        <p class="insight-answer"><strong>A:</strong> An IT provider executes tasks. A consultant, like baytech.cloud, first defines the right strategy and architecture to ensure those tasks deliver measurable business outcomes. We are your strategic partner in navigating technology decisions.</p>
      </div>
      
      <div class="insight-card">
        <h4 class="insight-question">Q: How do you approach technology strategy for a business with legacy systems?</h4>
        <p class="insight-answer"><strong>A:</strong> We assess legacy systems not as obstacles, but as part of the evolution. Our strategy focuses on incremental modernization, risk mitigation, and building bridges to new platforms, ensuring business continuity while enabling innovation.</p>
      </div>
      
      <div class="insight-card">
        <h4 class="insight-question">Q: Why is vendor-agnostic advice important?</h4>
        <p class="insight-answer"><strong>A:</strong> Technology decisions should be driven by your business needs, not vendor marketing. Our vendor-agnostic approach ensures you get the best fit solution—whether that's AWS, Azure, GCP, or a hybrid architecture—based on objective analysis.</p>
      </div>
    </div>
  `

  // ============================================
  // CTA SECTION
  // ============================================
  const ctaSection = document.createElement('section')
  ctaSection.className = 'cta-section animate-on-scroll'
  ctaSection.innerHTML = `
    <div class="cta-content">
      <h2>Ready to Transform Your Infrastructure?</h2>
      <p>Let's discuss how baytech.cloud can help your business grow with the right technology solutions.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Book Consultation</a>
        <a href="/case" class="btn btn-tonal">View Case Studies</a>
      </div>
    </div>
  `

  // Build page
  container.appendChild(hero)
  container.appendChild(chipsSection)
  container.appendChild(insightsSection)
  container.appendChild(ctaSection)

  return container
}
