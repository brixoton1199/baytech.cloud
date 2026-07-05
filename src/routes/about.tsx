import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderAbout } from "../legacy-baytech/pages/about.js";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Baytech — European AI Infrastructure Partner" },
      {
        name: "description",
        content:
          "Baytech is a One-Stop AI Plus partner helping teams choose models, protect private data, run AI on the right GPU platform, and operate production AI systems in Europe.",
      },
      { property: "og:title", content: "About Baytech" },
      {
        property: "og:description",
        content:
          "Who we are and how we help teams move AI from idea to production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return <LegacyPage pageKey="about" render={renderAbout} />;
}
