import{r as e}from"./index-igexv3tX.js";import{t}from"./LegacyPage-rqLIDZmk.js";import{t as n}from"./router-de8RupPQ.js";var r=[{tag:`Model Choice`,title:`Model Selection Guide`,text:`Compare open, commercial, small, and specialist models against accuracy, latency, privacy, cost, and operational requirements.`,fit:[`Model shortlist`,`Evaluation criteria`,`Deployment tradeoffs`]},{tag:`Private AI`,title:`Private AI Deployment Checklist`,text:`Map the data, permission, retrieval, hosting, and monitoring decisions needed before a private AI system goes into production.`,fit:[`Data boundaries`,`RAG readiness`,`Access controls`]},{tag:`GPU Platform`,title:`GPU Sizing For AI Workloads`,text:`Understand how model size, context window, batch profile, memory, storage, and concurrency shape the GPU platform you need.`,fit:[`Inference sizing`,`Training capacity`,`Throughput planning`]},{tag:`Knowledge Systems`,title:`RAG And Private Knowledge Systems`,text:`Plan a retrieval architecture that connects business knowledge to models without flattening governance or data ownership.`,fit:[`Source systems`,`Search quality`,`Permission design`]},{tag:`Production`,title:`From PoC To Production`,text:`Move beyond demos with a practical path for testing, observability, fallbacks, support, and change management.`,fit:[`Pilot scope`,`Reliability model`,`Operational handoff`]},{tag:`Managed AI`,title:`Managed Endpoints Explained`,text:`Clarify when an AI endpoint should be hosted, managed, monitored, and improved as a production service.`,fit:[`Endpoint design`,`Monitoring`,`Cost control`]}],i=[{question:`Where should we start if we are unsure which model to use?`,answer:`Start with the workload, data boundary, latency requirement, and business outcome. Baytech can help shortlist models and test them against realistic prompts and source data.`},{question:`Do we need our own GPU capacity?`,answer:`Not always. Some workloads fit managed endpoints or cloud-hosted models. Dedicated GPU capacity becomes important when privacy, throughput, model size, training, or predictable access matter.`},{question:`Can private company data be used safely with AI?`,answer:`Yes, if the system is designed around data ownership, access rules, retrieval quality, hosting choices, and auditability before the model is connected to business workflows.`},{question:`What does Baytech operate after launch?`,answer:`Baytech can support endpoints, GPU systems, retrieval pipelines, workflow integrations, monitoring, and improvement cycles so the AI system stays useful after the first deployment.`}];function a(){let e=document.createElement(`div`);e.className=`page-insights`;let t=n(`Resources`);e.appendChild(t);let a=document.createElement(`section`);a.className=`page-header`,a.innerHTML=`
    <p class="section-label">Resources</p>
    <h1>Guides for choosing and operating AI systems</h1>
    <p>Practical starting points for model selection, private AI, GPU sizing, managed endpoints, and production AI operations.</p>
  `;let o=document.createElement(`section`);o.className=`services-section`,o.innerHTML=`
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">AI Plus Guides</p>
      <h2 class="section-title">Decisions to make before AI becomes production work</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">These guide topics are designed to help teams frame the right conversation before buying models, GPUs, or integration work.</p>
    </div>
    <div class="solutions-grid">
      ${r.map(e=>`
        <article class="insight-card card-elevated">
          <div class="insight-meta">
            <span class="insight-tag">${e.tag}</span>
            <span class="insight-date">Planning Guide</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
          <ul class="feature-list">
            ${e.fit.map(e=>`<li>${e}</li>`).join(``)}
          </ul>
          <a href="/contact" class="btn btn-text">Plan This With Baytech</a>
        </article>
      `).join(``)}
    </div>
  `;let s=document.createElement(`section`);s.className=`services-section`,s.innerHTML=`
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">Questions</p>
      <h2 class="section-title">AI Plus planning questions</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">The first useful answer is often not a product name. It is a better decision path.</p>
    </div>
    <div class="solutions-grid">
      ${i.map(e=>`
        <div class="solution-card card-elevated">
          <span class="solution-tag">FAQ</span>
          <h3>${e.question}</h3>
          <p>${e.answer}</p>
        </div>
      `).join(``)}
    </div>
  `;let c=document.createElement(`section`);return c.className=`cta-section`,c.innerHTML=`
    <div class="cta-content">
      <h2>Turn AI uncertainty into a clear plan</h2>
      <p>Bring the model question, data question, workload question, or business workflow you are facing. Baytech will help shape the path.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-tonal">Explore Managed AI</a>
      </div>
    </div>
  `,e.appendChild(a),e.appendChild(o),e.appendChild(s),e.appendChild(c),e}var o=e();function s(){return(0,o.jsx)(t,{pageKey:`insights`,render:a})}export{s as component};