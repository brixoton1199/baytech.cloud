import './style.css'
import { initRouter } from './router.js'
import { renderBaytechLogo } from './logoMarkup.js'

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
      ${renderBaytechLogo({ variant: 'mark', className: 'logo-mark', decorative: true })}
      ${renderBaytechLogo({ variant: 'wordmark', className: 'logo-wordmark', decorative: true })}
    </a>
  </div>
  
  <div class="nav-rail-items">
    <a href="/" class="rail-item" data-nav="home" aria-label="AI Plus">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </span>
      <span class="rail-item-label">AI Plus</span>
    </a>

    <a href="/gpu-cloud" class="rail-item" data-nav="gpu-cloud" aria-label="GPU Platform">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="4" y="4" width="16" height="16" rx="3"></rect>
          <rect x="9" y="9" width="6" height="6" rx="1"></rect>
          <path d="M9 1v3"></path>
          <path d="M15 1v3"></path>
          <path d="M9 20v3"></path>
          <path d="M15 20v3"></path>
          <path d="M1 9h3"></path>
          <path d="M1 15h3"></path>
          <path d="M20 9h3"></path>
          <path d="M20 15h3"></path>
        </svg>
      </span>
      <span class="rail-item-label">GPU Platform</span>
    </a>

    <a href="/services" class="rail-item" data-nav="services" aria-label="Managed AI">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      </span>
      <span class="rail-item-label">Managed AI</span>
    </a>

    <a href="/approach" class="rail-item" data-nav="approach" aria-label="Method">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </span>
      <span class="rail-item-label">Method</span>
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

    <span class="rail-item rail-item-disabled" aria-label="Proof Points (Coming Soon)" title="Coming Soon">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      </span>
      <span class="rail-item-label">Proof</span>
    </span>

    <a href="/insights" class="rail-item" data-nav="insights" aria-label="Resources">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      </span>
      <span class="rail-item-label">Resources</span>
    </a>

    <a href="/about" class="rail-item" data-nav="about" aria-label="Company">
      <span class="rail-item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </span>
      <span class="rail-item-label">Company</span>
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
      <span class="rail-fab-text">Contact</span>
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
    <div class="footer-column">
      <h4>AI Plus</h4>
      <ul class="footer-links">
        <li><a href="/services">Model Selection</a></li>
        <li><a href="/services">Private AI</a></li>
        <li><a href="/services">Managed Endpoints</a></li>
        <li><a href="/services">Production Operations</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Platform</h4>
      <ul class="footer-links">
        <li><a href="/gpu-cloud">GPU Platform</a></li>
        <li><a href="/gpu-cloud">Inference</a></li>
        <li><a href="/gpu-cloud">Training and Fine-Tuning</a></li>
        <li><a href="/services">Private Model Deployment</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Solutions</h4>
      <ul class="footer-links">
        <li><a href="/solutions">Private Knowledge Assistant</a></li>
        <li><a href="/solutions">Customer Support AI</a></li>
        <li><a href="/solutions">Document AI</a></li>
        <li><a href="/solutions">Operations Copilot</a></li>
      </ul>
    </div>
    
    <div class="footer-column">
      <h4>Contact</h4>
      <ul class="footer-contact">
        <li>77 Camden Street Lower,</li>
        <li>Dublin 2</li>
        <li>DUBLIN</li>
        <li>Ireland</li>
        <li>D02 XE80</li>
        <li style="margin-top: var(--space-3);">support@baytech.cloud</li>
        <li>+44 7886 066968</li>
      </ul>
    </div>
  </div>
  
  <div class="footer-brand-section">
    <div class="footer-brand">
      ${renderBaytechLogo({ className: 'footer-logo-image', label: 'Baytech Logo' })}
    </div>
    <div class="footer-description-full">
      <p class="footer-description">Baytech is a One-Stop AI Plus provider helping teams choose models, protect private data, run AI workloads on the right GPU and cloud platform, adapt AI to business workflows, and operate production AI systems.</p>
      <p class="footer-description" style="margin-top: var(--space-3);">Bring a model question, data boundary, workload, or business process. Baytech will help map the next AI Plus step.</p>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="footer-copy">© ${new Date().getFullYear()} baytech.cloud</p>
    <div class="footer-legal">
      <span>Privacy</span>
      <span>Terms</span>
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
    <h3 class="side-sheet-title">AI Plus Quick Links</h3>
    <button class="side-sheet-close" aria-label="Close side sheet">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  
  <div class="sheet-card">
    <h4 class="sheet-card-title">AI Plus</h4>
    <div class="sheet-links">
      <a href="/services" class="sheet-link">
        <span class="sheet-link-icon">▣</span>
        Model Selection
      </a>
      <a href="/services" class="sheet-link">
        <span class="sheet-link-icon">◇</span>
        Private AI
      </a>
      <a href="/services" class="sheet-link">
        <span class="sheet-link-icon">↔</span>
        Managed Endpoints
      </a>
      <a href="/gpu-cloud" class="sheet-link">
        <span class="sheet-link-icon">▦</span>
        GPU Platform
      </a>
    </div>
  </div>
  
  <div class="sheet-card">
    <h4 class="sheet-card-title">Resources</h4>
    <div class="sheet-links">
      <a href="/approach" class="sheet-link">
        <span class="sheet-link-icon">📈</span>
        Method
      </a>
      <a href="/insights" class="sheet-link">
        <span class="sheet-link-icon">□</span>
        Resources
      </a>
      <a href="/about" class="sheet-link">
        <span class="sheet-link-icon">○</span>
        Company
      </a>
    </div>
  </div>

  <div class="sheet-cta">
    <h4 class="sheet-cta-title">Start with your AI question</h4>
    <p class="sheet-cta-text">Start with your model, data, workload, or business goal. Baytech will help map the right AI Plus path.</p>
    <a href="/contact" class="sheet-cta-btn">Start an Assessment</a>
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
      <span>AI Plus</span>
    </a>
    <a href="/gpu-cloud" class="mobile-nav-item" data-nav="gpu-cloud" aria-label="GPU Platform">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="4" y="4" width="16" height="16" rx="3"></rect>
        <rect x="9" y="9" width="6" height="6" rx="1"></rect>
        <path d="M9 1v3"></path>
        <path d="M15 1v3"></path>
        <path d="M9 20v3"></path>
        <path d="M15 20v3"></path>
        <path d="M1 9h3"></path>
        <path d="M1 15h3"></path>
        <path d="M20 9h3"></path>
        <path d="M20 15h3"></path>
      </svg>
      <span>GPUs</span>
    </a>
    <a href="/services" class="mobile-nav-item" data-nav="services">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      <span>Managed</span>
    </a>
    <a href="/approach" class="mobile-nav-item" data-nav="approach">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
      <span>Approach</span>
    </a>
    <a href="/solutions" class="mobile-nav-item" data-nav="solutions">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      <span>Solutions</span>
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
    '/approach': 'approach',
    '/solutions': 'solutions',
    '/gpu-cloud': 'gpu-cloud',
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

