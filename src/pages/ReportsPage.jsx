import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { cropHealth, expenseTrend } from "../data/mockData";

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-ink dark:text-white">Reports</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Analytics across expense, profit, disease, and crop health.</p>
        </div>
        <Button>Download Report</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="section-title">Expense Analytics</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseTrend}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="expense" fill="#2E7D32" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <h3 className="section-title">Profit Analytics</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={expenseTrend}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="profit" stroke="#FFB300" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-300">Disease Count</p>
          <h3 className="mt-3 text-4xl font-semibold text-ink dark:text-white">24</h3>
        </Card>
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-300">Crop Health</p>
          <h3 className="mt-3 text-4xl font-semibold text-ink dark:text-white">{cropHealth[0].value}%</h3>
        </Card>
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-300">Forecasted Margin</p>
          <h3 className="mt-3 text-4xl font-semibold text-ink dark:text-white">18.4%</h3>
        </Card>
      </div>
    </div>
  );
}

export default ReportsPage;
