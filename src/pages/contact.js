// Contact Page - MD3 Panel Architecture
import { createBreadcrumb } from '../router.js'

export function renderContact() {
  const container = document.createElement('div')
  container.className = 'page-contact'

  // Breadcrumb
  const breadcrumb = createBreadcrumb('Contact Us')
  container.appendChild(breadcrumb)

  // Page Header
  const pageHeader = document.createElement('section')
  pageHeader.className = 'page-header'
  pageHeader.innerHTML = `
    <p class="section-label">Get in Touch</p>
    <h1>Contact Us</h1>
    <p>We're ready to help you with your cloud and IT infrastructure needs</p>
  `

  // Contact Section with Form
  const contactSection = document.createElement('section')
  contactSection.className = 'contact-section'
  contactSection.innerHTML = `
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Let's Discuss Your Project</h2>
        <p>Whether you're looking to optimize your cloud spend, secure your network, or streamline your operations, our experts are here to provide tailored solutions.</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <h4>Our Office</h4>
              <p>Dublin, Ireland</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div>
              <h4>Email Us</h4>
              <p>hello@baytech.cloud</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+353 1 XXX XXXX</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">⏰</span>
            <div>
              <h4>Business Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <div class="form-header">
          <h3>Send us a message</h3>
          <p>Fill out the form below and we'll get back to you shortly.</p>
        </div>
        <form>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required>
            </div>
          </div>
          <div class="form-group">
            <label for="company">Company (Optional)</label>
            <input type="text" id="company" name="company" placeholder="Your Company Name">
          </div>
          <div class="form-group">
            <label for="service">Service of Interest</label>
            <select id="service" name="service">
              <option value="">Select a Service</option>
              <option value="cloud-consulting">Cloud Consulting</option>
              <option value="network-architecture">Network Architecture</option>
              <option value="server-solutions">Server Solutions</option>
              <option value="devops-automation">DevOps & Automation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about your project or question..." required></textarea>
          </div>
          <button type="submit" class="btn btn-filled" style="width: 100%;">Send Message</button>
        </form>
      </div>
    </div>
  `

  // CTA Section
  const cta = document.createElement('section')
  cta.className = 'cta-section'
  cta.innerHTML = `
    <div class="cta-content">
      <h2>Prefer a Direct Conversation?</h2>
      <p>Reach out to us via phone or email, or connect with us on social media.</p>
      <div class="cta-buttons">
        <a href="mailto:hello@baytech.cloud" class="btn btn-filled">Email Us</a>
        <a href="tel:+3531XXXXXXX" class="btn btn-tonal">Call Us</a>
      </div>
    </div>
  `

  container.appendChild(pageHeader)
  container.appendChild(contactSection)
  container.appendChild(cta)

  return container
}
