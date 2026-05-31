import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const mainSource = await readFile(new URL('../src/main.js', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')

test('homepage opts into a restrained scroll handoff for the first viewport', () => {
  assert.match(homeSource, /hero\.className = 'hero hero-with-map hero-motion-stage'/)
  assert.match(homeSource, /chipsSection\.id = 'home-next'/)
  assert.match(mainSource, /querySelector\('\.hero-motion-stage'\)/)
  assert.match(mainSource, /--hero-copy-y/)
  assert.match(mainSource, /--hero-map-y/)
  assert.match(mainSource, /--hero-fade/)
  assert.match(styleSource, /\.hero-with-map\.hero-motion-stage\s*{/)
  assert.match(
    styleSource,
    /\.hero-with-map\.hero-motion-stage \.hero-content-left\s*{[\s\S]*translate3d\(0,\s*var\(--hero-copy-y,\s*0px\),\s*0\)/
  )
  assert.match(
    styleSource,
    /\.hero-with-map\.hero-motion-stage \.hero-map-container\s*{[\s\S]*translate3d\(0,\s*var\(--hero-map-y,\s*0px\),\s*0\)/
  )
  assert.doesNotMatch(styleSource, /\.hero-with-map\.hero-motion-stage[\s\S]{0,900}animation:\s*[^;]*infinite/)
})

test('homepage hero lightly snaps to the next section on the first downward wheel', () => {
  assert.match(mainSource, /initHomeHeroSnap/)
  assert.match(mainSource, /animateHomeHeroSnap/)
  assert.match(mainSource, /addEventListener\('wheel',\s*handleHomeHeroWheel,\s*\{\s*passive:\s*false\s*\}\)/)
  assert.match(mainSource, /document\.querySelector\('\.hero-motion-stage'\)/)
  assert.match(mainSource, /document\.querySelector\('#home-next'\)/)
  assert.match(mainSource, /event\.preventDefault\(\)/)
  assert.match(mainSource, /requestAnimationFrame\(step\)/)
  assert.match(mainSource, /window\.scrollTo\(\{\s*top:/)
  assert.doesNotMatch(mainSource, /nextSection\.scrollIntoView/)
  assert.doesNotMatch(mainSource, /if \(window\.matchMedia\('\(prefers-reduced-motion:\s*reduce\)'\)\.matches\) return/)
  assert.doesNotMatch(mainSource, /behavior:\s*prefersReducedMotion \? 'auto' : 'smooth'/)
})

test('cards share one Baytech motion language instead of page-specific hover effects', () => {
  assert.match(styleSource, /--motion-card-lift:\s*-4px;/)
  assert.match(styleSource, /--motion-card-duration:\s*var\(--md-duration-medium1\);/)
  assert.match(styleSource, /--motion-card-shadow-rest:/)
  assert.match(styleSource, /--motion-card-shadow-hover:/)
  assert.match(
    styleSource,
    /\.card-elevated,\s*\.service-card,\s*\.solution-card,\s*\.case-card,\s*\.insight-card,\s*\.approach-card,\s*\.sidebar-card,\s*\.contact-form,\s*\.contact-icon,\s*\.company-profile-container\s*{[\s\S]*transition:\s*transform var\(--motion-card-duration\)/
  )
  assert.match(
    styleSource,
    /\.service-card:hover,\s*\.solution-card:hover,\s*\.case-card:hover,\s*\.insight-card:hover,\s*\.approach-card:hover,\s*\.sidebar-card:hover,\s*\.contact-form:hover,\s*\.company-profile-container:hover\s*{[\s\S]*transform:\s*translateY\(var\(--motion-card-lift\)\)/
  )
  assert.match(
    styleSource,
    /\.service-card:focus-visible,\s*\.solution-card:focus-visible,\s*\.case-card:focus-visible,\s*\.insight-card:focus-visible,\s*\.approach-card:focus-visible\s*{[\s\S]*transform:\s*translateY\(var\(--motion-card-lift\)\)/
  )
})

test('reduced motion removes scroll handoff and card lift while preserving readable state changes', () => {
  assert.match(
    styleSource,
    /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*\.hero-motion-stage\s*{[\s\S]*--hero-copy-y:\s*0px !important;[\s\S]*--hero-map-y:\s*0px !important;[\s\S]*--hero-fade:\s*1 !important;/
  )
  assert.match(
    styleSource,
    /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*\.card-elevated,\s*\.service-card,\s*\.solution-card,\s*\.case-card,\s*\.insight-card,\s*\.approach-card,\s*\.sidebar-card,\s*\.contact-form,\s*\.contact-icon,\s*\.company-profile-container\s*{[\s\S]*transform:\s*none !important;/
  )
})
