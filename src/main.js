import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>baytech.cloud</h1>
    <p>Welcome to baytech.cloud</p>
    <p class="timestamp">Last updated: ${new Date().toLocaleString()}</p>
  </div>
`

