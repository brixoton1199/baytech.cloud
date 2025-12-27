// Services Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderServices() {
  const container = document.createElement('div')
  container.className = 'page-services'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('Services')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">What We Do</p>
    <h1>Our Services</h1>
    <p>Comprehensive cloud and IT solutions tailored to your business needs</p>
  `

  // Two-column layout with sidebar
  const layoutWrapper = document.createElement('div')
  layoutWrapper.className = 'page-with-sidebar'

  // Main Content
  const mainContent = document.createElement('div')
  mainContent.className = 'page-main'
  mainContent.innerHTML = `
    <div class="services-grid">
      <div class="service-card card-elevated" id="cloud-consulting">
        <span class="service-number">01</span>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        </div>
        <h3>Cloud Consulting</h3>
        <p>Cloud costs spiraling out of control? We help you navigate the complexities of cloud transformation with expert guidance, ensuring optimal performance and guaranteed cost savings.</p>
        <a href="/contact" class="btn btn-tonal">Get Started</a>
      </div>

      <div class="service-card card-elevated" id="network-architecture">
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
        <a href="/contact" class="btn btn-tonal">Get Started</a>
      </div>

      <div class="service-card card-elevated" id="server-solutions">
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
        <a href="/contact" class="btn btn-tonal">Get Quote</a>
      </div>

      <div class="service-card card-elevated" id="devops-automation">
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
        <a href="/contact" class="btn btn-tonal">Get Started</a>
      </div>
    </div>
  `

  // Sidebar
  const sidebar = document.createElement('aside')
  sidebar.className = 'page-sidebar'
  sidebar.innerHTML = `
    <div class="sidebar-card">
      <h3>Our Services</h3>
      <div class="sidebar-links">
        <a href="#cloud-consulting" class="active">☁️ Cloud Consulting</a>
        <a href="#network-architecture">🔗 Network Architecture</a>
        <a href="#server-solutions">🖥️ Server Solutions</a>
        <a href="#devops-automation">⚙️ DevOps & Automation</a>
      </div>
    </div>
    
    <div class="sidebar-card sidebar-cta">
      <h3>Need Help?</h3>
      <p>Let's discuss your project requirements</p>
      <a href="/contact" class="btn">Get a Quote</a>
    </div>
  `

  layoutWrapper.appendChild(mainContent)
  layoutWrapper.appendChild(sidebar)

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Need a Custom Solution?</h2>
      <p>Every business is unique. Let's discuss your specific requirements and create a tailored solution with guaranteed results.</p>
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
