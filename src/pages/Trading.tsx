import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Clock,
  Percent,
  DollarSign,
  Activity,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ───── STATS ───── */
const stats = [
  { label: "Win Rate", value: "68%", icon: Target, trend: "up" as const, detail: "Last 90 days" },
  { label: "Profit Factor", value: "2.4", icon: TrendingUp, trend: "up" as const, detail: "Risk/Reward" },
  { label: "Total Trades", value: "342", icon: BarChart3, trend: "neutral" as const, detail: "Since Jan 2025" },
  { label: "Avg. RRR", value: "1:2.8", icon: Percent, trend: "up" as const, detail: "Risk to Reward" },
];

/* ───── MONTHLY RETURNS ───── */
const monthlyReturns = [
  { month: "Jan", pnl: 12.4, trades: 28 },
  { month: "Feb", pnl: -3.2, trades: 31 },
  { month: "Mar", pnl: 8.7, trades: 25 },
  { month: "Apr", pnl: 15.1, trades: 34 },
  { month: "May", pnl: 6.3, trades: 29 },
  { month: "Jun", pnl: -1.8, trades: 22 },
  { month: "Jul", pnl: 11.2, trades: 30 },
  { month: "Aug", pnl: 9.5, trades: 27 },
  { month: "Sep", pnl: 4.1, trades: 24 },
  { month: "Oct", pnl: 13.8, trades: 32 },
  { month: "Nov", pnl: 7.6, trades: 26 },
  { month: "Dec", pnl: 10.3, trades: 34 },
];

/* ───── DAILY TRADE DATA (sample per month index 0-11) ───── */
// key = "YYYY-M-D", value = pnl %
const dailyTrades: Record<string, number> = {
  // January
  "2025-0-2": 1.2, "2025-0-3": -0.4, "2025-0-6": 2.1, "2025-0-7": 0.8, "2025-0-8": -1.1,
  "2025-0-9": 1.5, "2025-0-10": 0.3, "2025-0-13": -0.6, "2025-0-14": 2.4, "2025-0-15": 1.1,
  "2025-0-16": -0.3, "2025-0-17": 0.9, "2025-0-21": 1.8, "2025-0-22": -0.7, "2025-0-23": 1.3,
  // February
  "2025-1-3": -1.2, "2025-1-4": 0.6, "2025-1-5": -0.8, "2025-1-6": -1.5, "2025-1-10": 0.9,
  "2025-1-11": -0.4, "2025-1-12": 0.3, "2025-1-13": -0.7, "2025-1-18": 1.1, "2025-1-19": -0.5,
  // March
  "2025-2-3": 1.5, "2025-2-4": 0.8, "2025-2-5": -0.3, "2025-2-6": 2.1, "2025-2-7": -0.9,
  "2025-2-10": 1.3, "2025-2-11": 0.6, "2025-2-12": -0.9, "2025-2-13": 1.8, "2025-2-14": 1.5,
  // April
  "2025-3-1": 2.3, "2025-3-2": 1.1, "2025-3-3": -0.5, "2025-3-7": 1.8, "2025-3-8": 0.9,
  "2025-3-9": -0.2, "2025-3-10": 2.5, "2025-3-14": 1.4, "2025-3-15": -0.8, "2025-3-16": 1.7,
};

/* ───── PROP FIRM PAYOUTS ───── */
interface PropFirmPayout {
  firm: string;
  logo: string;
  color: string;
  payouts: { amount: string; date: string; certImage: string }[];
}

const propFirmPayouts: PropFirmPayout[] = [
  {
    firm: "FTMO",
    logo: "FTMO",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    payouts: [
      { amount: "$1,240", date: "Feb 2025", certImage: "" },
      { amount: "$2,100", date: "Jan 2025", certImage: "" },
    ],
  },
  {
    firm: "FundedNext",
    logo: "FN",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    payouts: [
      { amount: "$890", date: "Mar 2025", certImage: "" },
      { amount: "$1,560", date: "Jan 2025", certImage: "" },
    ],
  },
  {
    firm: "The 5%ers",
    logo: "5%",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    payouts: [
      { amount: "$750", date: "Feb 2025", certImage: "" },
    ],
  },
];

/* ───── INSTRUMENTS ───── */
const instruments = [
  { name: "Forex", percentage: 45 },
  { name: "Indices", percentage: 25 },
  { name: "Crypto", percentage: 15 },
  { name: "Commodities", percentage: 15 },
];

const maxPnl = Math.max(...monthlyReturns.map((m) => Math.abs(m.pnl)));

