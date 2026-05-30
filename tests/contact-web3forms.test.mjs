import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const contactSource = await readFile(new URL('../src/pages/contact.js', import.meta.url), 'utf8')

test('contact form uses the configured Web3Forms access key', () => {
  assert.match(
    contactSource,
    /name="access_key" value="0b606e81-3506-4d22-96e7-eaddf4219e38"/
  )
  assert.doesNotMatch(contactSource, /24891696-7646-4113-8bc6-4f06e8f71204/)
})

test('contact form submits through the JavaScript Web3Forms path', () => {
  assert.match(contactSource, /action="https:\/\/api\.web3forms\.com\/submit"/)
  assert.match(contactSource, /fetch\('https:\/\/api\.web3forms\.com\/submit'/)
  assert.match(
    contactSource,
    /name="subject" value="New Contact Form Submission from Baytech\.cloud"/
  )
  assert.match(contactSource, /name="botcheck"/)
  assert.doesNotMatch(contactSource, /name="redirect"/)
})
