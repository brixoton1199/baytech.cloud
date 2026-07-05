import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useEffect, useMemo, useState } from "react";

import { BaytechLogo, getBaytechLogoHtml } from "./logo";
import { navItems, pathToNav } from "./navigation";

type BaytechAppShellProps = {
  children: ReactNode;
};

type IconName = (typeof navItems)[number]["icon"] | "proof" | "status" | "contact" | "close";

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "gpu":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 1v3" />
          <path d="M15 1v3" />
          <path d="M9 20v3" />
          <path d="M15 20v3" />
          <path d="M1 9h3" />
          <path d="M1 15h3" />
          <path d="M20 9h3" />
          <path d="M20 15h3" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    case "proof":
      return (
        <svg {...common}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "status":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
  }
}

function SheetIcon({ children }: { children: ReactNode }) {
  return <span className="sheet-link-icon">{children}</span>;
}

function setupAnimationObservers() {
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 },
  );

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        element.classList.add("animate-count");
        counterObserver.unobserve(element);
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.3 },
  );

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
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>AI Plus</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services">Model Selection</Link>
            </li>
            <li>
              <Link to="/services">Private AI</Link>
            </li>
            <li>
              <Link to="/services">Managed Endpoints</Link>
            </li>
            <li>
              <Link to="/services">Production Operations</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>
          <ul className="footer-links">
            <li>
              <Link to="/gpu-cloud">GPU Platform</Link>
            </li>
            <li>
              <Link to="/gpu-cloud">Inference</Link>
            </li>
            <li>
              <Link to="/gpu-cloud">Training and Fine-Tuning</Link>
            </li>
            <li>
              <Link to="/services">Private Model Deployment</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul className="footer-links">
            <li>
              <Link to="/solutions">Private Knowledge Assistant</Link>
            </li>
            <li>
              <Link to="/solutions">Customer Support AI</Link>
            </li>
            <li>
              <Link to="/solutions">Document AI</Link>
            </li>
            <li>
              <Link to="/solutions">Operations Copilot</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>77 Camden Street Lower,</li>
            <li>Dublin 2</li>
            <li>DUBLIN</li>
            <li>Ireland</li>
            <li>D02 XE80</li>
            <li style={{ marginTop: "var(--space-3)" }}>support@baytech.cloud</li>
            <li>+44 7886 066968</li>
          </ul>
        </div>
      </div>

      <div className="footer-brand-section">
        <div className="footer-brand">
          <span
            dangerouslySetInnerHTML={{
              __html: getBaytechLogoHtml({ className: "footer-logo-image", label: "Baytech Logo" }),
            }}
          />
        </div>
        <div className="footer-description-full">
          <p className="footer-description">
            Baytech is a One-Stop AI Plus provider helping teams choose models, protect private data,
            run AI workloads on the right GPU and cloud platform, adapt AI to business workflows, and
            operate production AI systems.
          </p>
          <p className="footer-description" style={{ marginTop: "var(--space-3)" }}>
            Bring a model question, data boundary, workload, or business process. Baytech will help
            map the next AI Plus step.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} baytech.cloud</p>
        <div className="footer-legal">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export function BaytechAppShell({ children }: BaytechAppShellProps) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [sideSheetOpen, setSideSheetOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeNav = useMemo(() => pathToNav[pathname] ?? "home", [pathname]);

  useEffect(() => {
    const teardownObservers = setupAnimationObservers();

    window.toggleSideSheet = (show = true) => setSideSheetOpen(show);

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowBackToTop(scrollTop > 300);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const hero = document.querySelector<HTMLElement>(".hero-motion-stage");
      if (!hero) return;
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom <= 0 || heroRect.top >= window.innerHeight) return;
      const progress = Math.max(0, Math.min(1, -heroRect.top / (heroRect.height * 0.72)));
      hero.style.setProperty("--parallax-shift", `${progress * 24}px`);
      hero.style.setProperty("--hero-copy-y", `${Math.round(progress * -18)}px`);
      hero.style.setProperty("--hero-map-y", `${Math.round(progress * 28)}px`);
      hero.style.setProperty("--hero-fade", `${(1 - progress * 0.16).toFixed(3)}`);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      delete window.toggleSideSheet;
      teardownObservers();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sheet-open", sideSheetOpen);
  }, [sideSheetOpen]);

  return (
    <div id="app">
      <nav className="nav-rail">
        <div className="nav-rail-header">
          <Link to="/" className="nav-rail-logo" aria-label="baytech.cloud home">
            <BaytechLogo variant="mark" className="logo-mark" decorative />
            <BaytechLogo variant="wordmark" className="logo-wordmark" decorative />
          </Link>
        </div>

        <div className="nav-rail-items">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`rail-item${activeNav === item.key ? " active" : ""}`}
              data-nav={item.key}
              aria-label={item.label}
            >
              <span className="rail-item-icon">
                <Icon name={item.icon} />
              </span>
              <span className="rail-item-label">{item.label}</span>
            </Link>
          ))}

          <span className="rail-item rail-item-disabled" aria-label="Proof Points (Coming Soon)" title="Coming Soon">
            <span className="rail-item-icon">
              <Icon name="proof" />
            </span>
            <span className="rail-item-label">Proof</span>
          </span>

          {navItems.slice(5).map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`rail-item${activeNav === item.key ? " active" : ""}`}
              data-nav={item.key}
              aria-label={item.label}
            >
              <span className="rail-item-icon">
                <Icon name={item.icon} />
              </span>
              <span className="rail-item-label">{item.label}</span>
            </Link>
          ))}

          <span className="rail-item rail-item-disabled" aria-label="Live Status (Coming Soon)" title="Coming Soon">
            <span className="rail-item-icon">
              <Icon name="status" />
            </span>
            <span className="rail-item-label">Live Status</span>
          </span>
        </div>

        <div className="nav-rail-fab">
          <Link to="/contact" className="rail-fab" aria-label="Contact">
            <span className="rail-fab-icon">
              <Icon name="contact" />
            </span>
            <span className="rail-fab-text">Contact</span>
          </Link>
        </div>
      </nav>

      <div className="main-pane">
        <main className="main-content">
          <div id="page-content" className="page-content">
            {children}
          </div>
        </main>
        <Footer />
      </div>

      <aside className={`side-sheet${sideSheetOpen ? " visible" : ""}`}>
        <div className="side-sheet-header">
          <h3 className="side-sheet-title">AI Plus Quick Links</h3>
          <button className="side-sheet-close" aria-label="Close side sheet" onClick={() => setSideSheetOpen(false)}>
            <Icon name="close" />
          </button>
        </div>

        <div className="sheet-card">
          <h4 className="sheet-card-title">AI Plus</h4>
          <div className="sheet-links">
            <Link to="/services" className="sheet-link">
              <SheetIcon>▣</SheetIcon>
              Model Selection
            </Link>
            <Link to="/services" className="sheet-link">
              <SheetIcon>◇</SheetIcon>
              Private AI
            </Link>
            <Link to="/services" className="sheet-link">
              <SheetIcon>↔</SheetIcon>
              Managed Endpoints
            </Link>
            <Link to="/gpu-cloud" className="sheet-link">
              <SheetIcon>▦</SheetIcon>
              GPU Platform
            </Link>
          </div>
        </div>

        <div className="sheet-card">
          <h4 className="sheet-card-title">Resources</h4>
          <div className="sheet-links">
            <Link to="/approach" className="sheet-link">
              <SheetIcon>↗</SheetIcon>
              Method
            </Link>
            <Link to="/insights" className="sheet-link">
              <SheetIcon>□</SheetIcon>
              Resources
            </Link>
            <Link to="/about" className="sheet-link">
              <SheetIcon>○</SheetIcon>
              Company
            </Link>
          </div>
        </div>

        <div className="sheet-cta">
          <h4 className="sheet-cta-title">Start with your AI question</h4>
          <p className="sheet-cta-text">
            Start with your model, data, workload, or business goal. Baytech will help map the right
            AI Plus path.
          </p>
          <Link to="/contact" className="sheet-cta-btn">
            Start an Assessment
          </Link>
        </div>
      </aside>

      <nav className="mobile-nav">
        <div className="mobile-nav-items">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`mobile-nav-item${activeNav === item.key ? " active" : ""}`}
              data-nav={item.key}
              aria-label={item.label}
            >
              <Icon name={item.icon} />
              <span>{item.mobileLabel}</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className={`mobile-nav-item${activeNav === "contact" ? " active" : ""}`}
            data-nav="contact"
          >
            <Icon name="contact" />
            <span>Contact</span>
          </Link>
        </div>
      </nav>

      <button
        className={`back-to-top${showBackToTop ? " visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
    </div>
  );
}
