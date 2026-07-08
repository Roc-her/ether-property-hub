export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b9fd4" />
          <stop offset="1" stopColor="#0f4b70" />
        </linearGradient>
      </defs>
      <path
        d="M24 6L8 18v4c0 11 7 18 16 20 9-2 16-9 16-20v-4L24 6z"
        fill="url(#logoGrad)"
      />
      <path
        d="M10 28c2 6 7 11 14 13 7-2 12-7 14-13"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <rect x="20" y="16" width="8" height="8" rx="1" fill="white" opacity="0.9" />
      <path d="M20 16h8v-4l-4-3-4 3v4z" fill="white" opacity="0.7" />
    </svg>
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
