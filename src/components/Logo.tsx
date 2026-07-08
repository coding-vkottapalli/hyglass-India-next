import Image from "next/image";

// Real HyGlass "GCH" brand mark (public/logo-up.png).
export function Logo({
  className = "",
  showWordmark = true,
  size = 40,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-up.png"
        alt="HyGlass & Chemicals logo"
        width={size}
        height={size}
        priority
        className="shrink-0 rounded-[9px]"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-ink">
            HyGlass
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-brand-600">
            &amp; Chemicals
          </span>
        </span>
      )}
    </span>
  );
}
