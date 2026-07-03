import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as baytech_logo_mark_default, t as baytech_logo_default } from "./baytech-logo-CViAaRFG.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DNx4vsXQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var baytech_default = "/assets/baytech-CWkJVgP4.css";
var logoSources = {
	mark: baytech_logo_mark_default,
	wordmark: baytech_logo_default
};
function stripSvgHeader(svg) {
	return svg.replace(/<\?xml[^>]*>\s*/i, "").replace(/\sstyle="[^"]*"/i, "").replace(/\saria-labelledby="[^"]*"/i, "").replace(/<title[\s\S]*?<\/title>/i, "");
}
function getBaytechLogoHtml({ variant = "wordmark", className = "", label = "Baytech Logo", decorative = false } = {}) {
	const roleAttrs = decorative ? "aria-hidden=\"true\" focusable=\"false\"" : `role="img" aria-label="${label}" focusable="false"`;
	const classes = ["baytech-logo-svg", ...className.split(/\s+/).filter(Boolean)].join(" ");
	return stripSvgHeader(logoSources[variant]).replace(/<svg\b/i, `<svg class="${classes}" ${roleAttrs}`);
}
function BaytechLogo(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { dangerouslySetInnerHTML: { __html: getBaytechLogoHtml(props) } });
}
var navItems = [
	{
		to: "/",
		key: "home",
		label: "AI Plus",
		mobileLabel: "AI Plus",
		icon: "home"
	},
	{
		to: "/gpu-cloud",
		key: "gpu-cloud",
		label: "GPU Platform",
		mobileLabel: "GPUs",
		icon: "gpu"
	},
	{
		to: "/services",
		key: "services",
		label: "Managed AI",
		mobileLabel: "Managed",
		icon: "cloud"
	},
	{
		to: "/approach",
		key: "approach",
		label: "Method",
		mobileLabel: "Approach",
		icon: "pulse"
	},
	{
		to: "/solutions",
		key: "solutions",
		label: "Solutions",
		mobileLabel: "Solutions",
		icon: "layers"
	},
	{
		to: "/insights",
		key: "insights",
		label: "Resources",
		mobileLabel: "Resources",
		icon: "doc"
	},
	{
		to: "/about",
		key: "about",
		label: "Company",
		mobileLabel: "Company",
		icon: "info"
	}
];
var pathToNav = {
	"/": "home",
	"/gpu-cloud": "gpu-cloud",
	"/services": "services",
	"/approach": "approach",
	"/solutions": "solutions",
	"/case": "case",
	"/insights": "insights",
	"/about": "about",
	"/contact": "contact",
	"/company-profile": "about"
};
function Icon({ name }) {
	const common = {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2
	};
	switch (name) {
		case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "9 22 9 12 15 12 15 22" })]
		});
		case "gpu": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "4",
					y: "4",
					width: "16",
					height: "16",
					rx: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "9",
					y: "9",
					width: "6",
					height: "6",
					rx: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 1v3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 1v3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 20v3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 20v3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 9h3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 15h3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 9h3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 15h3" })
			]
		});
		case "cloud": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
		});
		case "pulse": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			...common,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
		});
		case "layers": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "2 17 12 22 22 17" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "2 12 12 17 22 12" })
			]
		});
		case "doc": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "14 2 14 8 20 8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "16",
					y1: "13",
					x2: "8",
					y2: "13"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "16",
					y1: "17",
					x2: "8",
					y2: "17"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "10",
					y1: "9",
					x2: "8",
					y2: "9"
				})
			]
		});
		case "info": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 16v-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8h.01" })
			]
		});
		case "proof": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "12",
					y1: "22.08",
					x2: "12",
					y2: "12"
				})
			]
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 1v2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21v2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.22 4.22l1.42 1.42" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.36 18.36l1.42 1.42" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1 12h2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12h2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.22 19.78l1.42-1.42" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.36 5.64l1.42-1.42" })
			]
		});
		case "contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "22,6 12,13 2,6" })]
		});
		case "close": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "18",
				y1: "6",
				x2: "6",
				y2: "18"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "6",
				y1: "6",
				x2: "18",
				y2: "18"
			})]
		});
	}
}
function SheetIcon({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sheet-link-icon",
		children
	});
}
function setupAnimationObservers() {
	const animationObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-in");
				animationObserver.unobserve(entry.target);
			}
		});
	}, {
		root: null,
		rootMargin: "0px 0px -50px 0px",
		threshold: .1
	});
	const counterObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			const element = entry.target;
			element.classList.add("animate-count");
			counterObserver.unobserve(element);
		});
	}, {
		root: null,
		rootMargin: "0px",
		threshold: .3
	});
	window.observeScrollAnimations = () => {
		requestAnimationFrame(() => {
			document.querySelectorAll(".animate-on-scroll").forEach((el) => {
				animationObserver.observe(el);
			});
			document.querySelectorAll(".stat-value").forEach((el) => {
				counterObserver.observe(el);
			});
		});
	};
	window.observeScrollAnimations();
	return () => {
		animationObserver.disconnect();
		counterObserver.disconnect();
		delete window.observeScrollAnimations;
	};
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-column",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "AI Plus" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "footer-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Model Selection"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Private AI"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Managed Endpoints"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Production Operations"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-column",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Platform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "footer-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gpu-cloud",
									children: "GPU Platform"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gpu-cloud",
									children: "Inference"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gpu-cloud",
									children: "Training and Fine-Tuning"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									children: "Private Model Deployment"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-column",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Solutions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "footer-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									children: "Private Knowledge Assistant"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									children: "Customer Support AI"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									children: "Document AI"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									children: "Operations Copilot"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-column",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "footer-contact",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "77 Camden Street Lower," }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dublin 2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "DUBLIN" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ireland" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "D02 XE80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: { marginTop: "var(--space-3)" },
									children: "support@baytech.cloud"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "+44 7886 066968" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-brand-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "footer-brand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { dangerouslySetInnerHTML: { __html: getBaytechLogoHtml({
						className: "footer-logo-image",
						label: "Baytech Logo"
					}) } })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-description-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-description",
						children: "Baytech is a One-Stop AI Plus provider helping teams choose models, protect private data, run AI workloads on the right GPU and cloud platform, adapt AI to business workflows, and operate production AI systems."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-description",
						style: { marginTop: "var(--space-3)" },
						children: "Bring a model question, data boundary, workload, or business process. Baytech will help map the next AI Plus step."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "footer-copy",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" baytech.cloud"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-legal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Privacy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Terms" })]
				})]
			})
		]
	});
}
function BaytechAppShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [sideSheetOpen, setSideSheetOpen] = (0, import_react.useState)(false);
	const [showBackToTop, setShowBackToTop] = (0, import_react.useState)(false);
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const activeNav = (0, import_react.useMemo)(() => pathToNav[pathname] ?? "home", [pathname]);
	(0, import_react.useEffect)(() => {
		const teardownObservers = setupAnimationObservers();
		window.toggleSideSheet = (show = true) => setSideSheetOpen(show);
		const onScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setShowBackToTop(scrollTop > 300);
			setScrollProgress(docHeight > 0 ? scrollTop / docHeight * 100 : 0);
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			const hero = document.querySelector(".hero-motion-stage");
			if (!hero) return;
			const heroRect = hero.getBoundingClientRect();
			if (heroRect.bottom <= 0 || heroRect.top >= window.innerHeight) return;
			const progress = Math.max(0, Math.min(1, -heroRect.top / (heroRect.height * .72)));
			hero.style.setProperty("--parallax-shift", `${progress * 24}px`);
			hero.style.setProperty("--hero-copy-y", `${Math.round(progress * -18)}px`);
			hero.style.setProperty("--hero-map-y", `${Math.round(progress * 28)}px`);
			hero.style.setProperty("--hero-fade", `${(1 - progress * .16).toFixed(3)}`);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("scroll", onScroll);
			delete window.toggleSideSheet;
			teardownObservers();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("sheet-open", sideSheetOpen);
	}, [sideSheetOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "nav-rail",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nav-rail-header",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "nav-rail-logo",
							"aria-label": "baytech.cloud home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaytechLogo, {
								variant: "mark",
								className: "logo-mark",
								decorative: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaytechLogo, {
								variant: "wordmark",
								className: "logo-wordmark",
								decorative: true
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nav-rail-items",
						children: [
							navItems.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `rail-item${activeNav === item.key ? " active" : ""}`,
								"data-nav": item.key,
								"aria-label": item.label,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: item.icon })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-label",
									children: item.label
								})]
							}, item.key)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rail-item rail-item-disabled",
								"aria-label": "Proof Points (Coming Soon)",
								title: "Coming Soon",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "proof" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-label",
									children: "Proof"
								})]
							}),
							navItems.slice(5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `rail-item${activeNav === item.key ? " active" : ""}`,
								"data-nav": item.key,
								"aria-label": item.label,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: item.icon })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-label",
									children: item.label
								})]
							}, item.key)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rail-item rail-item-disabled",
								"aria-label": "Live Status (Coming Soon)",
								title: "Coming Soon",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "status" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rail-item-label",
									children: "Live Status"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nav-rail-fab",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "rail-fab",
							"aria-label": "Contact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rail-fab-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "contact" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rail-fab-text",
								children: "Contact"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "main-pane",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "main-content",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "page-content",
						className: "page-content",
						children
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `side-sheet${sideSheetOpen ? " visible" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "side-sheet-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "side-sheet-title",
							children: "AI Plus Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "side-sheet-close",
							"aria-label": "Close side sheet",
							onClick: () => setSideSheetOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "close" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "sheet-card-title",
							children: "AI Plus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sheet-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "▣" }), "Model Selection"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "◇" }), "Private AI"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "↔" }), "Managed Endpoints"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/gpu-cloud",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "▦" }), "GPU Platform"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "sheet-card-title",
							children: "Resources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sheet-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/approach",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "↗" }), "Method"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/insights",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "□" }), "Resources"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about",
									className: "sheet-link",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetIcon, { children: "○" }), "Company"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-cta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "sheet-cta-title",
								children: "Start with your AI question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sheet-cta-text",
								children: "Start with your model, data, workload, or business goal. Baytech will help map the right AI Plus path."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "sheet-cta-btn",
								children: "Start an Assessment"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mobile-nav",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-nav-items",
					children: [navItems.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: `mobile-nav-item${activeNav === item.key ? " active" : ""}`,
						"data-nav": item.key,
						"aria-label": item.label,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: item.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.mobileLabel })]
					}, item.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: `mobile-nav-item${activeNav === "contact" ? " active" : ""}`,
						"data-nav": "contact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `back-to-top${showBackToTop ? " visible" : ""}`,
				"aria-label": "Back to top",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "18 15 12 9 6 15" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scroll-progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-progress-bar",
					style: { width: `${scrollProgress}%` }
				})
			})
		]
	});
}
var styles_default = "/assets/styles-UgyK4iQg.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Baytech.cloud | One-Stop AI Plus" },
			{
				name: "description",
				content: "Baytech helps teams choose models, protect private data, run AI workloads on the right GPU and cloud platform, and operate production AI systems."
			},
			{
				name: "author",
				content: "Baytech"
			},
			{
				property: "og:title",
				content: "Baytech.cloud | One-Stop AI Plus"
			},
			{
				property: "og:description",
				content: "Model choice, private AI, GPU platform planning, managed endpoints, workflow adaptation, and production AI operations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: baytech_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaytechAppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$9 = () => import("./solutions-Jz1eX9W8.mjs");
var Route$9 = createFileRoute("/solutions")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./services-CDTH7eWI.mjs");
var Route$8 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./insights-BSQ2O6Pj.mjs");
var Route$7 = createFileRoute("/insights")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./gpu-cloud-QuOvCBqZ.mjs");
var Route$6 = createFileRoute("/gpu-cloud")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./contact-BawabsKd.mjs");
var Route$5 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./company-profile-BHWKeYqI.mjs");
var Route$4 = createFileRoute("/company-profile")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./case-D2IqbizG.mjs");
var Route$3 = createFileRoute("/case")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./approach-BUUm9l6L.mjs");
var Route$2 = createFileRoute("/approach")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./about-BPAqgLOy.mjs");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-D4phL5ws.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SolutionsRoute = Route$9.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$10
});
var ServicesRoute = Route$8.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$10
});
var InsightsRoute = Route$7.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$10
});
var GpuCloudRoute = Route$6.update({
	id: "/gpu-cloud",
	path: "/gpu-cloud",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var CompanyProfileRoute = Route$4.update({
	id: "/company-profile",
	path: "/company-profile",
	getParentRoute: () => Route$10
});
var CaseRoute = Route$3.update({
	id: "/case",
	path: "/case",
	getParentRoute: () => Route$10
});
var ApproachRoute = Route$2.update({
	id: "/approach",
	path: "/approach",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute,
	ApproachRoute,
	CaseRoute,
	CompanyProfileRoute,
	ContactRoute,
	GpuCloudRoute,
	InsightsRoute,
	ServicesRoute,
	SolutionsRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
