import { useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { marketPrices } from "../data/mockData";
import { currency } from "../utils/formatters";

function MarketPricesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => marketPrices.filter((item) => item.crop.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const topGainers = [...marketPrices].sort((a, b) => b.weeklyChange - a.weeklyChange).slice(0, 2);
  const topLosers = [...marketPrices].sort((a, b) => a.weeklyChange - b.weeklyChange).slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-ink dark:text-white">Market Prices</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Track daily mandi movement and weekly crop trends.</p>
        </div>
        <div className="w-full max-w-md">
          <Input label="Crop Search" placeholder="Search crop" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-100 text-slate-500 dark:border-slate-800 dark:text-slate-300">
              <tr>
                <th className="pb-4">Crop</th>
                <th className="pb-4">Today's Price</th>
                <th className="pb-4">Yesterday</th>
                <th className="pb-4">Weekly Change</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.crop} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-4 font-semibold text-ink dark:text-white">{item.crop}</td>
                  <td className="py-4">{currency(item.today)}</td>
                  <td className="py-4">{currency(item.yesterday)}</td>
                  <td className={`py-4 font-semibold ${item.weeklyChange >= 0 ? "text-emerald-600" : "text-rose-500"}`}>
                    {item.weeklyChange >= 0 ? "+" : ""}{item.weeklyChange}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="space-y-4">
          <h3 className="section-title">Price Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filtered[0]?.trend.map((value, index) => ({ day: `D${index + 1}`, value })) || []}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2E7D32" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h3 className="section-title">Top Gainers</h3>
          {topGainers.map((item) => (
            <div key={item.crop} className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-emerald-800 dark:text-emerald-200">{item.crop}</span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">+{item.weeklyChange}%</span>
              </div>
            </div>
          ))}
        </Card>
        <Card className="space-y-4">
          <h3 className="section-title">Top Losers</h3>
          {topLosers.map((item) => (
            <div key={item.crop} className="rounded-xl bg-rose-50 p-4 dark:bg-rose-500/10">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-rose-800 dark:text-rose-200">{item.crop}</span>
                <span className="font-semibold text-rose-700 dark:text-rose-300">{item.weeklyChange}%</span>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default MarketPricesPage;