// ============================================
// ANIMATED NUMBER COUNTER (Phase 3)
// ============================================
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target
      
      // Add animation class for CSS reveal
      el.classList.add('animate-count')
      
      // Get target number from text content
      const text = el.textContent.trim()
      const match = text.match(/^([\d,]+)(.*)$/)
      
      if (match) {
        const targetNum = parseInt(match[1].replace(/,/g, ''), 10)
        const suffix = match[2] || ''
        
        // Respect reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          el.textContent = targetNum.toLocaleString() + suffix
        } else {
          // Animate the number counting up
          animateCounter(el, 0, targetNum, suffix, 1200)
        }
      }
      
      counterObserver.unobserve(el)
    }
  })
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
})

// Counter animation function
const animateCounter = (element, start, end, suffix, duration) => {
  const startTime = performance.now()
  const range = end - start
  
  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function (ease-out-cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(start + (range * easeOut))
    
    element.textContent = current.toLocaleString() + suffix
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = end.toLocaleString() + suffix
    }
  }
  
  requestAnimationFrame(updateCounter)
}

// Observe elements when they're added to the DOM
window.observeScrollAnimations = () => {
  // Wait for DOM to update
  requestAnimationFrame(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      animationObserver.observe(el)
    })
    
    // Observe stat values for counter animation
    document.querySelectorAll('.stat-value').forEach(el => {
      counterObserver.observe(el)
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
// PARALLAX SCROLLING EFFECTS (Phase 4)
// ============================================
// Lightweight parallax that respects reduced motion
const initParallax = () => {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return // Skip parallax for users who prefer reduced motion
  }

  let ticking = false
  
  const updateParallax = () => {
    const scrollY = window.scrollY
    
    // Apply parallax to section backgrounds
    document.querySelectorAll('.section-parallax-bg').forEach(el => {
      const speed = parseFloat(el.dataset.parallaxSpeed) || 0.3
      const yOffset = scrollY * speed
      el.style.transform = `translateY(${yOffset}px)`
    })
    
    // Subtle handoff from the homepage hero into the first content section.
    const hero = document.querySelector('.hero-motion-stage')
    if (hero) {
      const heroRect = hero.getBoundingClientRect()
      if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
        const progress = Math.max(0, Math.min(1, -heroRect.top / (heroRect.height * 0.72)))
        const pseudoShift = progress * 24
        hero.style.setProperty('--parallax-shift', `${pseudoShift}px`)
        hero.style.setProperty('--hero-copy-y', `${Math.round(progress * -18)}px`)
        hero.style.setProperty('--hero-map-y', `${Math.round(progress * 28)}px`)
        hero.style.setProperty('--hero-fade', `${(1 - progress * 0.16).toFixed(3)}`)
      }
    }
    
    ticking = false
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }, { passive: true })
}

