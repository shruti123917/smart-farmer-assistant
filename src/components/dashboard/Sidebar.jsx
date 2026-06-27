import { NavLink } from "react-router-dom";
import {
  FiBarChart2,
  FiBookOpen,
  FiCloudRain,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiMessageCircle,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { GiChemicalArrow, GiPlantRoots, GiWheat } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useApp } from "../../context/AppContext";
import { cn } from "../../utils/cn";

const links = [
  { to: "/app/dashboard", label: "Dashboard", icon: FiHome },
  { to: "/app/crop-doctor", label: "AI Crop Doctor", icon: MdOutlineHealthAndSafety },
  { to: "/app/chat", label: "AI Chat", icon: FiMessageCircle },
  { to: "/app/weather", label: "Weather", icon: FiCloudRain },
  { to: "/app/market-prices", label: "Market Prices", icon: FiTrendingUp },
  { to: "/app/fertilizer", label: "Fertilizer Recommendation", icon: GiChemicalArrow },
  { to: "/app/journal", label: "Farm Journal", icon: FiBookOpen },
  { to: "/app/expenses", label: "Expense Tracker", icon: FiDollarSign },
  { to: "/app/profit", label: "Profit Calculator", icon: FiBarChart2 },
  { to: "/app/schemes", label: "Government Schemes", icon: FiShield },
  { to: "/app/community", label: "Community", icon: FiUsers },
  { to: "/app/reports", label: "Reports", icon: FiFileText },
  { to: "/app/settings", label: "Settings", icon: FiSettings },
];

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useApp();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-slate-950/40 lg:hidden",
          sidebarOpen ? "block" : "hidden",
        )}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-80 flex-col border-r border-white/30 bg-white/90 p-5 shadow-soft backdrop-blur-xl transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950/90",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
          <div className="rounded-2xl bg-hero p-3 text-white shadow-float">
            <GiPlantRoots className="text-2xl" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-ink dark:text-white">Smart Farmer</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">AI growth companion</p>
          </div>
        </div>

        <nav className="mt-6 space-y-1 overflow-y-auto pr-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                  isActive
                    ? "bg-primary text-white shadow-float"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800",
                )
              }
            >
              <Icon className="text-lg" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-hero p-5 text-white">
          <GiWheat className="text-3xl" />
          <h3 className="mt-3 font-semibold">Monsoon Readiness</h3>
          <p className="mt-2 text-sm text-white/80">Keep farm records updated and monitor disease alerts before the next rain cycle.</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
