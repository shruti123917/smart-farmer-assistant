import Card from "../ui/Card";

function StatisticCard({ label, value, icon: Icon, trend, tone = "text-primary" }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-300">{label}</span>
        <div className={`rounded-xl bg-slate-50 p-3 ${tone} dark:bg-slate-800`}>
          <Icon className="text-lg" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-ink dark:text-white">{value}</h3>
        {trend ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{trend}</p> : null}
      </div>
    </Card>
  );
}

export default StatisticCard;
