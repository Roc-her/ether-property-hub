const items = [
  "Buyer-only representation",
  "Australia-wide search",
  "Off-market access",
  "Fixed transparent fees",
  "Investment strategy",
  "Auction bidding",
  "NSW Licensed Agency",
  "Invest · Grow · Thrive",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-brand-primary/10 bg-brand-primary py-3.5">
      <div className="flex w-max animate-marquee gap-10">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 text-sm font-medium tracking-wide text-white/90"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
