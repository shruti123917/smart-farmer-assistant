import Card from "../ui/Card";
import { currency } from "../../utils/formatters";

function PriceCard({ item }) {
  const positive = item.weeklyChange >= 0;

  return (
    <Card className="space-y-2">
      <p className="text-sm text-slate-500 dark:text-slate-300">{item.crop}</p>
      <h3 className="text-2xl font-semibold text-ink dark:text-white">{currency(item.today)}</h3>
      <p className={positive ? "text-sm text-emerald-600" : "text-sm text-rose-500"}>
        {positive ? "+" : ""}
        {item.weeklyChange}% this week
      </p>
    </Card>
  );
}

export default PriceCard;
