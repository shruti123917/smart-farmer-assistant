import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { currency } from "../utils/formatters";

function ProfitCalculatorPage() {
  const { register, watch } = useForm({
    defaultValues: {
      crop: "Soybean",
      area: 12,
      yield: 18,
      sellingPrice: 4680,
      expensePerAcre: 22000,
    },
  });

  const values = watch();
  const calc = useMemo(() => {
    const revenue = Number(values.area) * Number(values.yield) * Number(values.sellingPrice);
    const expense = Number(values.area) * Number(values.expensePerAcre);
    const profit = revenue - expense;
    const roi = expense ? ((profit / expense) * 100).toFixed(1) : 0;
    return { revenue, expense, profit, roi };
  }, [values]);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold text-ink dark:text-white">Profit Calculator</h1>
        <div className="space-y-4">
          <Input label="Crop" {...register("crop")} />
          <Input label="Area (acres)" type="number" {...register("area")} />
          <Input label="Yield per acre (quintals)" type="number" {...register("yield")} />
          <Input label="Selling Price" type="number" {...register("sellingPrice")} />
          <Input label="Expense per acre" type="number" {...register("expensePerAcre")} />
          <Button className="w-full">Refresh Calculation</Button>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          ["Revenue", currency(calc.revenue)],
          ["Expense", currency(calc.expense)],
          ["Profit", currency(calc.profit)],
          ["ROI", `${calc.roi}%`],
        ].map(([label, value]) => (
          <Card key={label} className="flex min-h-[180px] flex-col justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-300">{label}</p>
            <h3 className="text-3xl font-semibold text-ink dark:text-white">{value}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProfitCalculatorPage;
