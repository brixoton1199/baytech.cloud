// About Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderAbout() {
  const container = document.createElement('div')
  container.className = 'page-about'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('About Us')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Our Story</p>
    <h1>About baytech.cloud</h1>
    <p>Driving innovation and delivering excellence in cloud and IT solutions</p>
  `

  // Intro Section
  const intro = document.createElement('section')
  intro.className = 'services-section'
  intro.innerHTML = `
    <div class="section-header">
      <p class="section-label">Who We Are</p>
      <h2 class="section-title">Your Trusted Technology Partner</h2>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-8); align-items: start;">
      <div>
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
      <div class="card card-elevated" style="padding: var(--space-8);">
        <div style="display: flex; flex-direction: column; gap: var(--space-6);">
          <div>
            <p style="font-size: var(--md-display-small); font-weight: 400; color: var(--md-primary); font-family: var(--md-font-brand);">50+</p>
            <p style="font-size: var(--md-label-large); color: var(--md-on-surface-variant);">Projects Delivered</p>
          </div>
          <div>
            <p style="font-size: var(--md-display-small); font-weight: 400; color: var(--md-primary); font-family: var(--md-font-brand);">€2M+</p>
            <p style="font-size: var(--md-label-large); color: var(--md-on-surface-variant);">Client Savings</p>
          </div>
          <div>
            <p style="font-size: var(--md-display-small); font-weight: 400; color: var(--md-primary); font-family: var(--md-font-brand);">24/7</p>
            <p style="font-size: var(--md-label-large); color: var(--md-on-surface-variant);">Support Available</p>
          </div>
        </div>
      </div>
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

  container.appendChild(pageHeader)
  container.appendChild(intro)
  container.appendChild(missionVision)
  container.appendChild(values)
  container.appendChild(cta)

  return container
}
