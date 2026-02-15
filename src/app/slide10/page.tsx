import { SlideShell } from "@/components/slide-shell";

export default function Slide10Page() {
  return (
    <SlideShell
      slideNumber={10}
      totalSlides={10}
      title="Thank You"
      subtitle="We appreciate the opportunity to present this proposal to PMR."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up glass-accent rounded-2xl p-6">
          <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
            We are ready to make PMG Metales Panama a successful and measurable reality with PMR.
          </p>
        </div>

        <div className="animate-fade-up-delay glass-card rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            Thank you for your time and consideration. We remain available to discuss next steps
            at PMR&apos;s convenience.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
