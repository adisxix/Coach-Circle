import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from './utils/authStorage';

import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import CCPlusPage from './pages/CCPlusPage';
import DashboardPage from './pages/DashboardPage';

import SoftwarePage from './pages/community/SoftwarePage';
import FinancePage from './pages/community/FinancePage';
import ManagementPage from './pages/community/ManagementPage';
import MarketingPage from './pages/community/MarketingPage';
import DesignPage from './pages/community/DesignPage';
import HealthcarePage from './pages/community/HealthcarePage';
import LegalPage from './pages/community/LegalPage';
import EducationPage from './pages/community/EducationPage';
import EntrepreneurshipPage from './pages/community/EntrepreneurshipPage';
import HRPage from './pages/community/HRPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RequireAuth({ children }) {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cc-plus" element={<CCPlusPage />} />

        <Route
          path="/home2"
          element={(
            <RequireAuth>
              <HomePage2 />
            </RequireAuth>
          )}
        />
        <Route
          path="/dashboard"
          element={(
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          )}
        />

        <Route path="/community/software" element={<SoftwarePage />} />
        <Route path="/community/finance" element={<FinancePage />} />
        <Route path="/community/management" element={<ManagementPage />} />
        <Route path="/community/marketing" element={<MarketingPage />} />
        <Route path="/community/design" element={<DesignPage />} />
        <Route path="/community/healthcare" element={<HealthcarePage />} />
        <Route path="/community/legal" element={<LegalPage />} />
        <Route path="/community/education" element={<EducationPage />} />
        <Route path="/community/entrepreneurship" element={<EntrepreneurshipPage />} />
        <Route path="/community/hr" element={<HRPage />} />
      </Routes>
    </>
  );
}
