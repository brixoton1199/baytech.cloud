import{r as e}from"./index-igexv3tX.js";import{t}from"./LegacyPage-rqLIDZmk.js";import{t as n}from"./router-de8RupPQ.js";var r=[{title:`Platform Clarity`,text:`AI programs need clear choices across models, data, GPU capacity, endpoint patterns, and operational ownership. Baytech helps make those decisions explicit before implementation expands.`},{title:`Private-By-Design`,text:`Business data, user permissions, retrieval pipelines, and hosting choices are treated as architecture decisions, not as late-stage compliance decoration.`},{title:`Production Mindset`,text:`A useful AI system needs monitoring, reliability, fallback behavior, support flow, and cost awareness after the first demo works.`},{title:`Business Adaptation`,text:`The model is only one part of the system. Baytech connects AI capability to real workflows, teams, documents, customers, and operations.`},{title:`Long-Term Partnership`,text:`AI platforms evolve quickly. Baytech stays close to the deployment so model, hardware, and workflow choices can improve over time.`}],i=[{tag:`Location`,title:`Dublin-based technology team`,text:`Baytech operates from Dublin and works directly with teams that need practical AI infrastructure, deployment guidance, and managed technology support.`},{tag:`Scope`,title:`From infrastructure to application workflow`,text:`The company combines GPU platform planning, private data architecture, managed endpoints, and business solution delivery into one engagement path.`},{tag:`Method`,title:`Hands-on advisory and operation`,text:`Baytech can support assessment, architecture, deployment, monitoring, and iteration instead of leaving teams with a one-time recommendation.`}];function a(){let e=document.createElement(`div`);e.className=`page-about`;let t=n(`Company`);e.appendChild(t);let a=document.createElement(`section`);a.className=`page-header`,a.innerHTML=`
    <p class="section-label">Company</p>
    <h1>Baytech builds and operates practical AI infrastructure</h1>
    <p>We help teams turn model choice, private data, GPU capacity, deployment, and business workflow design into AI systems that can run in production.</p>
  `;let o=document.createElement(`section`);o.className=`services-section`,o.innerHTML=`
    <div class="section-header" style="text-align: center;">
      <p class="section-label">Our View</p>
      <h2 class="section-title">AI is only useful when the whole system works</h2>
    </div>
    <div style="max-width: 900px; margin: 0 auto;">
      <p style="font-size: var(--md-body-large); color: var(--md-on-surface-variant); line-height: 1.7; margin-bottom: var(--space-4);">
        A model can look impressive in isolation and still fail inside a business. The real work is deciding what model to use, where data should live, how private knowledge is retrieved, what hardware capacity is needed, how the endpoint is operated, and where the AI result fits into the workflow.
      </p>
      <p style="font-size: var(--md-body-large); color: var(--md-on-surface-variant); line-height: 1.7;">
        Baytech's One-Stop AI Plus approach connects those decisions. We focus on practical systems: clear architecture, private data handling, GPU and endpoint planning, business adaptation, and ongoing operations.
      </p>
    </div>
  `;let s=document.createElement(`section`);s.className=`services-section`,s.innerHTML=`
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-12);">
      <p class="section-label">How We Work</p>
      <h2 class="section-title">Operating principles for AI Plus delivery</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">These principles keep the work grounded when AI decisions move from possibility to production responsibility.</p>
    </div>
    <div class="services-grid about-workflow-grid">
      ${r.map(e=>`
        <div class="service-card card-elevated">
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </div>
      `).join(``)}
    </div>
  `;let c=document.createElement(`section`);c.className=`services-section`,c.innerHTML=`
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">Company Proof</p>
      <h2 class="section-title">A focused partner for AI infrastructure decisions</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">Baytech is positioned for teams that need a direct, practical path instead of a fragmented vendor conversation.</p>
    </div>
    <div class="solutions-grid">
      ${i.map(e=>`
        <div class="solution-card card-elevated">
          <span class="solution-tag">${e.tag}</span>
          <h3>${e.title}</h3>
          <p>${e.text}</p>
        </div>
      `).join(``)}
    </div>
  `;let l=document.createElement(`section`);return l.className=`cta-section`,l.innerHTML=`
    <div class="cta-content">
      <h2>Work with Baytech on your AI Plus path</h2>
      <p>Share the model, data, GPU, endpoint, or business workflow decision in front of you. We will help shape the next step.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Contact Baytech</a>
        <a href="/company-profile" class="btn btn-tonal">View Company Profile</a>
      </div>
    </div>
  `,e.appendChild(a),e.appendChild(o),e.appendChild(s),e.appendChild(c),e.appendChild(l),e}var o=e();function s(){return(0,o.jsx)(t,{pageKey:`about`,render:a})}export{s as component};