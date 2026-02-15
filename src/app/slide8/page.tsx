import { ImageCarousel } from "@/components/image-carousel";
import { SlideShell } from "@/components/slide-shell";

const appScreens = [
  {
    src: "/screen1.png",
    alt: "Purchase control app screen 1",
  },
  {
    src: "/screen2.png",
    alt: "Purchase control app screen 2",
  },
  {
    src: "/screen3.png",
    alt: "Purchase control app screen 3",
  },
  {
    src: "/screen4.png",
    alt: "Purchase control app screen 4",
  },
];

export default function Slide8Page() {
  return (
    <SlideShell
      slideNumber={8}
      totalSlides={10}
      title="Digital Purchase Control and PMR Visibility"
      subtitle="Our existing app is already prepared for Panama deployment."
    >
      <div className="space-y-6 text-center">
        <div className="animate-fade-up">
          <ImageCarousel images={appScreens} />
        </div>

        <div className="animate-fade-up-delay glass-card rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            In Colombia, we already operate a purchase control application with photo records for each
            piece. This same software is ready for Panama and enables full traceability from purchase to lot.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            PMR will receive dashboard access to monitor the full process: purchased units, visual records,
            and total kilograms by lot from Panama, functioning as a live packing-list view.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
