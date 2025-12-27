// Case Studies Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderCase() {
  const container = document.createElement('div')
  container.className = 'page-case'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('Case Studies')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Our Impact</p>
    <h1>Case Studies</h1>
    <p>Real-world results from our cloud and IT solutions</p>
  `

  // Case Studies Grid
  const caseStudies = document.createElement('section')
  caseStudies.className = 'services-section'
  caseStudies.innerHTML = `
    <div class="solutions-grid">
      <div class="case-card card-elevated">
        <span class="case-tag">Cloud Migration</span>
        <h3>Global Corp: Seamless Cloud Transition</h3>
        <p>Migrated a legacy on-premise infrastructure to a scalable, cost-effective AWS cloud environment, reducing operational overhead by 35%.</p>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-value">-35%</span>
            <span class="case-stat-label">Costs</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">99.9%</span>
            <span class="case-stat-label">Uptime</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">30 Days</span>
            <span class="case-stat-label">Migration</span>
          </div>
        </div>
        <a href="/contact" class="btn btn-text">View Case Study →</a>
      </div>

      <div class="case-card card-elevated">
        <span class="case-tag">Network Optimization</span>
        <h3>Tech Innovators: High-Performance Network</h3>
        <p>Designed and implemented a robust SD-WAN solution, improving network performance by 60% and enhancing security across multiple branch offices.</p>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-value">+60%</span>
            <span class="case-stat-label">Performance</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">Zero</span>
            <span class="case-stat-label">Downtime</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">5</span>
            <span class="case-stat-label">Offices</span>
          </div>
        </div>
        <a href="/contact" class="btn btn-text">View Case Study →</a>
      </div>

      <div class="case-card card-elevated">
        <span class="case-tag">DevOps Implementation</span>
        <h3>FinTech Startup: CI/CD Pipeline</h3>
        <p>Implemented a fully automated CI/CD pipeline, reducing deployment time from days to hours and enabling rapid feature releases.</p>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-value">10x</span>
            <span class="case-stat-label">Faster Deploy</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">-80%</span>
            <span class="case-stat-label">Manual Work</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">Daily</span>
            <span class="case-stat-label">Releases</span>
          </div>
        </div>
        <a href="/contact" class="btn btn-text">View Case Study →</a>
      </div>

      <div class="case-card card-elevated">
        <span class="case-tag">Infrastructure Modernization</span>
        <h3>Healthcare Provider: HIPAA Compliance</h3>
        <p>Modernized healthcare IT infrastructure ensuring HIPAA compliance, improved data security, and enabled telehealth capabilities.</p>
        <div class="case-stats">
          <div class="case-stat">
            <span class="case-stat-value">100%</span>
            <span class="case-stat-label">Compliant</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">+40%</span>
            <span class="case-stat-label">Efficiency</span>
          </div>
          <div class="case-stat">
            <span class="case-stat-value">Secure</span>
            <span class="case-stat-label">Telehealth</span>
          </div>
        </div>
        <a href="/contact" class="btn btn-text">View Case Study →</a>
      </div>
    </div>
  `

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Ready to See Your Success Story?</h2>
      <p>Let's discuss how baytech.cloud can help your business achieve similar transformative results.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Book Consultation</a>
        <a href="/services" class="btn btn-tonal">Explore Services</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(caseStudies)
  container.appendChild(cta)

  return container
}
