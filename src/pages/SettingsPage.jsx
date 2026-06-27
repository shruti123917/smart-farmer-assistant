import { useApp } from "../context/AppContext";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function SettingsPage() {
  const { theme, toggleTheme, language, setLanguage, languages } = useApp();

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold text-ink dark:text-white">Settings</h1>
        <Input label="Profile Name" defaultValue="Shruti Patil" />
        <Input label="Email" defaultValue="farmer@example.com" />
        <Input label="Phone" defaultValue="+91 98765 43210" />
        <Button>Save Profile</Button>
      </Card>

      <div className="space-y-6">
        <Card className="space-y-4">
          <h3 className="section-title">Language</h3>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="input-base">
            {languages.map((item) => (
              <option key={item.code} value={item.code}>{item.label}</option>
            ))}
          </select>
        </Card>
        <Card className="space-y-4">
          <h3 className="section-title">Dark Mode</h3>
          <Button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</Button>
        </Card>
        <Card className="space-y-4">
          <h3 className="section-title">Notifications</h3>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
            <span className="text-sm text-slate-700 dark:text-slate-200">Weather alerts</span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
            <span className="text-sm text-slate-700 dark:text-slate-200">Market price alerts</span>
            <input type="checkbox" defaultChecked />
          </label>
        </Card>
        <Card className="space-y-4">
          <h3 className="section-title">Security</h3>
          <Button variant="secondary">Change Password</Button>
        </Card>
      </div>
    </div>
  );
}

export default SettingsPage;
