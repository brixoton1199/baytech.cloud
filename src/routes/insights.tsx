import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderInsights } from "../legacy-baytech/pages/insights.js";

export const Route = createFileRoute("/insights")({
  component: InsightsRoute,
});

function InsightsRoute() {
  return <LegacyPage pageKey="insights" render={renderInsights} />;
}
