import markSvgSource from "../legacy-baytech/assets/baytech-logo-mark.svg?raw";
import wordmarkSvgSource from "../legacy-baytech/assets/baytech-logo.svg?raw";

type BaytechLogoProps = {
  variant?: "mark" | "wordmark";
  className?: string;
  label?: string;
  decorative?: boolean;
};

const logoSources = {
  mark: markSvgSource,
  wordmark: wordmarkSvgSource,
};

function stripSvgHeader(svg: string) {
  return svg
    .replace(/<\?xml[^>]*>\s*/i, "")
    .replace(/\sstyle="[^"]*"/i, "")
    .replace(/\saria-labelledby="[^"]*"/i, "")
    .replace(/<title[\s\S]*?<\/title>/i, "");
}

export function getBaytechLogoHtml({
  variant = "wordmark",
  className = "",
  label = "Baytech Logo",
  decorative = false,
}: BaytechLogoProps = {}) {
  const roleAttrs = decorative
    ? 'aria-hidden="true" focusable="false"'
    : `role="img" aria-label="${label}" focusable="false"`;
  const classes = ["baytech-logo-svg", ...className.split(/\s+/).filter(Boolean)].join(" ");

  return stripSvgHeader(logoSources[variant]).replace(
    /<svg\b/i,
    `<svg class="${classes}" ${roleAttrs}`,
  );
}

export function BaytechLogo(props: BaytechLogoProps) {
  return <span dangerouslySetInnerHTML={{ __html: getBaytechLogoHtml(props) }} />;
}
