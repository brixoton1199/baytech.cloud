import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LegacyPage } from "./LegacyPage-CVzs7B1F.mjs";
import { t as createBreadcrumb } from "./router-BHKtbBTt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-Jz1eX9W8.js
var import_jsx_runtime = require_jsx_runtime();
var useCases = [
	{
		title: "Private Knowledge Assistant",
		text: "Give teams controlled answers from internal documents, procedures, product knowledge, engineering notes, policies, and support content. Baytech helps plan retrieval, permissions, evaluation, deployment, and user workflow.",
		tags: [
			"RAG",
			"Private Data",
			"Permissions",
			"Managed Endpoint"
		],
		cta: "Plan knowledge AI"
	},
	{
		title: "Customer Support AI",
		text: "Assist support teams with triage, reply drafting, knowledge lookup, escalation, and quality review while keeping human review and operational control in the loop.",
		tags: [
			"Model Selection",
			"Knowledge Base",
			"Support Workflow",
			"Monitoring"
		],
		cta: "Improve support with AI"
	},
	{
		title: "Document AI",
		text: "Extract, validate, summarize, and route information from invoices, contracts, onboarding files, forms, reports, and operational documents.",
		tags: [
			"Document Processing",
			"Multimodal AI",
			"Validation",
			"Workflow Automation"
		],
		cta: "Plan document AI"
	},
	{
		title: "Operations Copilot",
		text: "Support finance, logistics, reporting, internal operations, and decision workflows with private data access and role-aware AI assistance.",
		tags: [
			"Private Data",
			"Operations",
			"Reporting",
			"Role-Based Access"
		],
		cta: "Map an operations workflow"
	},
	{
		title: "Engineering AI",
		text: "Help engineering teams search internal knowledge, improve documentation, support incident response, and automate technical workflows with controlled access to internal context.",
		tags: [
			"Internal Knowledge",
			"Engineering Workflow",
			"Incident Support",
			"Governance"
		],
		cta: "Plan engineering AI"
	},
	{
		title: "Multimodal And Rendering Workloads",
		text: "Support image, video, rendering, simulation, and AI media pipelines with the right model, storage, batch processing, and GPU platform path.",
		tags: [
			"GPU Platform",
			"Multimodal",
			"Rendering",
			"Batch Processing"
		],
		cta: "Discuss multimodal capacity",
		href: "/gpu-cloud"
	},
	{
		title: "Private AI Platform",
		text: "Create a reusable internal AI foundation with model serving, managed endpoints, private data architecture, access controls, monitoring, and production support.",
		tags: [
			"Private AI",
			"Managed Endpoints",
			"Platform",
			"Operations"
		],
		cta: "Design a private AI platform"
	}
];
var buildSteps = [
	["Select the model", "Choose hosted, private, open-source, fine-tuned, RAG, or managed endpoint paths."],
	["Define data boundaries", "Map private data, access, retrieval, governance, and deployment isolation."],
	["Choose the platform", "Match workload needs to hosted APIs, managed endpoints, GPU systems, cloud, or dedicated capacity."],
	["Integrate the workflow", "Connect AI to the tools, processes, users, and review loops where work happens."],
	["Operate and improve", "Monitor quality, cost, latency, access, usage, updates, and production support."]
];
function renderTags(tags) {
	return tags.map((tag) => `<span class="solution-tag">${tag}</span>`).join("");
}
function renderSolutions() {
	const container = document.createElement("div");
	container.className = "page-solutions";
	const breadcrumb = createBreadcrumb("Solutions");
	container.appendChild(breadcrumb);
	const pageHeader = document.createElement("section");
	pageHeader.className = "page-header";
	pageHeader.innerHTML = `
    <p class="section-label">Solutions</p>
    <h1>AI Plus solutions for real workflows</h1>
    <p>Baytech adapts models, private data, GPU platform, and managed deployment to the workflows where AI can create practical leverage.</p>
    <div class="page-header-actions">
      <a href="/contact" class="btn btn-filled">Explore an AI Use Case</a>
      <a href="/services" class="btn btn-outlined">Plan a Private AI Deployment</a>
    </div>
  `;
	const useCaseSection = document.createElement("section");
	useCaseSection.className = "services-section";
	useCaseSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">Use Cases</p>
      <h2 class="section-title">Where One-Stop AI Plus creates leverage</h2>
    </div>
    <div class="solutions-grid">
      ${useCases.map((item) => `
        <article class="solution-card card-elevated">
          <div class="gpu-system-meta">${renderTags(item.tags)}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <a href="${item.href || "/contact"}" class="btn btn-outlined">${item.cta}</a>
        </article>
      `).join("")}
    </div>
  `;
	const buildSection = document.createElement("section");
	buildSection.className = "services-section";
	buildSection.innerHTML = `
    <div class="section-header">
      <p class="section-label">AI Plus Method</p>
      <h2 class="section-title">Every solution follows the AI Plus path</h2>
    </div>
    <div class="solutions-grid">
      ${buildSteps.map(([title, text], index) => `
        <article class="solution-card card-elevated">
          <span class="solution-tag">0${index + 1}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `).join("")}
    </div>
  `;
	const cta = document.createElement("section");
	cta.className = "cta-section";
	cta.innerHTML = `
    <div class="cta-content">
      <h2>Turn an AI idea into a working system</h2>
      <p>Bring a workflow, model question, data boundary, or GPU need. Baytech will map the AI Plus path.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-tonal">Plan a Private AI Deployment</a>
      </div>
    </div>
  `;
	container.appendChild(pageHeader);
	container.appendChild(useCaseSection);
	container.appendChild(buildSection);
	container.appendChild(cta);
	return container;
}
function SolutionsRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyPage, {
		pageKey: "solutions",
		render: renderSolutions
	});
}
//#endregion
export { SolutionsRoute as component };
