// Insights Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderInsights() {
  const container = document.createElement('div')
  container.className = 'page-insights'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('Insights')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Knowledge Hub</p>
    <h1>Insights & Articles</h1>
    <p>Stay informed with the latest in cloud technology and IT solutions</p>
  `

  // Insights Grid
  const insightsGrid = document.createElement('section')
  insightsGrid.className = 'services-section'
  insightsGrid.innerHTML = `
    <div class="solutions-grid">
      <div class="insight-card card-elevated">
        <div class="insight-meta">
          <span class="insight-tag">Cloud Computing</span>
          <span class="insight-date">Dec 15, 2024</span>
        </div>
        <h3>The Future of Hybrid Cloud: Trends to Watch</h3>
        <p>Explore the evolving landscape of hybrid cloud strategies and how they can benefit your enterprise in 2025 and beyond.</p>
        <a href="#" class="btn btn-text">Read Article →</a>
      </div>

      <div class="insight-card card-elevated">
        <div class="insight-meta">
          <span class="insight-tag">Cybersecurity</span>
          <span class="insight-date">Nov 28, 2024</span>
        </div>
        <h3>5 Essential Steps for SMB Cybersecurity</h3>
        <p>Protect your small to medium-sized business from growing cyber threats with these actionable security measures.</p>
        <a href="#" class="btn btn-text">Read Article →</a>
      </div>

      <div class="insight-card card-elevated">
        <div class="insight-meta">
          <span class="insight-tag">DevOps</span>
          <span class="insight-date">Nov 10, 2024</span>
        </div>
        <h3>Automating Your CI/CD Pipeline with GitLab</h3>
        <p>A practical guide to setting up and optimizing continuous integration and deployment using GitLab for faster releases.</p>
        <a href="#" class="btn btn-text">Read Article →</a>
      </div>

      <div class="insight-card card-elevated">
        <div class="insight-meta">
          <span class="insight-tag">Network Architecture</span>
          <span class="insight-date">Oct 22, 2024</span>
        </div>
        <h3>SD-WAN vs. MPLS: Choosing the Right Network</h3>
        <p>A comprehensive comparison to help you decide between SD-WAN and MPLS for your modern network infrastructure needs.</p>
        <a href="#" class="btn btn-text">Read Article →</a>
      </div>
    </div>
  `

  // Newsletter Section
  const newsletter = document.createElement('section')
  newsletter.className = 'newsletter-section'
  newsletter.innerHTML = `
    <div class="newsletter-content">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest insights, industry news, and exclusive offers.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Your email address" aria-label="Your email address" required>
        <button type="submit" class="btn btn-filled">Subscribe</button>
      </form>
    </div>
  `

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Have a Question?</h2>
      <p>Our experts are ready to provide clarity and solutions for your most pressing IT challenges.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Book Consultation</a>
        <a href="/about" class="btn btn-tonal">Learn About Us</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(insightsGrid)
  container.appendChild(newsletter)
  container.appendChild(cta)

  return container
}
