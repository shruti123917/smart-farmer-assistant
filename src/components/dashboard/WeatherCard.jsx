import { WiDayCloudy } from "react-icons/wi";
import Card from "../ui/Card";

function WeatherCard({ weather }) {
  return (
    <Card className="bg-white/95">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">Today's Weather</p>
          <h3 className="mt-1 text-3xl font-semibold text-ink dark:text-white">{weather.temperature}°C</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{weather.condition}</p>
        </div>
        <div className="rounded-2xl bg-primary/10 p-3 text-4xl text-primary">
          <WiDayCloudy />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
        <div>Humidity: {weather.humidity}%</div>
        <div>Wind: {weather.wind} km/h</div>
        <div>UV: {weather.uv}</div>
        <div>Rain: {weather.rainProbability}%</div>
      </div>
    </Card>
  );
}

export default WeatherCard;
