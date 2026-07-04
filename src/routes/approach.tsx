import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderApproach } from "../legacy-baytech/pages/approach.js";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Baytech Method — How We Plan and Run AI Workloads" },
      {
        name: "description",
        content:
          "Baytech's method for AI decisions that have to survive production: model, data, compute, deployment, workflow, and operations as one connected system.",
      },
      { property: "og:title", content: "Baytech Method — AI Delivery Approach" },
      {
        property: "og:description",
        content:
          "How Baytech connects model, data, GPU, deployment, and operations into a single production-ready path.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachRoute,
});

function ApproachRoute() {
  return <LegacyPage pageKey="approach" render={renderApproach} />;
}
