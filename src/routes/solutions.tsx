import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderSolutions } from "../legacy-baytech/pages/solutions.js";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions for Business Workflows | Baytech" },
      {
        name: "description",
        content:
          "Private knowledge assistants, customer support AI, document AI, operations copilots, engineering assistants, and multimodal workloads — connected to your data and workflows.",
      },
      { property: "og:title", content: "AI Solutions — Baytech" },
      {
        property: "og:description",
        content:
          "AI adapted to the work your teams already do — with the right model, data boundary, and GPU platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsRoute,
});

function SolutionsRoute() {
  return <LegacyPage pageKey="solutions" render={renderSolutions} />;
}
