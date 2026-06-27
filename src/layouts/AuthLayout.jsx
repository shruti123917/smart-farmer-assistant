import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { GiPlantWatering, GiWheat } from "react-icons/gi";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-app px-4 py-8 dark:bg-slate-950">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative hidden overflow-hidden bg-hero p-10 text-white lg:block">
          <div className="absolute inset-0 bg-mesh opacity-80" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
                <GiPlantWatering className="text-3xl" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Smart Farmer Assistant</h1>
                <p className="text-white/75">AI-powered decisions for modern agriculture</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-white/65">Modern Agriculture Platform</p>
                <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-tight">
                  One place to manage crop health, weather, expenses, and AI guidance.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "AI crop disease detection with treatment guidance",
                  "Live-ready dashboards for farm profit and expense tracking",
                  "Localized weather and mandi price intelligence",
                  "Multi-language experience prepared for rural adoption",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <GiWheat className="mb-3 text-2xl text-accent" />
                    <p className="text-sm leading-6 text-white/85">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white px-5 py-10 dark:bg-slate-900 sm:px-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
