import { SlideShell } from "@/components/slide-shell";

export default function Slide5Page() {
  return (
    <SlideShell
      slideNumber={5}
      totalSlides={10}
      title="Funding Request and Use of Proceeds"
      subtitle="Requested purchase advance: $25,000 to restart procurement and sustain purchasing continuity."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Primary Use</p>
            <p className="mt-2 text-2xl font-bold text-white">$20,000</p>
            <p className="mt-2 text-blue-50">
              Estimated purchasing capacity for approximately 200 kg of catalytic converter ceramic
              in Lot 001.
            </p>
          </article>

          <article className="rounded-2xl border border-white/20 bg-linear-to-br from-sky-400/20 to-blue-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Continuity Buffer</p>
            <p className="mt-2 text-2xl font-bold text-white">$5,000</p>
            <p className="mt-2 text-blue-50">
              Ongoing local purchases while Lot 001 ships to Canada and settlement is received.
            </p>
          </article>
        </div>

        <div className="animate-fade-up-delay glass-card rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            Total request: <span className="font-semibold text-white">$25,000</span>. This structure is
            designed to prevent purchasing interruptions between lots and maintain supplier momentum from day one.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Repayment Framework</p>
          <p className="mt-2 leading-relaxed text-blue-50 md:text-lg">
            We propose repayments of <span className="font-semibold text-white">$3,000 per lot</span>, plus a
            5% interest component on the outstanding balance, until full recovery of the advance.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
