import wordmarkSvgSource from './assets/baytech-logo.svg?raw'
import markSvgSource from './assets/baytech-logo-mark.svg?raw'

const logoSources = {
  mark: markSvgSource,
  wordmark: wordmarkSvgSource,
}

export function renderBaytechLogo({
  variant = 'wordmark',
  className = '',
  label = 'Baytech Logo',
  decorative = false,
} = {}) {
  const template = document.createElement('template')
  template.innerHTML = logoSources[variant].trim()
  const svg = template.content.firstElementChild

  svg.removeAttribute('style')
  svg.removeAttribute('aria-labelledby')
  svg.querySelectorAll('title').forEach((title) => title.remove())
  svg.classList.add('baytech-logo-svg', ...className.split(/\s+/).filter(Boolean))
  svg.setAttribute('focusable', 'false')

  if (decorative) {
    svg.removeAttribute('role')
    svg.setAttribute('aria-hidden', 'true')
  } else {
    svg.setAttribute('role', 'img')
    svg.setAttribute('aria-label', label)
  }

  return svg.outerHTML
}
