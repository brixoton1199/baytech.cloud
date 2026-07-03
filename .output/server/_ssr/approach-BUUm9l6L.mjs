import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LegacyPage } from "./LegacyPage-CVzs7B1F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approach-BUUm9l6L.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		number: "01",
		title: "Assess",
		text: "Clarify the business workflow, data boundary, model expectations, risk profile, and operational constraints before choosing a technical path."
	},
	{
		number: "02",
		title: "Select",
		text: "Compare model options, hosting patterns, GPU requirements, retrieval designs, and managed endpoint choices against real workload needs."
	},
	{
		number: "03",
		title: "Prototype",
		text: "Build a focused proof path with realistic prompts, private data samples, evaluation criteria, and user workflow feedback."
	},
	{
		number: "04",
		title: "Deploy",
		text: "Turn the selected design into a production-ready system with infrastructure, endpoint behavior, access rules, monitoring, and support flow."
	},
	{
		number: "05",
		title: "Operate",
		text: "Measure usage, quality, cost, reliability, and workflow impact so the AI system can improve as models, data, and business needs change."
	}
];
function renderApproach() {
	const container = document.createElement("div");
	container.className = "page-approach";
	const header = document.createElement("section");
	header.className = "page-header animate-on-scroll";
	header.innerHTML = `
    <div class="section-header approach-page-header">
      <span class="section-label">Method</span>
      <h1>From AI question to production system</h1>
      <p class="section-subtitle">Baytech uses a practical AI Plus method to connect model selection, private data, GPU platform decisions, deployment, and business workflow adaptation.</p>
    </div>
  `;
	const approach = document.createElement("section");
	approach.className = "approach-section animate-on-scroll";
	approach.innerHTML = `
    <div class="approach-grid">
      ${steps.map((step) => `
        <div class="approach-card">
          <div class="approach-number">${step.number}</div>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </div>
      `).join("")}
    </div>
  `;
	const cta = document.createElement("section");
	cta.className = "cta-section animate-on-scroll";
	cta.innerHTML = `
    <div class="cta-content">
      <h2>Start with the decision, not the vendor list</h2>
      <p>Baytech can help you frame the right model, data, GPU, deployment, and workflow choices before production work expands.</p>
      <div class="cta-buttons">
        <a href="/contact" class="btn btn-filled">Start an AI Plus Assessment</a>
        <a href="/services" class="btn btn-outlined">Plan a Managed AI Deployment</a>
      </div>
    </div>
  `;
	container.appendChild(header);
	container.appendChild(approach);
	container.appendChild(cta);
	return container;
}
function ApproachRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyPage, {
		pageKey: "approach",
		render: renderApproach
	});
}
//#endregion
export { ApproachRoute as component };
