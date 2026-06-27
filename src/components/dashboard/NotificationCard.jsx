import Card from "../ui/Card";

function NotificationCard({ item }) {
  return (
    <Card className="space-y-2">
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-semibold text-ink dark:text-white">{item.title}</h4>
        <span className="text-xs text-slate-400">{item.time}</span>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-300">{item.description}</p>
    </Card>
  );
}

export default NotificationCard;
