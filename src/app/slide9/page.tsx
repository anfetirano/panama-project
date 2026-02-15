import { SlideShell } from "@/components/slide-shell";

export default function Slide9Page() {
  return (
    <SlideShell
      slideNumber={9}
      totalSlides={10}
      title="Commercial Safeguard and Accountability"
      subtitle="Clear protection terms for PMR and full operational responsibility from our side."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up glass-accent rounded-2xl px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">PMR Protection Clause</p>
          <p className="mt-2 text-lg font-semibold leading-relaxed text-white md:text-2xl">
            If agreed expectations are not met, we commit to an immediate full return of the advance amount.
          </p>
        </div>

        <div className="animate-fade-up-delay grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Commercial Safety</p>
            <p className="mt-2 leading-relaxed text-blue-50">
              PMR receives a defined downside protection framework tied to project performance.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Execution Confidence</p>
            <p className="mt-2 leading-relaxed text-blue-50">
              Our team has prior operating experience and a practical execution plan for Panama.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Accountability</p>
            <p className="mt-2 leading-relaxed text-blue-50">
              PMG Colombia formally backs this expansion and assumes full responsibility for delivery.
            </p>
          </article>
        </div>

        <div className="animate-fade-up-delay-2 rounded-2xl border border-white/25 bg-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Commitment</p>
          <p className="mt-2 leading-relaxed text-blue-50 md:text-lg">
            This structure is designed to protect PMR, maintain transparency, and ensure disciplined execution.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
