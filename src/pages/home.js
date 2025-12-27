// Home Page - MD3 Panel Architecture
// Two-Pane Hero, Elevated Cards, Service Chips, Trust Bar

export function renderHome() {
  const container = document.createElement('div')
  container.className = 'page-home'

  // ============================================
  // HERO SECTION - Two Pane Layout
  // ============================================
  const hero = document.createElement('section')
  hero.className = 'hero'
  hero.id = 'home'
  hero.innerHTML = `
    <div class="hero-content">
      <span class="hero-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        Cloud Excellence Partner
      </span>
      <h1>Reduce Cloud Costs by <em>40%</em>. Migrate in 30 Days.</h1>
      <p class="hero-subtitle">Enterprise cloud consulting with guaranteed results. Join 50+ Irish businesses who've transformed their infrastructure with expert guidance.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-filled">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Book Consultation
        </a>
        <a href="/services" class="btn btn-outlined">View Services</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-visual-shapes">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
      </div>
      <div class="hero-visual-content">
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-value">-40%</span>
            <span class="hero-stat-label">Cloud Costs</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">30</span>
            <span class="hero-stat-label">Day Migration</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">99.9%</span>
            <span class="hero-stat-label">Uptime</span>
          </div>
        </div>
      </div>
    </div>
  `

  // ============================================
  // TRUST BAR
  // ============================================
  const trustBar = document.createElement('section')
  trustBar.className = 'trust-section'
  trustBar.innerHTML = `
    <p class="trust-label">Trusted by leading Irish businesses</p>
    <div class="trust-items">
      <div class="trust-item">
        <span class="trust-icon">☁️</span>
        <span>AWS Partner</span>
      </div>
      <div class="trust-item">
        <span class="trust-icon">🔒</span>
        <span>ISO 27001</span>
      </div>
      <div class="trust-item">
        <span class="trust-icon">🏆</span>
        <span>50+ Projects</span>
      </div>
      <div class="trust-item">
        <span class="trust-icon">⚡</span>
        <span>24/7 Support</span>
      </div>
    </div>
  `

  // ============================================
  // SERVICE CHIPS (Quick Filters)
  // ============================================
  const chipsSection = document.createElement('section')
  chipsSection.className = 'services-section animate-on-scroll'
  chipsSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">What We Do</p>
      <h2 class="section-title">Our Core Services</h2>
      <p class="section-subtitle">Strategic cloud adoption and robust infrastructure solutions designed for growth.</p>
    </div>
    
    <div class="chips-container" style="margin-bottom: var(--space-8);">
      <button class="chip active">
        <span class="chip-icon">☁️</span>
        All Services
      </button>
      <button class="chip">
        <span class="chip-icon">🔧</span>
        Consulting
      </button>
      <button class="chip">
        <span class="chip-icon">🔗</span>
        Network
      </button>
      <button class="chip">
        <span class="chip-icon">🖥️</span>
        Infrastructure
      </button>
      <button class="chip">
        <span class="chip-icon">⚙️</span>
        Automation
      </button>
    </div>
    
    <div class="services-grid">
      <div class="service-card card-elevated">
        <span class="service-number">01</span>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
        <h3>Cloud Consulting</h3>
        <p>Cloud costs spiraling out of control? We help you navigate the complexities of cloud transformation with expert guidance, ensuring optimal performance and guaranteed cost savings.</p>
        <a href="/services#cloud-consulting" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <span class="service-number">02</span>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="6" height="6" rx="1"></rect>
            <rect x="16" y="2" width="6" height="6" rx="1"></rect>
            <rect x="9" y="16" width="6" height="6" rx="1"></rect>
            <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"></path>
            <path d="M12 13v3"></path>
          </svg>
        </div>
        <h3>Network Architecture</h3>
        <p>Network bottlenecks causing downtime? Design and implement robust network infrastructure that scales with your business. From planning to deployment.</p>
        <a href="/services#network-architecture" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <span class="service-number">03</span>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="20" height="8" rx="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2"></rect>
            <circle cx="6" cy="6" r="1"></circle>
            <circle cx="6" cy="18" r="1"></circle>
          </svg>
        </div>
        <h3>Server Solutions</h3>
        <p>Server outages costing you customers? High-performance server deployment and management with 99.9% uptime guarantee. Reliable, secure, optimized.</p>
        <a href="/services#server-solutions" class="service-link">Learn More →</a>
      </div>

      <div class="service-card card-elevated">
        <span class="service-number">04</span>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h3>DevOps & Automation</h3>
        <p>Deployment taking too long? Accelerate your development pipeline with modern DevOps practices. CI/CD, infrastructure as code, automated workflows.</p>
        <a href="/services#devops-automation" class="service-link">Learn More →</a>
      </div>
    </div>
  `

  // ============================================
  // STATS SECTION
  // ============================================
  const statsSection = document.createElement('section')
  statsSection.className = 'stats-section animate-on-scroll'
  statsSection.innerHTML = `
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-value">50+</span>
        <span class="stat-label">Projects Delivered</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">€2M+</span>
        <span class="stat-label">Client Savings</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">99.9%</span>
        <span class="stat-label">Uptime Guarantee</span>
      </div>
    </div>
  `

  // ============================================
  // TESTIMONIAL
  // ============================================
  const testimonialSection = document.createElement('section')
  testimonialSection.className = 'testimonial-section animate-on-scroll'
  testimonialSection.innerHTML = `
    <div class="testimonial-content">
      <p class="testimonial-quote">"baytech.cloud transformed our outdated infrastructure into a lean, cost-effective powerhouse. Their expertise and dedication are unmatched."</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">JD</div>
        <div class="testimonial-info">
          <h4>Jane Doe</h4>
          <p>CTO, Global Corp</p>
        </div>
      </div>
    </div>
  `

  // ============================================
  // FAQ SECTION
  // ============================================
  const faqSection = document.createElement('section')
  faqSection.className = 'faq-section animate-on-scroll'
  faqSection.innerHTML = `
    <div class="section-header" style="text-align: center;">
      <p class="section-label">Quick Answers</p>
      <h2 class="section-title">Frequently Asked Questions</h2>
    </div>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">
          How long does a typical cloud migration take?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p class="faq-answer-content">Most migrations are completed within 30-90 days, depending on complexity. We provide a detailed timeline after our initial assessment.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What cost savings can we expect?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p class="faq-answer-content">Our clients typically see a 30-50% reduction in operational costs within the first year due to optimized resource utilization and strategic planning.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          Do you provide ongoing support after migration?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p class="faq-answer-content">Yes, we offer 24/7 managed services and support packages to ensure your infrastructure runs smoothly post-migration.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          Which cloud platforms do you work with?
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p class="faq-answer-content">We specialize in AWS, Azure, and Google Cloud Platform, providing multi-cloud and hybrid-cloud solutions tailored to your needs.</p>
        </div>
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
  container.appendChild(trustBar)
  container.appendChild(chipsSection)
  container.appendChild(statsSection)
  container.appendChild(testimonialSection)
  container.appendChild(faqSection)
  container.appendChild(ctaSection)

  // Add FAQ accordion functionality
  container.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item')
      // Close other open items
      container.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) item.classList.remove('active')
      })
      faqItem.classList.toggle('active')
    })
  })

  // Add chip filter functionality (visual only for now)
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'))
      chip.classList.add('active')
    })
  })

  return container
}
