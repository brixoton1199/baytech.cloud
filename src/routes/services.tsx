import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderServices } from "../legacy-baytech/pages/services.js";

export const Route = createFileRoute("/services")({
  component: ServicesRoute,
});

function ServicesRoute() {
  return <LegacyPage pageKey="services" render={renderServices} />;
}
