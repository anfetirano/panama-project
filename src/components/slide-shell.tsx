import Image from "next/image";
import Link from "next/link";

type SlideShellProps = {
  slideNumber: number;
  totalSlides: number;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function SlideShell({
  slideNumber,
  totalSlides,
  title,
  subtitle,
  children,
}: SlideShellProps) {
  const prevHref = slideNumber > 1 ? `/slide${slideNumber - 1}` : null;
  const nextHref = slideNumber < totalSlides ? `/slide${slideNumber + 1}` : null;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#2f6664_0%,#234d4c_40%,#102a29_100%)] px-4 py-6 pb-24 sm:px-6 sm:py-10 sm:pb-10">
      <div className="absolute -top-24 right-[-140px] h-72 w-72 rounded-full bg-emerald-200/18 blur-3xl" />
      <div className="absolute -bottom-28 left-[-120px] h-72 w-72 rounded-full bg-teal-200/18 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />

      {prevHref && (
        <Link
          href={prevHref}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-emerald-200/45 bg-white/14 px-4 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-white/22 md:left-8 md:block"
          aria-label="Go to previous slide"
        >
          {"<- Back"}
        </Link>
      )}

      {nextHref && (
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:right-8 md:flex">
          <span className="animate-pulse-soft rounded-full border border-emerald-200/40 bg-emerald-200/18 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
            Press here to continue
          </span>
          <Link
            href={nextHref}
            className="rounded-full border border-emerald-200/45 bg-white/14 px-4 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-white/22"
            aria-label="Go to next slide"
          >
            {"Next ->"}
          </Link>
        </div>
      )}

      <section className="glass-panel relative w-full max-w-5xl rounded-2xl p-6 text-white backdrop-blur-2xl sm:rounded-3xl sm:p-8 md:p-12">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
        <div className="mb-8 flex items-center justify-between gap-3 text-xs text-emerald-50/90 sm:text-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/pmg-logo-isotipo-movil.svg"
              alt="PMG isotipo"
              width={26}
              height={26}
              className="h-7 w-7 sm:hidden"
              priority
            />
            <Image
              src="/pmg-logo-wordmark-desktop.svg"
              alt="PMG wordmark"
              width={170}
              height={30}
              className="hidden h-auto w-[170px] sm:block"
              priority
            />
          </div>
          <span className="font-medium tracking-wide">
            Slide {slideNumber} / {totalSlides}
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-emerald-50/90 sm:text-lg">
            {subtitle}
          </p>
        )}

        {children && <div className="mx-auto mt-8 w-full max-w-4xl text-emerald-50">{children}</div>}
      </section>

      {(prevHref || nextHref) && (
        <nav className="fixed inset-x-0 bottom-4 z-20 flex items-center justify-center gap-3 px-4 md:hidden">
          {prevHref ? (
            <Link
              href={prevHref}
              className="rounded-full border border-white/25 bg-white/12 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-xl"
              aria-label="Go to previous slide"
            >
              Back
            </Link>
          ) : (
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/50">
              Back
            </span>
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              className="animate-pulse-soft rounded-full border border-emerald-200/45 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
              aria-label="Go to next slide"
            >
              Press here to continue
            </Link>
          ) : (
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/50">
              End
            </span>
          )}
        </nav>
      )}
    </main>
  );
}