/* ───── MONTH CALENDAR COMPONENT ───── */
const MonthCalendar = ({ monthIndex, year }: { monthIndex: number; year: number }) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mt-4">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((d) => (
          <div key={d} className="text-[10px] text-muted-foreground text-center font-medium">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((b) => (
          <div key={`blank-${b}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const key = `${year}-${monthIndex}-${day}`;
          const pnl = dailyTrades[key];
          const isWeekend = new Date(year, monthIndex, day).getDay() % 6 === 0;

          let bg = "bg-muted/30";
          let textColor = "text-muted-foreground/50";

          if (pnl !== undefined) {
            bg = pnl >= 0 ? "bg-green-500/20" : "bg-red-500/20";
            textColor = pnl >= 0 ? "text-green-500" : "text-red-500";
          } else if (isWeekend) {
            bg = "bg-transparent";
            textColor = "text-muted-foreground/20";
          }

          return (
            <div
              key={day}
              className={`aspect-square rounded-md flex flex-col items-center justify-center ${bg} group/day relative`}
              title={pnl !== undefined ? `${pnl >= 0 ? "+" : ""}${pnl}%` : "No trade"}
            >
              <span className={`text-[10px] font-medium ${textColor}`}>{day}</span>
              {pnl !== undefined && (
                <span className={`text-[8px] font-mono ${textColor}`}>
                  {pnl >= 0 ? "+" : ""}{pnl}%
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ───── PROP FIRM CARD ───── */
const PropFirmCard = ({ firm }: { firm: PropFirmPayout }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold border ${firm.color}`}
          >
            {firm.logo}
          </div>
          <div className="text-left">
            <p className="font-medium text-sm">{firm.firm}</p>
            <p className="text-xs text-muted-foreground">
              {firm.payouts.length} payout{firm.payouts.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border/50">
          {firm.payouts.map((p, i) => (
            <div key={i} className="mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-500">{p.amount}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              {p.certImage ? (
                <img
                  src={p.certImage}
                  alt={`${firm.firm} payout certificate`}
                  className="w-full rounded-lg border border-border"
                />
              ) : (
                <div className="w-full h-32 rounded-lg border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                  Payout certificate — add image
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ───── MAIN PAGE ───── */
export default function Trading() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: chartRef, isVisible: chartVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: payoutsRef, isVisible: payoutsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: breakdownRef, isVisible: breakdownVisible } = useScrollAnimation<HTMLDivElement>();

  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />

      <main className="min-h-screen px-6 md:px-8 pb-20">
        {/* Header */}
        <div
          ref={headerRef}
          className={`pt-[15vh] mb-12 max-w-5xl mx-auto transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-primary" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              163rd Floor LLC
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Trading Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-5">
            Live performance metrics from my trading activity across forex, indices, crypto, and
            commodities.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/worlator_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow my trades
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              📓 Trading Journal
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className={`max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  {stat.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{stat.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Monthly Returns Chart */}
        <div
          ref={chartRef}
          className={`max-w-5xl mx-auto mb-12 transition-all duration-700 ${
            chartVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">Monthly Returns</h2>
                <p className="text-sm text-muted-foreground">
                  Click a month to see the daily breakdown
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" /> Profit
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Loss
                </span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end gap-2 h-48">
              {monthlyReturns.map((m, i) => {
                const height = (Math.abs(m.pnl) / maxPnl) * 100;
                const isPositive = m.pnl >= 0;
                const isSelected = selectedMonth === i;
                return (
                  <button
                    key={m.month}
                    onClick={() => setSelectedMonth(isSelected ? null : i)}
                    className="flex-1 flex flex-col items-center gap-2 group/bar"
                  >
                    <span
                      className={`text-xs font-mono text-muted-foreground transition-opacity ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover/bar:opacity-100"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {m.pnl}%
                    </span>
                    <div
                      className="w-full flex items-end justify-center"
                      style={{ height: "140px" }}
                    >
                      <div
                        className={`w-full max-w-[40px] rounded-t-lg transition-all duration-500 ${
                          isPositive ? "bg-green-500/80" : "bg-red-500/80"
                        } ${isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-card" : "hover:opacity-80"}`}
                        style={{ height: `${height}%`, minHeight: "4px" }}
                      />
                    </div>
                    <span
                      className={`text-xs ${
                        isSelected ? "text-foreground font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {m.month}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Calendar Expand */}
            {selectedMonth !== null && (
              <div className="mt-6 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold">
                    {new Date(2025, selectedMonth).toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11)
                      }
                      className="p-1 rounded-md hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0)
                      }
                      className="p-1 rounded-md hover:bg-muted transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <MonthCalendar monthIndex={selectedMonth} year={2025} />
              </div>
            )}
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 mb-12">
          {/* Prop Firm Payouts */}
          <div
            ref={payoutsRef}
            className={`md:col-span-3 transition-all duration-700 ${
              payoutsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h2 className="text-xl font-bold mb-1">Prop Firm Payouts</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Verified payouts from funded accounts
              </p>

              <div className="space-y-3">
                {propFirmPayouts.map((firm) => (
                  <PropFirmCard key={firm.firm} firm={firm} />
                ))}
              </div>
            </div>
          </div>

          {/* Instrument Breakdown */}
          <div
            ref={breakdownRef}
            className={`md:col-span-2 transition-all duration-700 delay-100 ${
              breakdownVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h2 className="text-xl font-bold mb-1">Instruments</h2>
              <p className="text-sm text-muted-foreground mb-5">By volume</p>

              <div className="space-y-4">
                {instruments.map((inst) => (
                  <div key={inst.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{inst.name}</span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {inst.percentage}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary/70 transition-all duration-700"
                        style={{ width: `${inst.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-border/50 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> Avg. Hold Time
                  </span>
                  <span className="text-sm font-medium">4.2 hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5" /> Best Month
                  </span>
                  <span className="text-sm font-medium text-green-500">+15.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <TrendingDown className="w-3.5 h-3.5" /> Max Drawdown
                  </span>
                  <span className="text-sm font-medium text-red-500">-4.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
