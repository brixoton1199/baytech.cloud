import './style.css'
import { initRouter } from './router.js'

// Create app structure
const app = document.querySelector('#app')

// ============================================
// NAVIGATION RAIL (Left Side)
// ============================================
const navRail = document.createElement('nav')
navRail.className = 'nav-rail'
navRail.innerHTML = `
  <div class="nav-rail-header">
    <a href="/" class="nav-rail-logo" aria-label="baytech.cloud home">
      <span class="logo-icon">◆</span>
      <span class="logo-text">baytech.cloud</span>
    </a>
  </div>
  
  <div class="nav-rail-items">
    <a href="/" class="rail-item" data-nav="home" aria-label="Home">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </span>
      <span class="rail-item-label">Home</span>
    </a>
    
    <a href="/services" class="rail-item" data-nav="services" aria-label="Services">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      </span>
      <span class="rail-item-label">Services</span>
    </a>
    
    <a href="/solutions" class="rail-item" data-nav="solutions" aria-label="Solutions">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      </span>
      <span class="rail-item-label">Solutions</span>
    </a>
    
    <a href="/case" class="rail-item" data-nav="case" aria-label="Case Studies">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </span>
      <span class="rail-item-label">Case</span>
    </a>
    
    <a href="/insights" class="rail-item" data-nav="insights" aria-label="Insights">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      </span>
      <span class="rail-item-label">Insights</span>
    </a>
    
    <a href="/about" class="rail-item" data-nav="about" aria-label="About">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </span>
      <span class="rail-item-label">About</span>
    </a>
    
    <span class="rail-item rail-item-disabled" aria-label="Live Status (Coming Soon)" title="Coming Soon">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v2"></path>
          <path d="M12 21v2"></path>
          <path d="M4.22 4.22l1.42 1.42"></path>
          <path d="M18.36 18.36l1.42 1.42"></path>
          <path d="M1 12h2"></path>
          <path d="M21 12h2"></path>
          <path d="M4.22 19.78l1.42-1.42"></path>
          <path d="M18.36 5.64l1.42-1.42"></path>
        </svg>
      </span>
      <span class="rail-item-label">Live Status</span>
    </span>
  </div>
  
  <div class="nav-rail-fab">
    <a href="/contact" class="rail-fab" aria-label="Contact">
      <span class="rail-fab-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </span>
      <span class="rail-fab-text">Contact Us</span>
    </a>
  </div>
`

// ============================================
// MAIN PANE (Center Content)
// ============================================
const mainPane = document.createElement('div')
mainPane.className = 'main-pane'

const mainContent = document.createElement('main')
mainContent.className = 'main-content'

const pageContent = document.createElement('div')
pageContent.id = 'page-content'
pageContent.className = 'page-content'

mainContent.appendChild(pageContent)

// ============================================
// FOOTER
// ============================================
const footer = document.createElement('footer')
footer.className = 'footer'
footer.innerHTML = `
  <div class="footer-grid">
    <div class="footer-column footer-about">
      <div class="footer-brand">
        <span class="logo-icon">◆</span>
        <span class="footer-brand-text">baytech.cloud</span>
      </div>
      <p class="footer-description">Dublin-based cloud infrastructure and IT solutions. Reducing costs by 40% with guaranteed results.</p>
      <div class="footer-social">
        <a href="https://linkedin.com/company/baytech-cloud" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://twitter.com/baytech_cloud" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://github.com/baytech-cloud" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
    
    <div class="footer-column">
      <h4>Services</h4>
      <ul class="footer-links">
        <li><a href="/services">Cloud Consulting</a></li>
        <li><a href="/services">Network Architecture</a></li>
        <li><a href="/services">Server Solutions</a></li>
        <li><a href="/services">DevOps & Automation</a></li>
      </ul>
    </div>
    
    <div class="footer-column">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/case">Case Studies</a></li>
        <li><a href="/insights">Insights</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    
    <div class="footer-column">
      <h4>Contact</h4>
      <ul class="footer-contact">
        <li>Dublin, Ireland</li>
        <li>hello@baytech.cloud</li>
        <li>+353 1 XXX XXXX</li>
      </ul>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="footer-copy">© ${new Date().getFullYear()} baytech.cloud</p>
    <div class="footer-legal">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
`

mainPane.appendChild(mainContent)
mainPane.appendChild(footer)

