import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-app dark:bg-slate-950">
      <Sidebar />
      <main className="min-h-screen px-4 py-4 lg:ml-80 lg:px-6">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
