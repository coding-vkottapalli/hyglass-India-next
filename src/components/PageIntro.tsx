// Reusable header band for inner pages. Keeps titles consistent site-wide.
export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-brand-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(500px 260px at 85% -20%, var(--color-brand-500), transparent), radial-gradient(420px 260px at -5% 120%, var(--color-brand-700), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-brand-100">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
