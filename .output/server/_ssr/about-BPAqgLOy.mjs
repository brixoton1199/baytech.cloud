import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LegacyPage } from "./LegacyPage-CVzs7B1F.mjs";
import { t as createBreadcrumb } from "./router-BHKtbBTt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BPAqgLOy.js
var import_jsx_runtime = require_jsx_runtime();
var principles = [
	{
		title: "Platform Clarity",
		text: "AI programs need clear choices across models, data, GPU capacity, endpoint patterns, and operational ownership. Baytech helps make those decisions explicit before implementation expands."
	},
	{
		title: "Private-By-Design",
		text: "Business data, user permissions, retrieval pipelines, and hosting choices are treated as architecture decisions, not as late-stage compliance decoration."
	},
	{
		title: "Production Mindset",
		text: "A useful AI system needs monitoring, reliability, fallback behavior, support flow, and cost awareness after the first demo works."
	},
	{
		title: "Business Adaptation",
		text: "The model is only one part of the system. Baytech connects AI capability to real workflows, teams, documents, customers, and operations."
	},
	{
		title: "Long-Term Partnership",
		text: "AI platforms evolve quickly. Baytech stays close to the deployment so model, hardware, and workflow choices can improve over time."
	}
];
var proofItems = [
	{
		tag: "Location",
		title: "Dublin-based technology team",
		text: "Baytech operates from Dublin and works directly with teams that need practical AI infrastructure, deployment guidance, and managed technology support."
	},
	{
		tag: "Scope",
		title: "From infrastructure to application workflow",
		text: "The company combines GPU platform planning, private data architecture, managed endpoints, and business solution delivery into one engagement path."
	},
	{
		tag: "Method",
		title: "Hands-on advisory and operation",
		text: "Baytech can support assessment, architecture, deployment, monitoring, and iteration instead of leaving teams with a one-time recommendation."
	}
];
function renderAbout() {
	const container = document.createElement("div");
	container.className = "page-about";
	const breadcrumb = createBreadcrumb("Company");
	container.appendChild(breadcrumb);
	const pageHeader = document.createElement("section");
	pageHeader.className = "page-header";
	pageHeader.innerHTML = `
    <p class="section-label">Company</p>
    <h1>Baytech builds and operates practical AI infrastructure</h1>
    <p>We help teams turn model choice, private data, GPU capacity, deployment, and business workflow design into AI systems that can run in production.</p>
  `;
	const belief = document.createElement("section");
	belief.className = "services-section";
	belief.innerHTML = `
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
  `;
	const principlesSection = document.createElement("section");
	principlesSection.className = "services-section";
	principlesSection.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-12);">
      <p class="section-label">How We Work</p>
      <h2 class="section-title">Operating principles for AI Plus delivery</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">These principles keep the work grounded when AI decisions move from possibility to production responsibility.</p>
    </div>
    <div class="services-grid about-workflow-grid">
      ${principles.map((item) => `
        <div class="service-card card-elevated">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `).join("")}
    </div>
  `;
	const proofSection = document.createElement("section");
	proofSection.className = "services-section";
	proofSection.innerHTML = `
    <div class="section-header" style="text-align: center; margin-bottom: var(--space-10);">
      <p class="section-label">Company Proof</p>
      <h2 class="section-title">A focused partner for AI infrastructure decisions</h2>
      <p class="section-subtitle" style="margin: var(--space-4) auto 0;">Baytech is positioned for teams that need a direct, practical path instead of a fragmented vendor conversation.</p>
    </div>
    <div class="solutions-grid">
      ${proofItems.map((item) => `
        <div class="solution-card card-elevated">
          <span class="solution-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `).join("")}
    </div>
  `;
	const cta = document.createElement("section");
	cta.className = "cta-section";
	cta.innerHTML = `
    <div class="cta-content">
      <h2>Work with Baytech on your AI Plus path</h2>
      <p>Share the model, data, GPU, endpoint, or business workflow decision in front of you. We will help shape the next step.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Contact Baytech</a>
        <a href="/company-profile" class="btn btn-tonal">View Company Profile</a>
      </div>
    </div>
  `;
	container.appendChild(pageHeader);
	container.appendChild(belief);
	container.appendChild(principlesSection);
	container.appendChild(proofSection);
	container.appendChild(cta);
	return container;
}
function AboutRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyPage, {
		pageKey: "about",
		render: renderAbout
	});
}
//#endregion
export { AboutRoute as component };
