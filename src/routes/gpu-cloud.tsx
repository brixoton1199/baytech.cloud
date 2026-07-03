import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderGpuCloud } from "../legacy-baytech/pages/gpu-cloud.js";

export const Route = createFileRoute("/gpu-cloud")({
  component: GpuCloudRoute,
});

function GpuCloudRoute() {
  return <LegacyPage pageKey="gpu-cloud" render={renderGpuCloud} />;
}
