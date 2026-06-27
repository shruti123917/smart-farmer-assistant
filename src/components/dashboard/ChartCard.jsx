import Card from "../ui/Card";

function ChartCard({ title, action, children }) {
  return (
    <Card className="h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="section-title">{title}</h3>
        {action ? <span className="text-sm text-primary">{action}</span> : null}
      </div>
      <div className="h-72">{children}</div>
    </Card>
  );
}

export default ChartCard;
