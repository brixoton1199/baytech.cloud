// About Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderAbout() {
  const container = document.createElement('div')
  container.className = 'page-about'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('About Us')
  container.appendChild(breadcrumb)

  // Intro Section
  const intro = document.createElement('section')
  intro.className = 'services-section'
  intro.innerHTML = `
    <div class="section-header" style="text-align: center;">
      <p class="section-label">Who We Are</p>
      <h2 class="section-title">Your Trusted Technology Partner</h2>
    </div>
    <div style="max-width: 900px; margin: 0 auto;">
      <p style="font-size: var(--md-body-large); color: var(--md-on-surface-variant); line-height: 1.7; margin-bottom: var(--space-4);">
        At <strong style="color: var(--md-on-surface);">baytech.cloud</strong>, we are a team of dedicated cloud architects, network engineers, and IT strategists based in Dublin, Ireland. Our mission is to empower businesses with robust, scalable, and secure technology solutions that drive growth and efficiency.
      </p>
      <p style="font-size: var(--md-body-large); color: var(--md-on-surface-variant); line-height: 1.7; margin-bottom: var(--space-4);">
        Founded on the principles of innovation and client-centric service, we pride ourselves on building long-lasting partnerships. We believe in transparent communication, meticulous planning, and flawless execution to ensure every project exceeds expectations.
      </p>
      <p style="font-size: var(--md-body-large); color: var(--md-on-surface-variant); line-height: 1.7;">
        Our expertise spans across major cloud platforms, advanced network infrastructures, and comprehensive server solutions. We are committed to staying at the forefront of technological advancements to provide our clients with cutting-edge advantages.
      </p>
    </div>
  `

  // Mission/Vision Section
  const missionVision = document.createElement('section')
  missionVision.className = 'services-section'
  missionVision.innerHTML = `
    <div class="solutions-grid">
      <div class="solution-card card-elevated">
        <span class="solution-tag">Our Mission</span>
        <h3>Empowering Digital Transformation</h3>
        <p>To deliver unparalleled cloud and IT solutions that enable businesses to thrive in a rapidly evolving digital landscape, ensuring security, scalability, and efficiency.</p>
      </div>
      <div class="solution-card card-elevated">
        <span class="solution-tag">Our Vision</span>
        <h3>Leading the Future of Cloud</h3>
        <p>To be the most trusted and innovative cloud and IT partner in Ireland, recognized for our expert guidance and transformative impact on client success.</p>
      </div>
    </div>
  `

  // Consultant Workflow Section
  const workflow = document.createElement('section')
  workflow.className = 'services-section'
  workflow.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-12);">
      <p class="section-label">How We Work</p>
      <h2 class="section-title">Our Consulting Approach</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">A structured methodology that transforms strategy into measurable results</p>
    </div>
    <div class="services-grid" style="grid-template-columns: repeat(2, 1fr);">
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <h3>Discover & Define</h3>
        <p>We start by listening. Through in-depth discussions, we work to understand your unique business ambitions, challenges, and the current state of your technology landscape. Our goal is to jointly define the core problem and the strategic outcomes you seek.</p>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h3>Analyze & Architect</h3>
        <p>With a clear objective, we conduct a structured analysis. We assess your existing systems, identify gaps and opportunities, and design a future-proof architecture. This phase results in a pragmatic, unbiased roadmap that aligns technology with your business goals.</p>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h3>Guide & Implement</h3>
        <p>We transition from planning to action. Whether we lead the implementation or guide your team, we ensure the solution is deployed effectively. We focus on knowledge transfer, enabling your team and managing change for smooth adoption.</p>
      </div>

      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 8v4l2 2"></path>
          </svg>
        </div>
        <h3>Optimize & Evolve</h3>
        <p>Our partnership extends beyond delivery. We monitor performance, ensure systems are running optimally, and provide ongoing strategic support. We help you adapt and innovate, turning technology into a lasting competitive advantage.</p>
      </div>
    </div>
  `

  // Values Section
  const values = document.createElement('section')
  values.className = 'services-section'
  values.innerHTML = `
    <div class="section-header" style="text-align: center;">
      <p class="section-label">What Drives Us</p>
      <h2 class="section-title">Our Core Values</h2>
    </div>
    <div class="services-grid">
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        </div>
        <h3>Excellence</h3>
        <p>We strive for excellence in every project, delivering solutions that exceed expectations and create lasting value.</p>
      </div>
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <h3>Reliability</h3>
        <p>Our clients count on us for consistent, dependable service. We honor our commitments and deliver on time, every time.</p>
      </div>
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3>Partnership</h3>
        <p>We view every client relationship as a partnership. Your success is our success, and we invest in your growth.</p>
      </div>
      <div class="service-card card-elevated">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <h3>Innovation</h3>
        <p>We stay at the forefront of technology, continuously exploring new solutions to give our clients a competitive edge.</p>
      </div>
    </div>
  `

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Ready to Partner with Us?</h2>
      <p>Discover how our expertise can drive your business forward. Let's build something great together.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Book Consultation</a>
        <a href="/case" class="btn btn-tonal">View Case Studies</a>
      </div>
    </div>
  `

  container.appendChild(intro)
  container.appendChild(missionVision)
  container.appendChild(workflow)
  container.appendChild(values)
  container.appendChild(cta)

  return container
}
