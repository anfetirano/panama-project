import { SlideShell } from "@/components/slide-shell";

const setupItems = [
  {
    item: "Vehicle for city purchasing and cargo transport",
    cost: "$4,000",
    type: "One-time",
  },
  {
    item: "Motorcycle #1 with metal storage box",
    cost: "$1,800",
    type: "One-time",
  },
  {
    item: "Motorcycle #2 with metal storage box",
    cost: "$1,800",
    type: "One-time",
  },
  {
    item: "Company incorporation and legal export compliance",
    cost: "$2,500",
    type: "One-time",
  },
  {
    item: "Warehouse, storage, and cutting area",
    cost: "$600 / month",
    type: "Monthly",
  },
  {
    item: "Buyer earnings / purchase commissions",
    cost: "Variable (per purchase)",
    type: "Performance-based",
  },
];

export default function Slide4Page() {
  return (
    <SlideShell
      slideNumber={4}
      totalSlides={10}
      title="Operational Structure to Enter Panama"
      subtitle="The base structure we will fund to relaunch operations efficiently."
    >
      <div className="space-y-6">
        <div className="animate-fade-up table-glass">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/15 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-blue-100 md:px-5 md:text-sm">
            <p>Item</p>
            <p>Cost</p>
            <p>Type</p>
          </div>

          {setupItems.map((row) => (
            <div
              key={row.item}
              className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/10 px-4 py-3 text-sm text-blue-50 last:border-b-0 md:px-5 md:text-base"
            >
              <p>{row.item}</p>
              <p className="font-semibold text-white">{row.cost}</p>
              <p className="text-blue-100">{row.type}</p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up-delay glass-card rounded-2xl p-5 text-center">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            In Panama, motorcycles are operationally necessary due to high traffic. Fast mobility is
            critical for customer service and deal conversion, with a target pickup window within
            30 minutes after client confirmation.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Key Point</p>
          <p className="mt-2 leading-relaxed text-blue-50 md:text-lg">
            We will fully cover these setup and operating costs ourselves. They are separate from, and not included
            in, the requested purchase advance.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
