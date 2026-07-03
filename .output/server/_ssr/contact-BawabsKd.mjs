import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LegacyPage } from "./LegacyPage-CVzs7B1F.mjs";
import { t as createBreadcrumb } from "./router-BHKtbBTt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BawabsKd.js
var import_jsx_runtime = require_jsx_runtime();
function renderContact() {
	const container = document.createElement("div");
	container.className = "page-contact";
	const breadcrumb = createBreadcrumb("Contact");
	container.appendChild(breadcrumb);
	const pageHeader = document.createElement("section");
	pageHeader.className = "page-header";
	pageHeader.innerHTML = `
    <p class="section-label">Contact</p>
    <h1>Start your AI Plus conversation</h1>
    <p>Share the model, data, GPU, deployment, or business workflow decision in front of you. Baytech will help shape a practical next step.</p>
  `;
	const contactSection = document.createElement("section");
	contactSection.className = "contact-section";
	contactSection.innerHTML = `
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
  `;
	const cta = document.createElement("section");
	cta.className = "cta-section";
	cta.innerHTML = `
    <div class="cta-content">
      <h2>Prefer a direct conversation?</h2>
      <p>Reach Baytech by email or phone if the AI Plus question is already urgent or specific.</p>
      <div class="cta-buttons">
        <a href="mailto:support@baytech.cloud" class="btn btn-filled">Email Us</a>
        <a href="tel:+447886066968" class="btn btn-tonal">Call Us</a>
      </div>
    </div>
  `;
	container.appendChild(pageHeader);
	container.appendChild(contactSection);
	container.appendChild(cta);
	setTimeout(() => {
		const form = document.getElementById("contact-form");
		const submitBtn = document.getElementById("submit-btn");
		const formStatus = document.getElementById("form-status");
		const btnText = submitBtn?.querySelector(".btn-label");
		const btnLoader = submitBtn?.querySelector(".btn-loader");
		if (form) {
			const validationMessages = {
				name: { valueMissing: "Please enter your name." },
				email: {
					valueMissing: "Please enter your email address.",
					typeMismatch: "Please enter a valid email address."
				},
				message: { valueMissing: "Please tell us about your AI Plus question..." }
			};
			const getValidationMessage = (field) => {
				const messages = validationMessages[field.id];
				if (!messages) return "";
				if (field.validity.valueMissing) return messages.valueMissing;
				if (field.validity.typeMismatch) return messages.typeMismatch;
				return "";
			};
			const updateValidationMessage = (field) => {
				field.setCustomValidity("");
				field.setCustomValidity(getValidationMessage(field));
			};
			const validationFields = form.querySelectorAll("input[required], textarea[required]");
			validationFields.forEach((field) => {
				updateValidationMessage(field);
				field.addEventListener("invalid", () => updateValidationMessage(field));
				field.addEventListener("input", () => updateValidationMessage(field));
				field.addEventListener("blur", () => updateValidationMessage(field));
			});
			form.addEventListener("submit", async (e) => {
				e.preventDefault();
				if (submitBtn) {
					submitBtn.disabled = true;
					if (btnText) btnText.style.display = "none";
					if (btnLoader) btnLoader.style.display = "inline";
				}
				if (formStatus) formStatus.style.display = "none";
				try {
					const formData = new FormData(form);
					const data = await (await fetch("https://api.web3forms.com/submit", {
						method: "POST",
						body: formData
					})).json();
					if (data.success) {
						if (formStatus) {
							formStatus.className = "form-status form-success";
							formStatus.innerHTML = "AI Plus inquiry sent successfully. We'll get back to you soon.";
							formStatus.style.display = "block";
						}
						form.reset();
						validationFields.forEach((field) => updateValidationMessage(field));
					} else throw new Error(data.message || "Something went wrong");
				} catch (error) {
					if (formStatus) {
						formStatus.className = "form-status form-error";
						formStatus.innerHTML = "Failed to send message. Please try again or email us directly.";
						formStatus.style.display = "block";
					}
				} finally {
					if (submitBtn) {
						submitBtn.disabled = false;
						if (btnText) btnText.style.display = "inline";
						if (btnLoader) btnLoader.style.display = "none";
					}
				}
			});
		}
	}, 100);
	return container;
}
function ContactRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyPage, {
		pageKey: "contact",
		render: renderContact
	});
}
//#endregion
export { ContactRoute as component };
