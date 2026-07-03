import{r as e}from"./index-igexv3tX.js";import{t}from"./LegacyPage-rqLIDZmk.js";import{t as n}from"./router-de8RupPQ.js";function r(){let e=document.createElement(`div`);e.className=`page-contact`;let t=n(`Contact`);e.appendChild(t);let r=document.createElement(`section`);r.className=`page-header`,r.innerHTML=`
    <p class="section-label">Contact</p>
    <h1>Start your AI Plus conversation</h1>
    <p>Share the model, data, GPU, deployment, or business workflow decision in front of you. Baytech will help shape a practical next step.</p>
  `;let i=document.createElement(`section`);i.className=`contact-section`,i.innerHTML=`
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Share the AI decision in front of you</h2>
        <p>Whether you are choosing a model, protecting private data, planning GPU capacity, launching a managed endpoint, or adapting AI to a business process, Baytech can help connect the pieces.</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <h4>Our Office</h4>
              <p>77 Camden Street Lower<br>Dublin 2, D02 XE80<br>Ireland</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div>
              <h4>Email Us</h4>
              <p>support@baytech.cloud</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div>
              <h4>Call Us</h4>
              <p>+44 7886 066968</p>
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
          <h3>Send an AI Plus inquiry</h3>
          <p>Tell us what you are trying to evaluate, build, deploy, or operate.</p>
        </div>
        <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <!-- Web3Forms Access Key -->
          <input type="hidden" name="access_key" value="0b606e81-3506-4d22-96e7-eaddf4219e38">
          
          <!-- Optional: Custom subject line -->
          <input type="hidden" name="subject" value="New AI Plus Inquiry from Baytech.cloud">
          
          <!-- Honeypot Spam Protection -->
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
          
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
            <label for="service">AI Plus Topic</label>
            <select id="service" name="service">
              <option value="">Select a Topic</option>
              <option value="ai-plus-assessment">AI Plus Assessment</option>
              <option value="model-selection">Model Selection</option>
              <option value="private-ai-rag">Private AI / RAG</option>
              <option value="managed-endpoint">Managed Endpoint</option>
              <option value="gpu-platform">GPU Platform</option>
              <option value="training-fine-tuning">Training or Fine-Tuning</option>
              <option value="business-ai-solution">Business AI Solution</option>
              <option value="production-operations">Production Operations</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about your model, data, workload, capacity, or business workflow..." required></textarea>
          </div>
          
          <div id="form-status" class="form-status" style="display: none;"></div>
          
          <button type="submit" id="submit-btn" class="btn btn-filled" style="width: 100%;">
            <span class="btn-label">Send AI Plus Inquiry</span>
            <span class="btn-loader" style="display: none;">Sending...</span>
          </button>
        </form>
      </div>
    </div>
  `;let a=document.createElement(`section`);return a.className=`cta-section`,a.innerHTML=`
    <div class="cta-content">
      <h2>Prefer a direct conversation?</h2>
      <p>Reach Baytech by email or phone if the AI Plus question is already urgent or specific.</p>
      <div class="cta-buttons">
        <a href="mailto:support@baytech.cloud" class="btn btn-filled">Email Us</a>
        <a href="tel:+447886066968" class="btn btn-tonal">Call Us</a>
      </div>
    </div>
  `,e.appendChild(r),e.appendChild(i),e.appendChild(a),setTimeout(()=>{let e=document.getElementById(`contact-form`),t=document.getElementById(`submit-btn`),n=document.getElementById(`form-status`),r=t?.querySelector(`.btn-label`),i=t?.querySelector(`.btn-loader`);if(e){let a={name:{valueMissing:`Please enter your name.`},email:{valueMissing:`Please enter your email address.`,typeMismatch:`Please enter a valid email address.`},message:{valueMissing:`Please tell us about your AI Plus question...`}},o=e=>{let t=a[e.id];return t?e.validity.valueMissing?t.valueMissing:e.validity.typeMismatch?t.typeMismatch:``:``},s=e=>{e.setCustomValidity(``),e.setCustomValidity(o(e))},c=e.querySelectorAll(`input[required], textarea[required]`);c.forEach(e=>{s(e),e.addEventListener(`invalid`,()=>s(e)),e.addEventListener(`input`,()=>s(e)),e.addEventListener(`blur`,()=>s(e))}),e.addEventListener(`submit`,async a=>{a.preventDefault(),t&&(t.disabled=!0,r&&(r.style.display=`none`),i&&(i.style.display=`inline`)),n&&(n.style.display=`none`);try{let t=new FormData(e),r=await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,body:t})).json();if(r.success)n&&(n.className=`form-status form-success`,n.innerHTML=`AI Plus inquiry sent successfully. We'll get back to you soon.`,n.style.display=`block`),e.reset(),c.forEach(e=>s(e));else throw Error(r.message||`Something went wrong`)}catch{n&&(n.className=`form-status form-error`,n.innerHTML=`Failed to send message. Please try again or email us directly.`,n.style.display=`block`)}finally{t&&(t.disabled=!1,r&&(r.style.display=`inline`),i&&(i.style.display=`none`))}})}},100),e}var i=e();function a(){return(0,i.jsx)(t,{pageKey:`contact`,render:r})}export{a as component};