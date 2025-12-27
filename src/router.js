// SPA Router - handles client-side navigation with MD3 Container Transform
import { renderHome } from './pages/home.js'
import { renderServices } from './pages/services.js'
import { renderSolutions } from './pages/solutions.js'
import { renderCase } from './pages/case.js'
import { renderInsights } from './pages/insights.js'
import { renderAbout } from './pages/about.js'
import { renderContact } from './pages/contact.js'

// Route definitions
const routes = {
  '/': renderHome,
  '/index.html': renderHome,
  '/services': renderServices,
  '/services.html': renderServices,
  '/solutions': renderSolutions,
  '/solutions.html': renderSolutions,
  '/case': renderCase,
  '/case.html': renderCase,
  '/insights': renderInsights,
  '/insights.html': renderInsights,
  '/about': renderAbout,
  '/about.html': renderAbout,
  '/contact': renderContact,
  '/contact.html': renderContact,
}

let currentPath = null

// Page name mappings for breadcrumbs
const pageNames = {
  '/': 'Home',
  '/services': 'Services',
  '/solutions': 'Solutions',
  '/case': 'Case Studies',
  '/insights': 'Insights',
  '/about': 'About',
  '/contact': 'Contact'
}

// Create MD3-styled breadcrumb element
export function createBreadcrumb(pageName, parentPath = null, parentName = null) {
  const breadcrumb = document.createElement('nav')
  breadcrumb.className = 'breadcrumb'
  breadcrumb.setAttribute('aria-label', 'Breadcrumb')
  
  let html = `<a href="/">Home</a>`
  
  if (parentPath && parentName) {
    html += `<span class="separator">›</span><a href="${parentPath}">${parentName}</a>`
  }
  
  html += `<span class="separator">›</span><span class="current">${pageName}</span>`
  
  breadcrumb.innerHTML = html
  return breadcrumb
}

// Navigate to a route with clean fade transition
export function navigate(path, pushState = true) {
  // Don't navigate if already on this page
  if (path === currentPath) return

  const contentContainer = document.querySelector('#page-content')
  if (!contentContainer) return

  // Get the render function for this route
  const render = routes[path] || routes['/']

  // CLEAN TRANSITION: Fade out → Replace → Fade in (no overlap)
  // Step 1: Start fade out
  contentContainer.classList.add('page-transitioning-out')

  // Step 2: After fade out completes, swap content
  setTimeout(() => {
    // Clear old content completely
    contentContainer.innerHTML = ''
    
    // Render new page content
    const pageContent = render()
    contentContainer.appendChild(pageContent)
    
    // Remove fade-out class, add fade-in class
    contentContainer.classList.remove('page-transitioning-out')
    contentContainer.classList.add('page-transitioning-in')
    
    // Scroll to top instantly (no jarring scroll during transition)
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Update URL if needed
    if (pushState && path !== window.location.pathname) {
      history.pushState({}, '', path)
    }

    // Update active nav state
    if (typeof window.updateActiveNav === 'function') {
      window.updateActiveNav(path)
    }
    
    currentPath = path

    // Step 3: After fade in completes, clean up
    setTimeout(() => {
      contentContainer.classList.remove('page-transitioning-in')
      
      // Trigger scroll animations for new content
      if (typeof window.observeScrollAnimations === 'function') {
        window.observeScrollAnimations()
      }
    }, 200) // Fade in duration
    
  }, 150) // Fade out duration (quick)
}

// Initialize router
export function initRouter() {
  // Handle link clicks
  document.addEventListener('click', (e) => {
    // Find closest anchor tag
    const anchor = e.target.closest('a')
    if (!anchor) return

    const href = anchor.getAttribute('href')
    if (!href) return

    // Skip external links, hash links, mailto, tel
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return

    // Check if this is an internal route
    const normalizedHref = href.replace('.html', '')
    if (routes[href] || routes[normalizedHref]) {
      e.preventDefault()
      navigate(href)
    }
  })

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    navigate(window.location.pathname, false)
  })

  // Initial page load
  navigate(window.location.pathname, false)
}
