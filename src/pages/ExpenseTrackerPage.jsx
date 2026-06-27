import { useState } from "react";
import { useForm } from "react-hook-form";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { expenseBreakdown, expenseTrend, expenses } from "../data/mockData";
import { currency } from "../utils/formatters";

const pieColors = ["#2E7D32", "#66BB6A", "#FFB300", "#FDBA74", "#94A3B8"];

function ExpenseTrackerPage() {
  const [items, setItems] = useState(expenses);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    setItems((prev) => [
      { id: Date.now(), ...values, amount: Number(values.amount) },
      ...prev,
    ]);
    reset();
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="space-y-4">
          <h1 className="text-3xl font-semibold text-ink dark:text-white">Expense Tracker</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input label="Category" placeholder="Seeds" {...register("category")} />
            <Input label="Amount" type="number" placeholder="10000" {...register("amount")} />
            <Input label="Date" type="date" {...register("date")} />
            <Input label="Note" as="textarea" rows={3} {...register("note")} />
            <Button className="w-full">Add Expense</Button>
          </form>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="section-title">Expense Categories</h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={expenseBreakdown} dataKey="value" nameKey="name" outerRadius={100}>
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card>
            <h3 className="section-title">Monthly Spend</h3>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseTrend}>
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="expense" fill="#2E7D32" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>

      <Card className="overflow-x-auto">
        <h3 className="mb-4 section-title">Expense History</h3>
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-100 text-slate-500 dark:border-slate-800 dark:text-slate-300">
            <tr>
              <th className="pb-4">Category</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Note</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-4 font-semibold text-ink dark:text-white">{item.category}</td>
                <td className="py-4">{currency(item.amount)}</td>
                <td className="py-4">{item.date}</td>
                <td className="py-4 text-slate-500 dark:text-slate-300">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default ExpenseTrackerPage;
