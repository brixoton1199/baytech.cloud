import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderApproach } from "../legacy-baytech/pages/approach.js";

export const Route = createFileRoute("/approach")({
  component: ApproachRoute,
});

function ApproachRoute() {
  return <LegacyPage pageKey="approach" render={renderApproach} />;
}
