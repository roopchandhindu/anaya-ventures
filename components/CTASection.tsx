import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="bg-[#18241d] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 leading-7 text-[#d9e5d5]">{text}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-md bg-[#c9902f] px-5 py-3 text-sm font-semibold text-[#18241d] transition hover:bg-[#e0a842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18241d]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#18241d]"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

