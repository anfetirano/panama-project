import { SlideShell } from "@/components/slide-shell";

type RepaymentRow = {
  lot: string;
  principalPayment: number;
  interestBase: number;
  interestAmount: number;
  totalDeduction: number;
};

const interestRate = 0.05;
const principalPayments = [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 1000];
const interestBases = [25000, 22000, 19000, 16000, 13000, 10000, 7000, 4000, 1000];

const repaymentPlan: RepaymentRow[] = principalPayments.map((principalPayment, index) => {
  const interestBase = interestBases[index] ?? 0;
  const interestAmount = interestBase * interestRate;
  const totalDeduction = principalPayment + interestAmount;

  return {
    lot: String(index + 1).padStart(3, "0"),
    principalPayment,
    interestBase,
    interestAmount,
    totalDeduction,
  };
});

const totals = repaymentPlan.reduce(
  (acc, row) => {
    acc.principal += row.principalPayment;
    acc.interest += row.interestAmount;
    acc.total += row.totalDeduction;
    return acc;
  },
  { principal: 0, interest: 0, total: 0 },
);

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    value,
  );
}

export default function Slide6Page() {
  return (
    <SlideShell
      slideNumber={6}
      totalSlides={10}
      title="Repayment Simulation (Lots 001-009)"
      subtitle="Principal is repaid in 9 lots, with 5% interest applied to a declining balance."
    >
      <div className="space-y-6">
        <div className="animate-fade-up table-glass hidden md:block">
          <div className="grid grid-cols-[64px_1fr_1fr_1fr_1fr] gap-3 border-b border-white/15 px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-blue-100 md:px-5 md:text-sm">
            <p className="text-left">Lot</p>
            <p className="text-right">Principal</p>
            <p className="text-right">Interest Base</p>
            <p className="text-right">Interest (5%)</p>
            <p className="text-right">Total per Lot</p>
          </div>

          {repaymentPlan.map((row) => (
            <div
              key={row.lot}
              className="grid grid-cols-[64px_1fr_1fr_1fr_1fr] gap-3 border-b border-white/10 px-4 py-3 text-xs text-blue-50 last:border-b-0 md:px-5 md:text-base"
            >
              <p className="text-left font-semibold text-white">{row.lot}</p>
              <p className="text-right tabular-nums">{formatCurrency(row.principalPayment)}</p>
              <p className="text-right tabular-nums">{formatCurrency(row.interestBase)}</p>
              <p className="text-right tabular-nums">{formatCurrency(row.interestAmount)}</p>
              <p className="text-right font-semibold text-white tabular-nums">
                {formatCurrency(row.totalDeduction)}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up space-y-3 md:hidden">
          {repaymentPlan.map((row) => (
            <article key={`mobile-${row.lot}`} className="glass-card rounded-2xl p-4 text-left">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Lot {row.lot}</p>
                <p className="text-sm font-semibold text-white">{formatCurrency(row.totalDeduction)}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-blue-50">
                <p>Principal:</p>
                <p className="text-right tabular-nums">{formatCurrency(row.principalPayment)}</p>
                <p>Interest base:</p>
                <p className="text-right tabular-nums">{formatCurrency(row.interestBase)}</p>
                <p>Interest (5%):</p>
                <p className="text-right tabular-nums">{formatCurrency(row.interestAmount)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="animate-fade-up-delay glass-card rounded-2xl p-5 text-center">
          <p className="leading-relaxed text-blue-50 md:text-lg">
            This repayment structure prioritizes principal recovery while applying interest only to the
            outstanding balance.
          </p>
          <p className="mt-3 leading-relaxed text-blue-100">
            Operational plan: target shipment cadence is{" "}
            <span className="font-semibold text-white">one lot every 15 days</span>.
          </p>
          <p className="mt-3 leading-relaxed text-blue-100">
            Proposed interest rate:{" "}
            <span className="font-semibold text-white">5.0% per lot on the outstanding balance</span>.
          </p>
          <p className="mt-3 leading-relaxed text-blue-100">
            This interest is offered as a commercial benefit to PMR in recognition of its launch
            support, while keeping the repayment model sustainable and operationally efficient.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 glass-accent rounded-2xl p-5 text-center">
          <p className="text-base font-bold uppercase tracking-wider text-blue-100 md:text-lg">
            Simulation Totals
          </p>
          <div className="mt-3 grid gap-3 text-sm text-blue-50 md:grid-cols-3 md:text-base">
            <p>
              Principal repaid: <span className="font-semibold text-white">{formatCurrency(totals.principal)}</span>
            </p>
            <p>
              Total interest: <span className="font-semibold text-white">{formatCurrency(totals.interest)}</span>
            </p>
            <p>
              Total paid in 9 lots:{" "}
              <span className="font-semibold text-white">{formatCurrency(totals.total)}</span>
            </p>
          </div>
          <p className="mt-3 leading-relaxed text-blue-50 md:text-lg">
            By Lot 009, the initial $25,000 advance is fully repaid, enabling transition to
            self-funded operating cycles.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
