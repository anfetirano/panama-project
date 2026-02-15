import { SlideShell } from "@/components/slide-shell";

export default function Slide3Page() {
  return (
    <SlideShell
      slideNumber={3}
      totalSlides={10}
      title="Current Market Opportunity"
      subtitle="A favorable competitive window to re-enter and secure supply in Panama now."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up glass-card rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            Over recent months, we have monitored local buying behavior and supplier response in Panama.
          </p>
        </div>

        <div className="animate-fade-up-delay grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Observation</p>
            <p className="mt-2 text-blue-50">Competitor purchasing activity is currently inconsistent.</p>
          </article>

          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Implication</p>
            <p className="mt-2 text-blue-50">Sellers are more open to reliable and recurring buyers.</p>
          </article>

          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Opportunity</p>
            <p className="mt-2 text-blue-50">PMR can recover volume early through our re-entry structure.</p>
          </article>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            This creates a favorable window for re-entry, restart operations quickly, and rebuild
            purchasing momentum with PMR.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
