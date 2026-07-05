import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderCase } from "../legacy-baytech/pages/case.js";

export const Route = createFileRoute("/case")({
  component: CaseRoute,
});

function CaseRoute() {
  return <LegacyPage pageKey="case" render={renderCase} />;
}
