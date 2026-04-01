import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import HomeSection from './pages/Home/HomeSection.jsx'
import AboutSection from './pages/Company/About/AboutSection.jsx'
import CareerSection from './pages/Company/Careers/CareerSection.jsx'
import SecuritySection from './pages/Company/Security/SecuritySection.jsx'

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
import PartnerSection from './pages/Company/Partners/PartnerSection.jsx'
import NewsroomSection from './pages/Company/Newsroom/NewsroomSection.jsx'
import ContactSection from './pages/Company/ContactUs/ContactSection.jsx'

import BlogSection from './pages/Resources/LearningCenter/Blog/BlogSection.jsx'
import GlossarySection from './pages/Resources/LearningCenter/Glossary/GlossarySection.jsx'
import FrameworkGuidesSection from './pages/Resources/LearningCenter/FrameworkGuides/FrameworkGuidesSection.jsx'
import FaqSection from './pages/Resources/ProductSupport/FAQs/FAQSection.jsx'
import HelpCenterSection from './pages/Resources/ProductSupport/HelpCenter/HelpCenterSection.jsx'
import ProductUpdatesSection from './pages/Resources/ProductSupport/ProductUpdates/ProductUpdatesSection.jsx'
import FrameworkHub from './pages/Resources/Frameworks/FrameworkHub.jsx'
import ScrollToTop from './common/ScrollToTop.jsx'

import Trust from './pages/Company/Legal/Trust.jsx'
import TermsOfUse from './pages/Company/Legal/TermsOfUse.jsx'
import Privacy from './pages/Company/Legal/Privacy.jsx'
import Cookies from './pages/Company/Legal/Cookies.jsx'





function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='bg-radial-gradient(125%_130.93%_at_50%_-20%,_#112D5B_0%,_#050B3D_100%)'>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/careers" element={<CareerSection />} />
          <Route path="/security" element={<SecuritySection />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/partners" element={<PartnerSection />} />
          <Route path="/newsroom" element={<NewsroomSection />} />
          <Route path="/contact" element={<ContactSection />} />

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

          <Route path="/blog" element={<BlogSection />} />
          <Route path="/glossary" element={<GlossarySection />} />
          <Route path="/guides" element={<FrameworkGuidesSection />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/help" element={<HelpCenterSection />} />
          <Route path="/updates" element={<ProductUpdatesSection />} />

          <Route path="/frameworks/:id" element={<FrameworkHub />} />

          <Route path="/trust" element={<Trust />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />




        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
