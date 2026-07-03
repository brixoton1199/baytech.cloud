import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderAbout } from "../legacy-baytech/pages/about.js";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return <LegacyPage pageKey="about" render={renderAbout} />;
}
