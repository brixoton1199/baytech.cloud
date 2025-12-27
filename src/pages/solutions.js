// Solutions Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderSolutions() {
  const container = document.createElement('div')
  container.className = 'page-solutions'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('Solutions')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Industry Solutions</p>
    <h1>Solutions</h1>
    <p>Tailored technology solutions for every industry and business size</p>
  `

  // Two-column layout with sidebar
  const layoutWrapper = document.createElement('div')
  layoutWrapper.className = 'page-with-sidebar'

  // Main Content
  const mainContent = document.createElement('div')
  mainContent.className = 'page-main'
  mainContent.innerHTML = `
    <div class="solutions-grid">
      <div class="solution-card card-elevated">
        <span class="solution-tag">Enterprise</span>
        <h3>Enterprise Cloud Solutions</h3>
        <p>Comprehensive cloud infrastructure designed for large-scale operations. Scalable, secure, and cost-effective solutions for enterprises.</p>
        <ul class="feature-list">
          <li>Custom cloud architecture</li>
          <li>Advanced security & compliance</li>
          <li>24/7 enterprise support</li>
        </ul>
        <a href="/contact" class="btn btn-filled">Get Started</a>
      </div>

      <div class="solution-card card-elevated">
        <span class="solution-tag">SMB</span>
        <h3>Small Business Solutions</h3>
        <p>Affordable, scalable IT solutions designed to help small businesses compete with enterprise-level technology.</p>
        <ul class="feature-list">
          <li>Managed IT services</li>
          <li>Cloud migration for SMBs</li>
          <li>Cost-effective infrastructure</li>
        </ul>
        <a href="/contact" class="btn btn-outlined">Learn More</a>
      </div>
      
      <div class="solution-card card-elevated">
        <span class="solution-tag">Startup</span>
        <h3>Startup Infrastructure</h3>
        <p>Launch-ready cloud infrastructure that scales with your growth. Pay only for what you use, optimize as you grow.</p>
        <ul class="feature-list">
          <li>Rapid deployment</li>
          <li>Scalable cloud resources</li>
          <li>DevOps integration</li>
        </ul>
        <a href="/contact" class="btn btn-outlined">Learn More</a>
      </div>
      
      <div class="solution-card card-elevated">
        <span class="solution-tag">Healthcare</span>
        <h3>Healthcare IT</h3>
        <p>HIPAA-compliant solutions for healthcare providers. Secure patient data management and telehealth infrastructure.</p>
        <ul class="feature-list">
          <li>Data privacy & compliance</li>
          <li>Secure telehealth platforms</li>
          <li>Electronic health records</li>
        </ul>
        <a href="/contact" class="btn btn-outlined">Learn More</a>
      </div>
    </div>
  `

  // Sidebar
  const sidebar = document.createElement('aside')
  sidebar.className = 'page-sidebar'
  sidebar.innerHTML = `
    <div class="sidebar-card">
      <h3>Industry Solutions</h3>
      <div class="sidebar-links">
        <a href="#" class="active">🏢 Enterprise</a>
        <a href="#">💼 Small Business</a>
        <a href="#">🚀 Startup</a>
        <a href="#">🏥 Healthcare</a>
      </div>
    </div>
    
    <div class="sidebar-card">
      <h3>Related Services</h3>
      <div class="sidebar-links">
        <a href="/services">☁️ Cloud Consulting</a>
        <a href="/services">🔗 Network Architecture</a>
        <a href="/services">🖥️ Server Solutions</a>
      </div>
    </div>
    
    <div class="sidebar-card sidebar-cta">
      <h3>Get Started</h3>
      <p>Find the right solution for your industry</p>
      <a href="/contact" class="btn">Request Consultation</a>
    </div>
  `

  layoutWrapper.appendChild(mainContent)
  layoutWrapper.appendChild(sidebar)

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Don't See Your Industry?</h2>
      <p>We create custom solutions for businesses across all sectors. Let's discuss your specific needs.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Book Consultation</a>
        <a href="/case" class="btn btn-tonal">View Case Studies</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(layoutWrapper)
  container.appendChild(cta)

  return container
}
