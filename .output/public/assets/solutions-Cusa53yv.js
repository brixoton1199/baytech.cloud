import{r as e}from"./index-igexv3tX.js";import{t}from"./LegacyPage-rqLIDZmk.js";import{t as n}from"./router-de8RupPQ.js";var r=[{title:`Private Knowledge Assistant`,text:`Give teams controlled answers from internal documents, procedures, product knowledge, engineering notes, policies, and support content. Baytech helps plan retrieval, permissions, evaluation, deployment, and user workflow.`,tags:[`RAG`,`Private Data`,`Permissions`,`Managed Endpoint`],cta:`Plan knowledge AI`},{title:`Customer Support AI`,text:`Assist support teams with triage, reply drafting, knowledge lookup, escalation, and quality review while keeping human review and operational control in the loop.`,tags:[`Model Selection`,`Knowledge Base`,`Support Workflow`,`Monitoring`],cta:`Improve support with AI`},{title:`Document AI`,text:`Extract, validate, summarize, and route information from invoices, contracts, onboarding files, forms, reports, and operational documents.`,tags:[`Document Processing`,`Multimodal AI`,`Validation`,`Workflow Automation`],cta:`Plan document AI`},{title:`Operations Copilot`,text:`Support finance, logistics, reporting, internal operations, and decision workflows with private data access and role-aware AI assistance.`,tags:[`Private Data`,`Operations`,`Reporting`,`Role-Based Access`],cta:`Map an operations workflow`},{title:`Engineering AI`,text:`Help engineering teams search internal knowledge, improve documentation, support incident response, and automate technical workflows with controlled access to internal context.`,tags:[`Internal Knowledge`,`Engineering Workflow`,`Incident Support`,`Governance`],cta:`Plan engineering AI`},{title:`Multimodal And Rendering Workloads`,text:`Support image, video, rendering, simulation, and AI media pipelines with the right model, storage, batch processing, and GPU platform path.`,tags:[`GPU Platform`,`Multimodal`,`Rendering`,`Batch Processing`],cta:`Discuss multimodal capacity`,href:`/gpu-cloud`},{title:`Private AI Platform`,text:`Create a reusable internal AI foundation with model serving, managed endpoints, private data architecture, access controls, monitoring, and production support.`,tags:[`Private AI`,`Managed Endpoints`,`Platform`,`Operations`],cta:`Design a private AI platform`}],i=[[`Select the model`,`Choose hosted, private, open-source, fine-tuned, RAG, or managed endpoint paths.`],[`Define data boundaries`,`Map private data, access, retrieval, governance, and deployment isolation.`],[`Choose the platform`,`Match workload needs to hosted APIs, managed endpoints, GPU systems, cloud, or dedicated capacity.`],[`Integrate the workflow`,`Connect AI to the tools, processes, users, and review loops where work happens.`],[`Operate and improve`,`Monitor quality, cost, latency, access, usage, updates, and production support.`]];function a(e){return e.map(e=>`<span class="solution-tag">${e}</span>`).join(``)}function o(){let e=document.createElement(`div`);e.className=`page-solutions`;let t=n(`Solutions`);e.appendChild(t);let o=document.createElement(`section`);o.className=`page-header`,o.innerHTML=`
    <p class="section-label">Solutions</p>
    <h1>AI Plus solutions for real workflows</h1>
    <p>Baytech adapts models, private data, GPU platform, and managed deployment to the workflows where AI can create practical leverage.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Explore an AI Use Case</a>
      <a href="/services" class="btn btn-outlined">Plan a Private AI Deployment</a>
    </div>
  `;let s=document.createElement(`section`);s.className=`services-section`,s.innerHTML=`
    <div class="section-header">
      <p class="section-label">Use Cases</p>
      <h2 class="section-title">Where One-Stop AI Plus creates leverage</h2>
    </div>
    <div class="solutions-grid">
      ${r.map(e=>`
        <article class="solution-card card-elevated">
          <div class="gpu-system-meta">${a(e.tags)}</div>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
          <a href="${e.href||`/contact`}" class="btn btn-outlined">${e.cta}</a>
        </article>
      `).join(``)}
    </div>
  `;let c=document.createElement(`section`);c.className=`services-section`,c.innerHTML=`
    <div class="section-header">
      <p class="section-label">AI Plus Method</p>
      <h2 class="section-title">Every solution follows the AI Plus path</h2>
    </div>
    <div class="solutions-grid">
      ${i.map(([e,t],n)=>`
        <article class="solution-card card-elevated">
          <span class="solution-tag">0${n+1}</span>
          <h3>${e}</h3>
          <p>${t}</p>
        </article>
      `).join(``)}
    </div>
  `;let l=document.createElement(`section`);return l.className=`cta-section`,l.innerHTML=`
    <div class="cta-content">
      <h2>Turn an AI idea into a working system</h2>
      <p>Bring a workflow, model question, data boundary, or GPU need. Baytech will map the AI Plus path.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-tonal">Plan a Private AI Deployment</a>
      </div>
    </div>
  `,e.appendChild(o),e.appendChild(s),e.appendChild(c),e.appendChild(l),e}var s=e();function c(){return(0,s.jsx)(t,{pageKey:`solutions`,render:o})}export{c as component};