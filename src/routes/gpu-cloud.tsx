import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "../baytech/LegacyPage";
import { renderGpuCloud } from "../legacy-baytech/pages/gpu-cloud.js";

export const Route = createFileRoute("/gpu-cloud")({
  head: () => ({
    meta: [
      { title: "GPU Platform — NVIDIA & AMD Systems for AI | Baytech" },
      {
        name: "description",
        content:
          "Configurable NVIDIA H100/H200/B200/B300 and AMD MI350X systems for inference, training, fine-tuning, rendering, and private model serving.",
      },
      { property: "og:title", content: "GPU Platform for AI Workloads — Baytech" },
      {
        property: "og:description",
        content:
          "Match model size, memory, storage, and network to the right GPU system before capacity decisions are locked in.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GpuCloudRoute,
});

function GpuCloudRoute() {
  return <LegacyPage pageKey="gpu-cloud" render={renderGpuCloud} />;
}