// Initialize parallax after DOM is ready
initParallax()

// ============================================
// HOMEPAGE HERO SOFT SNAP
// ============================================
const initHomeHeroSnap = () => {
  let isSnapping = false
  const snapDuration = 620

  const animateHomeHeroSnap = (nextSection) => {
    const startY = window.scrollY
    const targetY = startY + nextSection.getBoundingClientRect().top
    const distance = targetY - startY
    const startTime = performance.now()

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / snapDuration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      window.scrollTo({ top: startY + distance * eased, left: 0, behavior: 'auto' })

      if (progress < 1) {
        requestAnimationFrame(step)
        return
      }

      isSnapping = false
    }

    requestAnimationFrame(step)
  }

  const handleHomeHeroWheel = (event) => {
    if (event.defaultPrevented || event.deltaY <= 4 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
    const target = event.target instanceof Element ? event.target : null
    if (target?.closest('.nav-rail, .mobile-nav, .side-sheet')) return

    const hero = document.querySelector('.hero-motion-stage')
    const nextSection = document.querySelector('#home-next')
    if (!hero || !nextSection || isSnapping) return

    const heroRect = hero.getBoundingClientRect()
    const isStillInFirstViewport = window.scrollY < hero.offsetHeight * 0.42 && heroRect.bottom > window.innerHeight * 0.62
    if (!isStillInFirstViewport) return

    event.preventDefault()
    isSnapping = true
    animateHomeHeroSnap(nextSection)
  }

  window.addEventListener('wheel', handleHomeHeroWheel, { passive: false })
}

initHomeHeroSnap()

// ============================================
// INITIALIZE ROUTER
// ============================================
initRouter()

// Initial scroll animation observation
window.observeScrollAnimations()
