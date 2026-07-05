import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderInsights } from "../legacy-baytech/pages/insights.js";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Resources & Insights — Baytech AI Platform" },
      {
        name: "description",
        content:
          "Baytech notes on model selection, private AI, GPU platform planning, managed endpoints, and AI operations.",
      },
      { property: "og:title", content: "Baytech Resources & Insights" },
      {
        property: "og:description",
        content:
          "Notes and references for teams planning, running, and operating AI workloads.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsRoute,
});

function InsightsRoute() {
  return <LegacyPage pageKey="insights" render={renderInsights} />;
}
