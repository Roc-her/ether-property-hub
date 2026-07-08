import Image from "next/image";
import { siteImages } from "@/lib/site-images";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={siteImages.logo}
      alt=""
      width={48}
      height={48}
      className={`h-10 w-10 shrink-0 rounded-sm object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

export function LogoWordmark({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const titleClass = light ? "text-white" : "text-brand-primary";

  return (
    <div className="flex items-center gap-3">
      <Logo className="h-10 w-10 shrink-0" />
      <div className="leading-tight">
        <div className={`font-display text-base font-bold tracking-wide sm:text-lg ${titleClass}`}>
          ETHER
        </div>
        <div className={`font-display text-[10px] font-semibold tracking-[0.2em] sm:text-xs ${titleClass}`}>
          PROPERTY HUB
        </div>
        {!compact && (
          <div className="mt-0.5 hidden text-[9px] font-medium tracking-[0.15em] text-brand-accent sm:block">
            INVEST · GROW · THRIVE
          </div>
        )}
      </div>
    </div>
  );
}
