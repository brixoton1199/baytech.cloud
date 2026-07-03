//#region node_modules/.nitro/vite/services/ssr/assets/router-BHKtbBTt.js
function createBreadcrumb(pageName, parentPath = null, parentName = null) {
	const breadcrumb = document.createElement("nav");
	breadcrumb.className = "breadcrumb";
	breadcrumb.setAttribute("aria-label", "Breadcrumb");
	let html = `<a href="/">Home</a>`;
	if (parentPath && parentName) html += `<span class="separator">›</span><a href="${parentPath}">${parentName}</a>`;
	html += `<span class="separator">›</span><span class="current">${pageName}</span>`;
	breadcrumb.innerHTML = html;
	return breadcrumb;
}
//#endregion
export { createBreadcrumb as t };
