import { SlideShell } from "@/components/slide-shell";

export default function Slide1Page() {
  return (
    <SlideShell
      slideNumber={1}
      totalSlides={10}
      title="Welcome PMR, Inc."
      subtitle="Strategic proposal to relaunch Panama sourcing through a structured and transparent operating model."
    >
      <div className="space-y-6 text-center">
        <p className="animate-fade-up mx-auto max-w-3xl text-lg leading-relaxed text-blue-50 md:text-xl">
          Thank you for reviewing this opportunity. This presentation outlines a clear plan to restart
          operations, strengthen supply continuity, and create long-term value with PMR.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="animate-fade-up-delay rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Purpose</p>
            <p className="mt-2 text-blue-50">
              Reopen Panama supply with a disciplined operating model and transparent repayment.
            </p>
          </div>

          <div className="animate-fade-up-delay-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Format</p>
            <p className="mt-2 text-blue-50">Use the side arrows to move through each slide.</p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
