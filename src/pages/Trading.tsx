import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, TrendingDown, BarChart3, Target, Clock, Percent, DollarSign, Activity } from "lucide-react";

const stats = [
  { label: "Win Rate", value: "68%", icon: Target, trend: "up" as const, detail: "Last 90 days" },
  { label: "Profit Factor", value: "2.4", icon: TrendingUp, trend: "up" as const, detail: "Risk/Reward" },
  { label: "Total Trades", value: "342", icon: BarChart3, trend: "neutral" as const, detail: "Since Jan 2025" },
  { label: "Avg. RRR", value: "1:2.8", icon: Percent, trend: "up" as const, detail: "Risk to Reward" },
];

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

const recentTrades = [
  { pair: "EUR/USD", direction: "Long", result: "Win", pnl: "+2.3%", date: "Mar 14" },
  { pair: "GBP/JPY", direction: "Short", result: "Win", pnl: "+1.8%", date: "Mar 13" },
  { pair: "XAU/USD", direction: "Long", result: "Loss", pnl: "-0.9%", date: "Mar 12" },
  { pair: "USD/CAD", direction: "Short", result: "Win", pnl: "+1.5%", date: "Mar 11" },
  { pair: "NAS100", direction: "Long", result: "Win", pnl: "+3.1%", date: "Mar 10" },
  { pair: "BTC/USD", direction: "Long", result: "Loss", pnl: "-1.2%", date: "Mar 9" },
];

const instruments = [
  { name: "Forex", percentage: 45 },
  { name: "Indices", percentage: 25 },
  { name: "Crypto", percentage: 15 },
  { name: "Commodities", percentage: 15 },
];

const maxPnl = Math.max(...monthlyReturns.map((m) => Math.abs(m.pnl)));

export default function Trading() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: chartRef, isVisible: chartVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: tradesRef, isVisible: tradesVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: breakdownRef, isVisible: breakdownVisible } = useScrollAnimation<HTMLDivElement>();

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
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">163rd Floor LLC</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Trading Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-5">
            Live performance metrics from my trading activity across forex, indices, crypto, and commodities.
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
                <p className="text-sm text-muted-foreground">P&L % by month</p>
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
              {monthlyReturns.map((m) => {
                const height = (Math.abs(m.pnl) / maxPnl) * 100;
                const isPositive = m.pnl >= 0;
                return (
                  <div key={m.month} className="flex-1 flex flex-col items-center gap-2 group/bar">
                    <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      {isPositive ? "+" : ""}{m.pnl}%
                    </span>
                    <div className="w-full flex items-end justify-center" style={{ height: "140px" }}>
                      <div
                        className={`w-full max-w-[40px] rounded-t-lg transition-all duration-500 hover:opacity-80 ${
                          isPositive ? "bg-green-500/80" : "bg-red-500/80"
                        }`}
                        style={{ height: `${height}%`, minHeight: "4px" }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{m.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 mb-12">
          {/* Recent Trades */}
          <div
            ref={tradesRef}
            className={`md:col-span-3 transition-all duration-700 ${
              tradesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h2 className="text-xl font-bold mb-1">Recent Trades</h2>
              <p className="text-sm text-muted-foreground mb-5">Latest positions</p>

              <div className="space-y-3">
                {recentTrades.map((trade, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          trade.direction === "Long"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {trade.direction === "Long" ? "↑" : "↓"}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{trade.pair}</p>
                        <p className="text-xs text-muted-foreground">{trade.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm font-mono font-medium ${
                          trade.result === "Win" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {trade.pnl}
                      </p>
                      <p className="text-xs text-muted-foreground">{trade.result}</p>
                    </div>
                  </div>
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
                      <span className="text-sm font-mono text-muted-foreground">{inst.percentage}%</span>
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
