import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderContact } from "../legacy-baytech/pages/contact.js";

export const Route = createFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  return <LegacyPage pageKey="contact" render={renderContact} />;
}
