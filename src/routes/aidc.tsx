import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderAidc } from "../legacy-baytech/pages/aidc.js";

export const Route = createFileRoute("/aidc")({
  head: () => ({
    meta: [
      { title: "AI Data Center Site & Resource Integration — Baytech" },
      {
        name: "description",
        content:
          "Baytech integrates powered land, power pathways, permits, capital, and operating partners for AI data center development in Europe.",
      },
      {
        property: "og:title",
        content: "AI Data Center Site & Resource Integration — Baytech",
      },
      {
        property: "og:description",
        content:
          "Powered land, grid connection, cooling, fiber, and partner coordination for European AI data center opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AidcRoute,
});

function AidcRoute() {
  return <LegacyPage pageKey="aidc" render={renderAidc} />;
}
