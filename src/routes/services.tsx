import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderServices } from "../legacy-baytech/pages/services.js";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Managed AI — Model, Data, Endpoints, Operations | Baytech" },
      {
        name: "description",
        content:
          "Baytech runs the operating layer between model idea and production AI: model strategy, private data architecture, managed endpoints, integration, and AI operations.",
      },
      { property: "og:title", content: "Managed AI Services — Baytech" },
      {
        property: "og:description",
        content:
          "From model decision to production AI service: strategy, private data, endpoints, integration, operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return <LegacyPage pageKey="services" render={renderServices} />;
}
