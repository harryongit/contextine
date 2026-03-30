import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import HomeSection from './pages/Home/HomeSection.jsx'
import AboutSection from './pages/Company/About/AboutSection.jsx'
import CareerSection from './pages/Company/Careers/CareerSection.jsx'
import SecuritySection from './pages/Company/Security/SecuritySection.jsx'
import BlogSection from './pages/Resources/Blog/BlogSection.jsx'
import DocsSection from './pages/Resources/Docs/DocsSection.jsx'
import OverviewSection from './pages/Platform/PlatformOverview/Overview/Overview.jsx'
import WhyContextineSection from './pages/Platform/PlatformOverview/WhyContextine/WhyContextine.jsx'
import AuditManagement from './pages/Platform/Products/AuditManagement/AuditManagement.jsx'
import CaseManagement from './pages/Platform/Products/CaseManagement/CaseManagement.jsx'
import GRCPlatform from './pages/Platform/Products/GRC/GRC.jsx'
import ComplianceTracking from './pages/Platform/Features/ComplianceTracking/ComplianceTracking.jsx'
import ReportingAnalytics from './pages/Platform/Features/ReportingAnalytics/ReportingAnalytics.jsx'
import WorkFlowAutomation from './pages/Platform/Features/WorkFlowAutomation/WorkFlowAutomation.jsx'
import RiskManagement from './pages/Platform/Features/RiskManagement/RiskManagement.jsx'
import ComplianceTeams from './pages/Solutions/ByRole/ComplianceTeams/ComplianceTeams.jsx'
import SecurityTeams from './pages/Solutions/ByRole/SecurityTeams/SecurityTeams.jsx'
import RiskAndAuditTeams from './pages/Solutions/ByRole/RiskAndAuditTeams/RiskAndAuditTeams.jsx'
import LegalAndOperations from './pages/Solutions/ByRole/LegalAndOperations/LegalAndOperations.jsx'
import AuditAutomationUseCase from './pages/Solutions/ByUseCase/AuditAutomation/AuditAutomation.jsx'
import RiskManagementUseCase from './pages/Solutions/ByUseCase/RiskManagement/RiskManagement.jsx'
import CompilanceManagementUseCase from './pages/Solutions/ByUseCase/CompilanceManagement/CompilanceManagement.jsx'
import CaseManagementUseCase from './pages/Solutions/ByUseCase/CaseManagement/CaseManagement.jsx'
import PolicyManagementUseCase from './pages/Solutions/ByUseCase/PolicyManagement/PolicyManagement.jsx'
import SmallBusiness from './pages/Solutions/SMALLBUSINESS/SmallBusiness.jsx'
import EnterpriseSolution from './pages/Solutions/ENTERPRISE/Enterprise.jsx'
import DefenseContractors from './pages/Solutions/DEFENSECONTRACTORS/DefenseContractors.jsx'
import Customers from './pages/Customers/Customers.jsx'

function App() {
  return (
    <Router>
      <div className='bg-radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)'>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/careers" element={<CareerSection />} />
          <Route path="/security" element={<SecuritySection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/docs" element={<DocsSection />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/platform/overview" element={<OverviewSection />} />
          <Route path="/platform/why-contextine" element={<WhyContextineSection />} />

          <Route path="/products/audit-management" element={<AuditManagement />} />
          <Route path="/products/case-management" element={<CaseManagement />} />
          <Route path="/products/grc-platform" element={<GRCPlatform />} />

          <Route path="/features/compliance-tracking" element={<ComplianceTracking />} />
          <Route path="/features/reporting-analytics" element={<ReportingAnalytics />} />
          <Route path="/features/workflow-automation" element={<WorkFlowAutomation />} />
          <Route path="/features/risk-management" element={<RiskManagement />} />

          <Route path="/solutions/compliance-teams" element={<ComplianceTeams />} />
          <Route path="/solutions/security-teams" element={<SecurityTeams />} />
          <Route path="/solutions/risk-audit" element={<RiskAndAuditTeams />} />
          <Route path="/solutions/legal-ops" element={<LegalAndOperations />} />

          <Route path="/use-case/audit-automation" element={<AuditAutomationUseCase />} />
          <Route path="/use-case/risk" element={<RiskManagementUseCase />} />
          <Route path="/use-case/compliance" element={<CompilanceManagementUseCase />} />
          <Route path="/use-case/case" element={<CaseManagementUseCase />} />
          <Route path="/use-case/policy" element={<PolicyManagementUseCase />} />

          <Route path="/solutions/small-business" element={<SmallBusiness />} />
          <Route path="/solutions/enterprise" element={<EnterpriseSolution />} />
          <Route path="/solutions/defense-contractors" element={<DefenseContractors />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
