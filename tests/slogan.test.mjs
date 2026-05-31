import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const approvedSlogan = 'Your One-Stop AI Plus'

const homeSource = await readFile(new URL('../src/pages/home.js', import.meta.url), 'utf8')
const indexSource = await readFile(new URL('../index.html', import.meta.url), 'utf8')
const styleSource = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')

test('homepage hero uses the approved Baytech slogan as the primary headline', () => {
  assert.match(homeSource, /<h1>Your <span class="hero-slogan-nowrap">One-Stop<\/span> AI Plus<\/h1>/)
  assert.doesNotMatch(homeSource, /<h1>Technology Strategy, Realized\.<\/h1>/)
})

test('page metadata reflects the approved Baytech slogan and AI positioning', () => {
  assert.match(indexSource, new RegExp(`<title>Baytech \\| ${approvedSlogan}</title>`))
  assert.match(indexSource, /<meta name="description" content="[^"]*Your One-Stop AI Plus[^"]*AI[^"]*cloud[^"]*infrastructure[^"]*">/)
})

test('homepage keeps One-Stop together in responsive slogan wrapping', () => {
  assert.match(styleSource, /\.hero-slogan-nowrap\s*{[\s\S]*white-space:\s*nowrap;/)
})

test('homepage hero explains Baytech in concise first-time visitor language', () => {
  assert.match(
    homeSource,
    /Baytech helps you plan, build, and run AI-ready cloud systems, from strategy to deployment, security, and ongoing support\./
  )
  assert.doesNotMatch(homeSource, /AI, cloud, and GPU infrastructure for growing teams\./)
  assert.doesNotMatch(homeSource, /class="hero-supporting-title"/)
  assert.doesNotMatch(homeSource, /We are your dedicated technology consultants/)
  assert.doesNotMatch(homeSource, /strategic guidance Irish businesses need to innovate and grow/)
})

test('homepage hero gives simple concrete paths before deeper service content', () => {
  assert.match(homeSource, /<a href="\/contact" class="btn btn-filled">[\s\S]*Talk to Baytech[\s\S]*<\/a>/)
  assert.match(homeSource, /<a href="\/services" class="btn btn-outlined">Explore Services<\/a>/)
  assert.doesNotMatch(homeSource, /Schedule a Strategic Consultation/)
  assert.match(homeSource, /class="hero-service-tags"/)
  assert.match(homeSource, /<span>AI Strategy<\/span>/)
  assert.match(homeSource, /<span>GPU Cloud<\/span>/)
  assert.match(homeSource, /<span>Cloud &amp; Security<\/span>/)
  assert.match(styleSource, /\.hero-service-tags\s*{[\s\S]*display:\s*flex;/)
})
