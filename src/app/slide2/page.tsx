import Image from "next/image";
import { SlideShell } from "@/components/slide-shell";

export default function Slide2Page() {
  return (
    <SlideShell
      slideNumber={2}
      totalSlides={10}
      title="Panama Re-Entry Objective"
      subtitle="A structured plan to reactivate catalytic converter purchasing across Panama."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up mx-auto w-full max-w-3xl p-1">
          <div className="rounded-xl bg-transparent p-2 shadow-[0_0_40px_rgba(255,255,255,0.35)]">
            <Image
              src="/pana.png"
              alt="Panama map visual"
              width={1400}
              height={900}
              className="h-auto max-h-[420px] w-full rounded-lg object-contain object-center"
              priority
            />
          </div>
        </div>

        <p className="animate-fade-up-delay mx-auto max-w-3xl leading-relaxed text-blue-50 md:text-lg">
          Our objective is to reactivate purchasing operations across Panama and rebuild a reliable
          supply channel for PMR. We previously worked with PMR on multiple lots with consistent execution.
        </p>

        <p className="animate-fade-up-delay-2 mx-auto max-w-3xl leading-relaxed text-blue-100 md:text-lg">
          Due to unforeseen operational constraints, we temporarily paused activity in Panama.
          Our objective remained unchanged: return with a stronger structure, restore execution
          capacity, and recover market share with PMR.
        </p>
      </div>
    </SlideShell>
  );
}
