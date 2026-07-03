import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { CompanyProfilePage } from "../legacy-baytech/pages/company-profile.js";

export const Route = createFileRoute("/company-profile")({
  component: CompanyProfileRoute,
});

function CompanyProfileRoute() {
  return <LegacyPage pageKey="company-profile" render={CompanyProfilePage} />;
}
