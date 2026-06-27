import { FiActivity, FiCloudRain, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import ChartCard from "../components/dashboard/ChartCard";
import NotificationCard from "../components/dashboard/NotificationCard";
import PriceCard from "../components/dashboard/PriceCard";
import StatisticCard from "../components/dashboard/StatisticCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import { cropHealth, expenseTrend, marketPrices, notifications, tasks, weatherData } from "../data/mockData";
import { currency } from "../utils/formatters";

const pieColors = ["#2E7D32", "#66BB6A", "#FFB300"];

function DashboardPage() {
  return (
    <div className="space-y-6 pb-8">
      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <Card className="overflow-hidden bg-hero p-0 text-white" hover={false}>
          <div className="bg-mesh p-8">
            <p className="text-sm uppercase tracking-[0.32em] text-white/65">Field Intelligence</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Welcome, Farmer 👋</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              Your farm looks stable today. Soybean price momentum is positive, rain risk is moderate, and crop health stays in the healthy band.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Detect Disease", "Ask AI", "View Weather", "Market Prices", "Add Expense", "View Reports"].map((item, index) => (
                <Button key={item} variant={index === 0 ? "accent" : "secondary"} className={index === 0 ? "" : "bg-white/10 text-white hover:bg-white/20"}>
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </Card>
        <WeatherCard weather={weatherData.current} />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatisticCard label="Current Crop" value="Soybean" icon={FiActivity} trend="Flowering stage, 68% healthy score" />
        <StatisticCard label="Rain Probability" value="68%" icon={FiCloudRain} trend="Peak expected Wednesday" />
        <StatisticCard label="Market Price" value={currency(marketPrices[0].today)} icon={FiDollarSign} trend="Soybean mandi price" tone="text-accent" />
        <StatisticCard label="Farm Health" value="Healthy" icon={FiTrendingUp} trend="11% plots need closer scouting" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard title="Expense Trend" action="Last 6 months">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={expenseTrend}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="expense" stroke="#2E7D32" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Profit Trend" action="Projected">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={expenseTrend}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="profit" stroke="#FFB300" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Crop Health Overview" action="Live snapshot">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={cropHealth} dataKey="value" nameKey="name" innerRadius={70} outerRadius={95}>
                  {cropHealth.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Market Spotlight</h3>
              <span className="text-sm text-primary">Today</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {marketPrices.slice(0, 4).map((item) => (
                <PriceCard key={item.crop} item={item} />
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Today's Tasks</h3>
              <span className="text-sm text-primary">3 active</span>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="font-medium text-ink dark:text-white">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{task.status}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="section-title">Recent Notifications</h3>
              <span className="text-sm text-primary">View all</span>
            </div>
            {notifications.map((item) => (
              <NotificationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
