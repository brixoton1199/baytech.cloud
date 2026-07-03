import{r as e}from"./index-igexv3tX.js";import{t}from"./LegacyPage-rqLIDZmk.js";var n=[{number:`01`,title:`Assess`,text:`Clarify the business workflow, data boundary, model expectations, risk profile, and operational constraints before choosing a technical path.`},{number:`02`,title:`Select`,text:`Compare model options, hosting patterns, GPU requirements, retrieval designs, and managed endpoint choices against real workload needs.`},{number:`03`,title:`Prototype`,text:`Build a focused proof path with realistic prompts, private data samples, evaluation criteria, and user workflow feedback.`},{number:`04`,title:`Deploy`,text:`Turn the selected design into a production-ready system with infrastructure, endpoint behavior, access rules, monitoring, and support flow.`},{number:`05`,title:`Operate`,text:`Measure usage, quality, cost, reliability, and workflow impact so the AI system can improve as models, data, and business needs change.`}];function r(){let e=document.createElement(`div`);e.className=`page-approach`;let t=document.createElement(`section`);t.className=`page-header animate-on-scroll`,t.innerHTML=`
    <div class="section-header approach-page-header">
      <span class="section-label">Method</span>
      <h1>From AI question to production system</h1>
      <p class="section-subtitle">Baytech uses a practical AI Plus method to connect model selection, private data, GPU platform decisions, deployment, and business workflow adaptation.</p>
    </div>
  `;let r=document.createElement(`section`);r.className=`approach-section animate-on-scroll`,r.innerHTML=`
    <div class="approach-grid">
      ${n.map(e=>`
        <div class="approach-card">
          <div class="approach-number">${e.number}</div>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </div>
      `).join(``)}
    </div>
  `;let i=document.createElement(`section`);return i.className=`cta-section animate-on-scroll`,i.innerHTML=`
    <div class="cta-content">
      <h2>Start with the decision, not the vendor list</h2>
      <p>Baytech can help you frame the right model, data, GPU, deployment, and workflow choices before production work expands.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-outlined">Plan a Managed AI Deployment</a>
      </div>
    </div>
  `,e.appendChild(t),e.appendChild(r),e.appendChild(i),e}var i=e();function a(){return(0,i.jsx)(t,{pageKey:`approach`,render:r})}export{a as component};