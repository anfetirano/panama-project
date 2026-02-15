import { SlideShell } from "@/components/slide-shell";

export default function Slide7Page() {
  return (
    <SlideShell
      slideNumber={7}
      totalSlides={10}
      title="Strategic Outcome and Long-Term Value"
      subtitle="A short-cycle recovery model that unlocks sustained supply growth for PMR."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up glass-card rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            The proposed $25,000 purchase advance would be fully repaid within the first 9 lots,
            including a defined interest return in favor of PMR.
          </p>
        </div>

        <div className="animate-fade-up-delay grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Financial Result</p>
            <p className="mt-2 text-blue-50">Full principal recovery plus interest through a clear lot-based schedule.</p>
          </article>

          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Commercial Result</p>
            <p className="mt-2 text-blue-50">Reactivation of a proven Panama sourcing channel for PMR.</p>
          </article>

          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Operational Result</p>
            <p className="mt-2 text-blue-50">After Lot 009, operations continue with our own working capital.</p>
          </article>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            Panama is a compact market with strong execution potential. We have previously delivered
            high-value lots there, and this relaunch model allows progressive growth in kg per shipment.
          </p>
        </div>

      </div>
    </SlideShell>
  );
}
