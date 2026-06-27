import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "../components/ui/Loader";

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPasswordPage"));
const OtpVerificationPage = lazy(() => import("../pages/auth/OtpVerificationPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const CropDoctorPage = lazy(() => import("../pages/CropDoctorPage"));
const AiChatPage = lazy(() => import("../pages/AiChatPage"));
const WeatherPage = lazy(() => import("../pages/WeatherPage"));
const MarketPricesPage = lazy(() => import("../pages/MarketPricesPage"));
const FertilizerPage = lazy(() => import("../pages/FertilizerPage"));
const ExpenseTrackerPage = lazy(() => import("../pages/ExpenseTrackerPage"));
const ProfitCalculatorPage = lazy(() => import("../pages/ProfitCalculatorPage"));
const FarmJournalPage = lazy(() => import("../pages/FarmJournalPage"));
const GovernmentSchemesPage = lazy(() => import("../pages/GovernmentSchemesPage"));
const CommunityPage = lazy(() => import("../pages/CommunityPage"));
const ReportsPage = lazy(() => import("../pages/ReportsPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function PageWrap({ children }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28 }}
    >
      <Suspense fallback={<div className="flex min-h-[40vh] items-center justify-center"><Loader /></div>}>{children}</Suspense>
    </motion.div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<PageWrap><LoginPage /></PageWrap>} />
        <Route path="/register" element={<PageWrap><RegisterPage /></PageWrap>} />
        <Route path="/forgot-password" element={<PageWrap><ForgotPasswordPage /></PageWrap>} />
        <Route path="/otp-verification" element={<PageWrap><OtpVerificationPage /></PageWrap>} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<PageWrap><DashboardPage /></PageWrap>} />
          <Route path="crop-doctor" element={<PageWrap><CropDoctorPage /></PageWrap>} />
          <Route path="chat" element={<PageWrap><AiChatPage /></PageWrap>} />
          <Route path="weather" element={<PageWrap><WeatherPage /></PageWrap>} />
          <Route path="market-prices" element={<PageWrap><MarketPricesPage /></PageWrap>} />
          <Route path="fertilizer" element={<PageWrap><FertilizerPage /></PageWrap>} />
          <Route path="journal" element={<PageWrap><FarmJournalPage /></PageWrap>} />
          <Route path="expenses" element={<PageWrap><ExpenseTrackerPage /></PageWrap>} />
          <Route path="profit" element={<PageWrap><ProfitCalculatorPage /></PageWrap>} />
          <Route path="schemes" element={<PageWrap><GovernmentSchemesPage /></PageWrap>} />
          <Route path="community" element={<PageWrap><CommunityPage /></PageWrap>} />
          <Route path="reports" element={<PageWrap><ReportsPage /></PageWrap>} />
          <Route path="settings" element={<PageWrap><SettingsPage /></PageWrap>} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
