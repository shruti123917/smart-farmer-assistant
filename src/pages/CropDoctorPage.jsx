import { useState } from "react";
import { FiCamera, FiUploadCloud } from "react-icons/fi";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { diseases } from "../data/mockData";

function CropDoctorPage() {
  const [preview, setPreview] = useState(null);
  const prediction = diseases[0];

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary">AI Crop Doctor</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Detect crop disease from field images</h1>
        </div>
        <label className="flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center">
          {preview ? (
            <img src={preview} alt="Crop preview" className="h-72 w-full rounded-2xl object-cover" />
          ) : (
            <>
              <div className="rounded-2xl bg-white p-4 text-4xl text-primary shadow-soft dark:bg-slate-900">
                <FiUploadCloud />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink dark:text-white">Drag and drop leaf images here</h3>
              <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-300">
                Upload high-quality crop photos to receive disease predictions, treatments, and recovery guidance.
              </p>
            </>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
        </label>
        <div className="flex flex-wrap gap-3">
          <Button><FiUploadCloud /> Upload from device</Button>
          <Button variant="secondary"><FiCamera /> Open camera</Button>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="section-title">Mock Prediction</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {prediction.confidence}% confidence
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Disease Name</p>
              <h4 className="text-2xl font-semibold text-ink dark:text-white">{prediction.disease}</h4>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-300">Treatment</p>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{prediction.treatment}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="font-medium text-emerald-700 dark:text-emerald-300">Organic Solution</p>
                <p className="mt-2 text-sm text-emerald-800/80 dark:text-emerald-200">{prediction.organic}</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-500/10">
                <p className="font-medium text-amber-700 dark:text-amber-300">Chemical Solution</p>
                <p className="mt-2 text-sm text-amber-800/80 dark:text-amber-200">{prediction.chemical}</p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-300">Estimated Recovery Time</p>
              <p className="mt-1 text-lg font-semibold text-ink dark:text-white">{prediction.recoveryTime}</p>
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="section-title">Disease History</h3>
          <div className="space-y-3">
            {diseases.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-ink dark:text-white">{item.disease}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{item.crop} • {item.date}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CropDoctorPage;
