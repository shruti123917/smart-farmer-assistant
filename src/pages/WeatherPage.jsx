import Card from "../components/ui/Card";
import { weatherData } from "../data/mockData";

function WeatherPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden bg-hero p-0 text-white" hover={false}>
        <div className="grid gap-6 bg-mesh p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">Weather Intelligence</p>
            <h1 className="mt-4 text-4xl font-semibold">{weatherData.current.temperature}°C</h1>
            <p className="mt-2 text-lg text-white/80">{weatherData.current.condition} in {weatherData.current.location}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">{weatherData.current.advice}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Humidity", `${weatherData.current.humidity}%`],
              ["Wind", `${weatherData.current.wind} km/h`],
              ["UV", weatherData.current.uv],
              ["Rain Probability", `${weatherData.current.rainProbability}%`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm text-white/70">{label}</p>
                <p className="mt-3 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-4">
          <h3 className="section-title">7 Day Forecast</h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {weatherData.forecast.map((day) => (
              <div key={day.day} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="font-semibold text-ink dark:text-white">{day.day}</p>
                <p className="mt-4 text-2xl font-semibold text-primary">{day.temp}°C</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Rain {day.rain}%</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="section-title">Today's Advice</h3>
          <div className="space-y-3">
            {weatherData.recommendations.map((item) => (
              <div key={item} className="rounded-xl bg-primary/5 p-4 text-sm leading-6 text-slate-700 dark:bg-primary/10 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default WeatherPage;
