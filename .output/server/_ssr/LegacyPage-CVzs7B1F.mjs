import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegacyPage-CVzs7B1F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LegacyPage({ pageKey, render }) {
	const hostRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const host = hostRef.current;
		if (!host) return;
		host.innerHTML = "";
		host.className = "";
		const legacyRoot = render();
		host.className = legacyRoot.className;
		host.append(...Array.from(legacyRoot.childNodes));
		requestAnimationFrame(() => {
			window.observeScrollAnimations?.();
		});
		return () => {
			host.innerHTML = "";
		};
	}, [pageKey, render]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: hostRef,
		"data-baytech-page": pageKey
	});
}
//#endregion
export { LegacyPage as t };
