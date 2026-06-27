import { useState } from "react";
import { useForm } from "react-hook-form";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function FertilizerPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <Card className="space-y-5">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Fertilizer Recommendation</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Get a nutrient recommendation</h1>
        </div>
        <form onSubmit={handleSubmit(() => setSubmitted(true))} className="space-y-4">
          <Input label="Crop" placeholder="Soybean" {...register("crop")} />
          <Input label="Soil Type" placeholder="Black cotton soil" {...register("soil")} />
          <Input label="Crop Age (days)" type="number" placeholder="45" {...register("age")} />
          <Input label="Symptoms" as="textarea" rows={4} placeholder="Yellowing lower leaves, slow vegetative growth..." {...register("symptoms")} />
          <Button className="w-full">Generate recommendation</Button>
        </form>
      </Card>

      <Card className="space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="section-title">Recommendation Card</h3>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{submitted ? "Ready" : "Mock Output"}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-primary/5 p-4">
            <p className="text-sm text-slate-500">NPK</p>
            <p className="mt-2 text-2xl font-semibold text-primary">19:19:19</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
            <p className="text-sm text-slate-500">Organic</p>
            <p className="mt-2 font-semibold text-emerald-700 dark:text-emerald-300">Vermicompost + seaweed extract</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 dark:bg-amber-500/10">
            <p className="text-sm text-slate-500">Chemical</p>
            <p className="mt-2 font-semibold text-amber-700 dark:text-amber-300">Top-dress urea in split dose</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
          <h4 className="font-semibold text-ink dark:text-white">Application Guide</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Apply the first dose in moist soil early morning. Follow with a micronutrient foliar spray after 5 days if leaf yellowing persists.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default FertilizerPage;
