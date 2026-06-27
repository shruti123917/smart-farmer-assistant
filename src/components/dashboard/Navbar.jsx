import { FiBell, FiChevronDown, FiGlobe, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useApp } from "../../context/AppContext";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

function Navbar() {
  const { setSidebarOpen, theme, toggleTheme, language, setLanguage, languages } = useApp();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-soft backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-xl border border-slate-200 p-3 text-slate-600 dark:border-slate-700 dark:text-slate-200 lg:hidden"
          aria-label="Open sidebar"
        >
          <FiMenu />
        </button>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-primary">Farm Operations</p>
          <h2 className="text-xl font-semibold text-ink dark:text-white">Good to see you, {user?.name?.split(" ")[0]}</h2>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
          <FiGlobe className="text-slate-500" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-sm outline-none"
            aria-label="Select language"
          >
            {languages.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={toggleTheme}
          className="rounded-xl border border-slate-200 p-3 text-slate-600 dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        <button className="relative rounded-xl border border-slate-200 p-3 text-slate-600 dark:border-slate-700 dark:text-slate-200" aria-label="Notifications">
          <FiBell />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950">
          <div className="h-10 w-10 rounded-xl bg-primary/10" />
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-ink dark:text-white">{user?.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">{user?.location}</p>
          </div>
          <FiChevronDown className="text-slate-400" />
        </div>

        <Button variant="ghost" className="px-3 py-2 text-sm" onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