// ============================================
// SIDE SHEET (Right Side - Contextual)
// ============================================
const sideSheet = document.createElement('aside')
sideSheet.className = 'side-sheet'
sideSheet.innerHTML = `
  <div class="side-sheet-header">
    <h3 class="side-sheet-title">Quick Links</h3>
    <button class="side-sheet-close" aria-label="Close side sheet">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  
  <div class="sheet-card">
    <h4 class="sheet-card-title">Services</h4>
    <div class="sheet-links">
      <a href="/services#cloud-consulting" class="sheet-link">
        <span class="sheet-link-icon">☁️</span>
        Cloud Consulting
      </a>
      <a href="/services#network-architecture" class="sheet-link">
        <span class="sheet-link-icon">🔗</span>
        Network Architecture
      </a>
      <a href="/services#server-solutions" class="sheet-link">
        <span class="sheet-link-icon">🖥️</span>
        Server Solutions
      </a>
      <a href="/services#devops-automation" class="sheet-link">
        <span class="sheet-link-icon">⚙️</span>
        DevOps & Automation
      </a>
    </div>
  </div>
  
  <div class="sheet-card">
    <h4 class="sheet-card-title">Resources</h4>
    <div class="sheet-links">
      <a href="/case" class="sheet-link">
        <span class="sheet-link-icon">📊</span>
        Case Studies
      </a>
      <a href="/insights" class="sheet-link">
        <span class="sheet-link-icon">📰</span>
        Blog & Insights
      </a>
      <a href="/about" class="sheet-link">
        <span class="sheet-link-icon">ℹ️</span>
        About Us
      </a>
    </div>
  </div>
  
  <div class="sheet-cta">
    <h4 class="sheet-cta-title">Need Help?</h4>
    <p class="sheet-cta-text">Book a free consultation with our cloud experts</p>
    <a href="/contact" class="sheet-cta-btn">Get Started</a>
  </div>
`

// ============================================
// MOBILE NAVIGATION (Bottom Bar)
// ============================================
const mobileNav = document.createElement('nav')
mobileNav.className = 'mobile-nav'
mobileNav.innerHTML = `
  <div class="mobile-nav-items">
    <a href="/" class="mobile-nav-item" data-nav="home">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      <span>Home</span>
    </a>
    <a href="/services" class="mobile-nav-item" data-nav="services">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      <span>Services</span>
    </a>
    <a href="/solutions" class="mobile-nav-item" data-nav="solutions">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      <span>Solutions</span>
    </a>
    <a href="/about" class="mobile-nav-item" data-nav="about">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
      <span>About</span>
    </a>
    <a href="/contact" class="mobile-nav-item" data-nav="contact">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      <span>Contact</span>
    </a>
  </div>
`

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.createElement('button')
backToTop.className = 'back-to-top'
backToTop.setAttribute('aria-label', 'Back to top')
backToTop.innerHTML = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
`

// ============================================
// BUILD APP STRUCTURE
// ============================================
app.innerHTML = ''
app.appendChild(navRail)
app.appendChild(mainPane)
app.appendChild(sideSheet)
app.appendChild(mobileNav)
app.appendChild(backToTop)

// ============================================
// EVENT HANDLERS
// ============================================

// Side Sheet Toggle
const sideSheetClose = sideSheet.querySelector('.side-sheet-close')
sideSheetClose.addEventListener('click', () => {
  sideSheet.classList.remove('visible')
  document.body.classList.remove('sheet-open')
})

// Show side sheet on specific interactions (optional)
// For now, we'll keep it hidden by default and let pages show it if needed
window.toggleSideSheet = (show) => {
  if (show) {
    sideSheet.classList.add('visible')
    document.body.classList.add('sheet-open')
  } else {
    sideSheet.classList.remove('visible')
    document.body.classList.remove('sheet-open')
  }
}

// Back to Top
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible')
  } else {
    backToTop.classList.remove('visible')
  }
})

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Update active nav state
window.updateActiveNav = (path) => {
  // Normalize path
  let normalizedPath = path
  if (normalizedPath.endsWith('.html')) {
    normalizedPath = normalizedPath.replace('.html', '')
  }
  if (normalizedPath === '/index' || normalizedPath === '') {
    normalizedPath = '/'
  }

  // Map paths to nav keys
  const pathToNav = {
    '/': 'home',
    '/services': 'services',
    '/solutions': 'solutions',
    '/case': 'case',
    '/insights': 'insights',
    '/about': 'about',
    '/contact': 'contact'
  }

  const activeNav = pathToNav[normalizedPath] || 'home'

  // Update rail items
  document.querySelectorAll('.rail-item').forEach(item => {
    item.classList.remove('active')
    if (item.dataset.nav === activeNav) {
      item.classList.add('active')
    }
  })

  // Update mobile nav items
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.remove('active')
    if (item.dataset.nav === activeNav) {
      item.classList.add('active')
    }
  })
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1
}

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
      // Optionally unobserve after animation
      animationObserver.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe elements when they're added to the DOM
window.observeScrollAnimations = () => {
  // Wait for DOM to update
  requestAnimationFrame(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      animationObserver.observe(el)
    })
  })
}

// Re-observe after page navigation
const originalPushState = history.pushState
history.pushState = function() {
  originalPushState.apply(this, arguments)
  setTimeout(window.observeScrollAnimations, 100)
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgress = document.createElement('div')
scrollProgress.className = 'scroll-progress'
scrollProgress.innerHTML = '<div class="scroll-progress-bar"></div>'
document.body.appendChild(scrollProgress)

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  
  const progressBar = scrollProgress.querySelector('.scroll-progress-bar')
  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`
  }
}, { passive: true })

// ============================================
// INITIALIZE ROUTER
// ============================================
initRouter()

// Initial scroll animation observation
window.observeScrollAnimations()
