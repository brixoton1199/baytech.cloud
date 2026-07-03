export const navItems = [
  { to: "/", key: "home", label: "AI Plus", mobileLabel: "AI Plus", icon: "home" },
  { to: "/gpu-cloud", key: "gpu-cloud", label: "GPU Platform", mobileLabel: "GPUs", icon: "gpu" },
  { to: "/services", key: "services", label: "Managed AI", mobileLabel: "Managed", icon: "cloud" },
  { to: "/approach", key: "approach", label: "Method", mobileLabel: "Approach", icon: "pulse" },
  { to: "/solutions", key: "solutions", label: "Solutions", mobileLabel: "Solutions", icon: "layers" },
  { to: "/insights", key: "insights", label: "Resources", mobileLabel: "Resources", icon: "doc" },
  { to: "/about", key: "about", label: "Company", mobileLabel: "Company", icon: "info" },
] as const;

export const pathToNav: Record<string, string> = {
  "/": "home",
  "/gpu-cloud": "gpu-cloud",
  "/services": "services",
  "/approach": "approach",
  "/solutions": "solutions",
  "/case": "case",
  "/insights": "insights",
  "/about": "about",
  "/contact": "contact",
  "/company-profile": "about",
};
