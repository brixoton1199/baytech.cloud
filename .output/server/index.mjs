globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-03T16:01:40.820Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1b-kz8PplxdpOpJ9JPX5uPNEbSOO5Q\"",
		"mtime": "2026-07-03T16:01:40.793Z",
		"size": 27,
		"path": "../public/_redirects"
	},
	"/assets/approach-BP9rN7ok.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ec-z+CYMtK3SifTjGkr1CAfx6AJ8DQ\"",
		"mtime": "2026-07-03T16:02:16.137Z",
		"size": 2540,
		"path": "../public/assets/approach-BP9rN7ok.js"
	},
	"/assets/about-BHQtb7zj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1566-+QEmt8MM6fyWJ9iuNgn/RtOJ1Mo\"",
		"mtime": "2026-07-03T16:02:16.136Z",
		"size": 5478,
		"path": "../public/assets/about-BHQtb7zj.js"
	},
	"/assets/baytech-CWkJVgP4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15773-Am1k58CW9235IC8k7lCrZtTMTsI\"",
		"mtime": "2026-07-03T16:02:16.142Z",
		"size": 87923,
		"path": "../public/assets/baytech-CWkJVgP4.css"
	},
	"/assets/baytech-logo-mark.png": {
		"type": "image/png",
		"etag": "\"66f6-qR/+8dvhZrf8VOjca4kDj5ZK49A\"",
		"mtime": "2026-07-03T16:01:40.805Z",
		"size": 26358,
		"path": "../public/assets/baytech-logo-mark.png"
	},
	"/assets/baytech-logo-mark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3555-Pzz3oRoU7M2FyyTWVn9NZRE8kcc\"",
		"mtime": "2026-07-03T16:01:40.806Z",
		"size": 13653,
		"path": "../public/assets/baytech-logo-mark.svg"
	},
	"/assets/case-BIUTbfUC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6e-ntrRQdHu/F6uZZ1g2ysBzYIvQtA\"",
		"mtime": "2026-07-03T16:02:16.137Z",
		"size": 2670,
		"path": "../public/assets/case-BIUTbfUC.js"
	},
	"/assets/baytech-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"10c69-h9jjb3FICVbgBcB1FB0uyB1UNP0\"",
		"mtime": "2026-07-03T16:01:40.811Z",
		"size": 68713,
		"path": "../public/assets/baytech-logo.svg"
	},
	"/assets/baytech-logo.png": {
		"type": "image/png",
		"etag": "\"2e5f4-gPwjoIO5kCYZVmjlxh85lI4VBiw\"",
		"mtime": "2026-07-03T16:01:40.809Z",
		"size": 189940,
		"path": "../public/assets/baytech-logo.png"
	},
	"/assets/company-profile-Czow7sN0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b9-yB5jgqzBSqmbHP7PNIYbX6mp7D8\"",
		"mtime": "2026-07-03T16:02:16.138Z",
		"size": 1721,
		"path": "../public/assets/company-profile-Czow7sN0.js"
	},
	"/assets/contact-CsRo7FFv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba9-TBPFoh9TmsOiOWvwlKgLxgeynqw\"",
		"mtime": "2026-07-03T16:02:16.139Z",
		"size": 7081,
		"path": "../public/assets/contact-CsRo7FFv.js"
	},
	"/assets/gpu-cloud-Xt-Z5D2A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2052-R1iiJUFmw4YqSYgR5QnzXUoBoIs\"",
		"mtime": "2026-07-03T16:02:16.139Z",
		"size": 8274,
		"path": "../public/assets/gpu-cloud-Xt-Z5D2A.js"
	},
	"/assets/insights-D8DuZwHG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1598-C7+Hb1xvaHBes0qRzIPWfbStMHo\"",
		"mtime": "2026-07-03T16:02:16.140Z",
		"size": 5528,
		"path": "../public/assets/insights-D8DuZwHG.js"
	},
	"/assets/index-igexv3tX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c181-q8XdYiGYy5Rs+wrM0f4tBx7jbhM\"",
		"mtime": "2026-07-03T16:02:16.135Z",
		"size": 442753,
		"path": "../public/assets/index-igexv3tX.js"
	},
	"/assets/LegacyPage-rqLIDZmk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c5-mJv/w8v0klClwDzthHZP5okddRQ\"",
		"mtime": "2026-07-03T16:02:16.135Z",
		"size": 453,
		"path": "../public/assets/LegacyPage-rqLIDZmk.js"
	},
	"/assets/ireland-map-hero-linework.png": {
		"type": "image/png",
		"etag": "\"190d1-MR9HO3NH8oPgn05pmdTqpMk5hRU\"",
		"mtime": "2026-07-03T16:01:40.813Z",
		"size": 102609,
		"path": "../public/assets/ireland-map-hero-linework.png"
	},
	"/assets/router-de8RupPQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156-SDJTLOo1kpgKcM1tPiuJ/ePEsg8\"",
		"mtime": "2026-07-03T16:02:16.140Z",
		"size": 342,
		"path": "../public/assets/router-de8RupPQ.js"
	},
	"/assets/routes-DEF52_cw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3696-ZZzzDn+HSCt7TF/Uyz3ho13szyw\"",
		"mtime": "2026-07-03T16:02:16.140Z",
		"size": 13974,
		"path": "../public/assets/routes-DEF52_cw.js"
	},
	"/assets/services-CbDXbTR1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1832-V+47HKucBjg8qowHDzEcTWTXlfI\"",
		"mtime": "2026-07-03T16:02:16.141Z",
		"size": 6194,
		"path": "../public/assets/services-CbDXbTR1.js"
	},
	"/assets/solutions-Cusa53yv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14cf-OZFu86/Xaw42VjFdDz34jSIt4HA\"",
		"mtime": "2026-07-03T16:02:16.141Z",
		"size": 5327,
		"path": "../public/assets/solutions-Cusa53yv.js"
	},
	"/assets/styles-UgyK4iQg.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"11990-bVLs35sOcwIkq+erm68UHFT6Y8g\"",
		"mtime": "2026-07-03T16:02:16.143Z",
		"size": 72080,
		"path": "../public/assets/styles-UgyK4iQg.css"
	},
	"/assets/ireland-map.png": {
		"type": "image/png",
		"etag": "\"b7290-Qni4X7IH/QJ4S/4gNFyAGBPs6vs\"",
		"mtime": "2026-07-03T16:01:40.819Z",
		"size": 750224,
		"path": "../public/assets/ireland-map.png"
	},
	"/assets/Baytech.cloud Strategy Presentation.pptx": {
		"type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		"etag": "\"161d11-cdVweC2C+TgFgz99DQ95KWj9d6U\"",
		"mtime": "2026-07-03T16:01:40.804Z",
		"size": 1449233,
		"path": "../public/assets/Baytech.cloud Strategy Presentation.pptx"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ee_Ij4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ee_Ij4
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
