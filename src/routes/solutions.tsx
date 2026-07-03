import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderSolutions } from "../legacy-baytech/pages/solutions.js";

export const Route = createFileRoute("/solutions")({
  component: SolutionsRoute,
});

function SolutionsRoute() {
  return <LegacyPage pageKey="solutions" render={renderSolutions} />;
}
