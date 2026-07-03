import{n as e,r as t,t as n}from"./index-igexv3tX.js";import{t as r}from"./LegacyPage-rqLIDZmk.js";var i={mark:e,wordmark:n};function a({variant:e=`wordmark`,className:t=``,label:n=`Baytech Logo`,decorative:r=!1}={}){let a=document.createElement(`template`);a.innerHTML=i[e].trim();let o=a.content.firstElementChild;return o.removeAttribute(`style`),o.removeAttribute(`aria-labelledby`),o.querySelectorAll(`title`).forEach(e=>e.remove()),o.classList.add(`baytech-logo-svg`,...t.split(/\s+/).filter(Boolean)),o.setAttribute(`focusable`,`false`),r?(o.removeAttribute(`role`),o.setAttribute(`aria-hidden`,`true`)):(o.setAttribute(`role`,`img`),o.setAttribute(`aria-label`,n)),o.outerHTML}var o=[{title:`Model Layer`,text:`Choose between hosted APIs, open-source models, private deployments, fine-tuning, RAG, and managed endpoints based on workload, privacy, latency, quality, and cost.`},{title:`Private Data Layer`,text:`Design knowledge systems, access boundaries, retrieval flows, governance, and deployment isolation so AI can work with company data responsibly.`},{title:`GPU and Cloud Platform`,text:`Match inference, training, fine-tuning, rendering, and multimodal workloads to configurable GPU systems, storage, network, and deployment architecture.`},{title:`Managed Deployment`,text:`Turn models into services through endpoints, containers, private model serving, observability, automation, and release workflows.`},{title:`Business Workflow Layer`,text:`Adapt AI to support, documents, operations, sales, engineering, internal knowledge, and industry processes instead of leaving it as a standalone demo.`},{title:`Operations and Support`,text:`Plan monitoring, cost control, access, model updates, performance, incident response, and continuous improvement from the start.`}],s=[{title:`Hosted Model Adoption`,text:`Use external model APIs with the right model choice, fallback plan, security review, workflow integration, and cost visibility.`,cta:`Assess hosted model use`},{title:`Private Model Deployment`,text:`Deploy open-source or owned models with controlled data boundaries, dedicated serving infrastructure, and production support.`,cta:`Plan private AI`},{title:`Managed Endpoints`,text:`Expose repeatable inference services through managed endpoints with monitoring, access controls, scaling decisions, and support.`,cta:`Explore managed endpoints`},{title:`GPU-Backed Training And Fine-Tuning`,text:`Run high-memory AI workloads on GPU systems planned around model size, storage, network, dataset flow, and checkpointing needs.`,cta:`Discuss GPU capacity`},{title:`RAG And Private Knowledge Systems`,text:`Build retrieval workflows for company documents, internal knowledge, permissions, evaluation, and controlled answer generation.`,cta:`Plan private knowledge AI`},{title:`Dedicated AI Platform`,text:`Create a reusable AI platform path for teams that need configurable capacity, isolation, hybrid architecture, and long-term operations.`,cta:`Design an AI platform`}],c=[[`Private Knowledge Assistant`,`Give teams controlled answers from internal documents, policies, procedures, product knowledge, and technical references.`],[`Customer Support AI`,`Assist support teams with triage, reply drafting, knowledge lookup, escalation, and quality review.`],[`Document AI`,`Extract, validate, summarize, and route information from invoices, contracts, forms, reports, and operational documents.`],[`Operations Copilot`,`Support finance, logistics, reporting, and internal operations with private data access and workflow-aware AI.`],[`Engineering Assistant`,`Help engineering teams search internal knowledge, support incident response, improve documentation, and automate tooling workflows.`],[`Multimodal AI Workloads`,`Support image, video, rendering, simulation, and AI media pipelines with the right model and GPU platform path.`]],l=[{question:`Which model should we use?`,answer:`Baytech helps compare hosted APIs, open-source models, private deployments, fine-tuning, RAG, and managed endpoints against your data boundary, quality target, latency, and operating cost.`},{question:`Can we use AI with private company data?`,answer:`Yes. The right architecture depends on the data, access rules, retrieval needs, deployment boundary, and audit expectations. Baytech helps design that path before implementation.`},{question:`Do we need hosted models, private models, managed endpoints, or GPUs?`,answer:`The answer depends on workload type, privacy requirements, latency, cost, model size, and operational maturity. Baytech helps map the decision rather than forcing every use case into one pattern.`},{question:`What happens after launch?`,answer:`Baytech can support ongoing monitoring, performance review, model updates, access changes, cost optimization, and operational improvement.`}];function u(e){return`
    <article class="service-card card-elevated">
      <h3>${e.title}</h3>
      <p>${e.text}</p>
    </article>
  `}function d(){let e=document.createElement(`div`);e.className=`page-home`;let t=document.createElement(`section`);t.className=`hero hero-with-map hero-motion-stage`,t.id=`home`,t.innerHTML=`
    <div class="hero-split-container">
      <div class="hero-content-left">
        <div class="hero-logo">
          ${a({className:`hero-logo-image`,label:`Baytech Logo`})}
        </div>
        <p class="section-label">Built For Real AI Workloads</p>
        <h1>Your <span class="hero-slogan-nowrap">One-Stop</span> AI Plus</h1>
        <p class="hero-subtitle">Model choice, private data, GPU platform, managed deployment, and business AI workflows in one path. Baytech helps teams plan, run, and operate AI workloads from first decision to production.</p>
        <div class="hero-service-tags" aria-label="Baytech focus areas">
          <span>Model Selection</span>
          <span>Private AI</span>
          <span>GPU Platform</span>
          <span>Managed Deployment</span>
        </div>
        <div class="hero-actions">
          <a href="/contact" class="btn btn-filled">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Start an AI Plus Assessment
          </a>
          <a href="/gpu-cloud" class="btn btn-outlined">Discuss GPU Capacity</a>
        </div>
      </div>

      <div class="hero-map-container">
        <div class="map-glow-wrapper">
          <img src="/assets/ireland-map-hero-linework.png" alt="Map of Ireland with Dublin highlighted" class="ireland-map-image map-glow-layer-1" />
          <img src="/assets/ireland-map-hero-linework.png" alt="" class="ireland-map-image map-glow-layer-2" aria-hidden="true" />
          <img src="/assets/ireland-map-hero-linework.png" alt="" class="ireland-map-image map-glow-layer-3" aria-hidden="true" />
          <img src="/assets/ireland-map-hero-linework.png" alt="" class="ireland-map-image map-glow-main" />
        </div>
      </div>
    </div>
  `;let n=document.createElement(`section`);n.className=`services-section animate-on-scroll`,n.id=`home-next`,n.innerHTML=`
    <div class="section-header animate-slide-left" style="--delay: 0ms;">
      <p class="section-label">AI Plus Stack</p>
      <h2 class="section-title">The full AI lifecycle, connected</h2>
      <p class="section-subtitle">AI projects fail when model, data, compute, deployment, and operations are treated as separate decisions. Baytech connects the layers so your AI system can move from idea to production with a clear technical and business path.</p>
    </div>
    <div class="services-grid stagger-children animate-on-scroll" style="margin-top: var(--space-10);">
      ${o.map(u).join(``)}
    </div>
  `;let r=document.createElement(`section`);r.className=`services-section animate-on-scroll`,r.innerHTML=`
    <div class="section-header">
      <p class="section-label">Deployment Paths</p>
      <h2 class="section-title">Choose the right path for every AI workload</h2>
      <p class="section-subtitle">Some teams need hosted models. Others need private model serving, managed endpoints, GPU-backed training, or a reusable internal AI platform. Baytech helps choose the path that fits the workload, data boundary, and operating model.</p>
    </div>
    <div class="solutions-grid" style="margin-top: var(--space-10);">
      ${s.map(e=>`
        <article class="solution-card card-elevated">
          <span class="solution-tag">AI Path</span>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
          <a href="/contact" class="btn btn-outlined">${e.cta}</a>
        </article>
      `).join(``)}
    </div>
  `;let i=document.createElement(`section`);i.className=`gpu-discovery-section animate-on-scroll`,i.innerHTML=`
    <div class="gpu-discovery-content">
      <div>
        <p class="section-label">GPU Platform</p>
        <h2 class="section-title">GPU capacity matched to real AI workloads</h2>
        <p class="section-subtitle">Explore NVIDIA and AMD systems for inference, training, fine-tuning, rendering, multimodal workloads, and private model deployment. Baytech helps translate model requirements into GPU, memory, storage, network, and support decisions.</p>
      </div>
      <a href="/gpu-cloud" class="btn btn-filled">View GPU Platform</a>
    </div>
  `;let d=document.createElement(`section`);d.className=`services-section animate-on-scroll`,d.innerHTML=`
    <div class="section-header">
      <p class="section-label">Managed AI</p>
      <h2 class="section-title">From model endpoint to production operation</h2>
      <p class="section-subtitle">Baytech helps turn model choices into managed AI systems: private deployments, inference endpoints, containerized services, monitoring, updates, and ongoing optimization.</p>
    </div>
    <div class="solutions-grid">
      ${[`Private and open-source model deployment`,`Managed endpoints for repeatable inference`,`Containerized AI services`,`Monitoring, logs, and performance review`,`Cost and capacity optimization`,`Model update and deployment governance`].map(e=>`
        <article class="solution-card card-elevated">
          <span class="solution-tag">Managed AI</span>
          <h3>${e}</h3>
        </article>
      `).join(``)}
    </div>
  `;let f=document.createElement(`section`);f.className=`services-section animate-on-scroll`,f.innerHTML=`
    <div class="section-header">
      <p class="section-label">Solutions</p>
      <h2 class="section-title">AI Plus for business workflows</h2>
      <p class="section-subtitle">The value of AI appears when it is connected to the work people already do. Baytech adapts models, data, GPU capacity, and managed deployment to practical workflows across teams.</p>
    </div>
    <div class="solutions-grid">
      ${c.map(([e,t])=>`
        <article class="solution-card card-elevated">
          <h3>${e}</h3>
          <p>${t}</p>
        </article>
      `).join(``)}
    </div>
  `;let p=document.createElement(`section`);p.className=`insights-section animate-on-scroll`,p.innerHTML=`
    <div class="section-header" style="text-align: center; max-width: 840px; margin: 0 auto var(--space-10);">
      <p class="section-label">Why Baytech</p>
      <h2 class="section-title">Built for AI decisions that have to survive production</h2>
      <p class="section-subtitle">Baytech approaches AI as a connected operating system of decisions: model, data, compute, deployment, workflow, and support.</p>
    </div>
    <div class="insights-list stagger-children" style="max-width: 920px; margin: 0 auto;">
      <div class="insight-card">
        <h4 class="insight-question">Platform clarity</h4>
        <p class="insight-answer">Understand the tradeoffs between hosted models, private models, managed endpoints, GPU systems, and hybrid deployment before committing.</p>
      </div>
      <div class="insight-card">
        <h4 class="insight-question">Secure-by-design planning</h4>
        <p class="insight-answer">Treat data boundaries, access paths, and deployment isolation as architecture decisions rather than late-stage fixes.</p>
      </div>
      <div class="insight-card">
        <h4 class="insight-question">Production posture</h4>
        <p class="insight-answer">Plan monitoring, support, cost, updates, and operational ownership before an AI system reaches users.</p>
      </div>
    </div>
  `;let m=document.createElement(`section`);m.className=`services-section animate-on-scroll`,m.innerHTML=`
    <div class="section-header">
      <p class="section-label">Buyer Questions</p>
      <h2 class="section-title">AI Plus decisions, answered early</h2>
    </div>
    <div class="insights-list" style="max-width: 920px; margin: 0 auto;">
      ${l.map(e=>`
        <div class="insight-card">
          <h4 class="insight-question">Q: ${e.question}</h4>
          <p class="insight-answer"><strong>A:</strong> ${e.answer}</p>
        </div>
      `).join(``)}
    </div>
  `;let h=document.createElement(`section`);return h.className=`cta-section animate-on-scroll`,h.innerHTML=`
    <div class="cta-content">
      <h2>Start your AI Plus path</h2>
      <p>Bring your model idea, private data question, GPU workload, or business workflow. Baytech will help map the next step.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/gpu-cloud" class="btn btn-tonal">Discuss GPU Capacity</a>
        <a href="/services" class="btn btn-outlined">Plan a Private AI Deployment</a>
      </div>
    </div>
  `,e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(d),e.appendChild(f),e.appendChild(p),e.appendChild(m),e.appendChild(h),e}var f=t();function p(){return(0,f.jsx)(r,{pageKey:`home`,render:d})}export{p as component};