import { useEffect, useRef } from "react";

type LegacyRenderer = () => HTMLElement;

type LegacyPageProps = {
  pageKey: string;
  render: LegacyRenderer;
};

export function LegacyPage({ pageKey, render }: LegacyPageProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";
    host.className = "";

    const legacyRoot = render();
    host.className = legacyRoot.className;
    host.append(...Array.from(legacyRoot.childNodes));

    requestAnimationFrame(() => {
      window.observeScrollAnimations?.();
    });

    return () => {
      host.innerHTML = "";
    };
  }, [pageKey, render]);

  return <div ref={hostRef} data-baytech-page={pageKey} />;
}

declare global {
  interface Window {
    observeScrollAnimations?: () => void;
    toggleSideSheet?: (show?: boolean) => void;
  }
}
