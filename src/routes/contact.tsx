import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderContact } from "../legacy-baytech/pages/contact.js";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Baytech — Start an AI Plus Assessment" },
      {
        name: "description",
        content:
          "Reach Baytech to discuss GPU capacity, private AI deployment, AI data center opportunities, or a managed AI engagement.",
      },
      { property: "og:title", content: "Contact Baytech" },
      {
        property: "og:description",
        content:
          "Discuss AI workloads, GPU capacity, private deployments, or AI data center opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return <LegacyPage pageKey="contact" render={renderContact} />;
}
