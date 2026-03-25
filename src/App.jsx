import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import HomeSection from './pages/Home/HomeSection.jsx'
import AboutSection from './pages/Company/About/AboutSection.jsx'
import CareerSection from './pages/Company/Careers/CareerSection.jsx'
import SecuritySection from './pages/Company/Security/SecuritySection.jsx'
import BlogSection from './pages/Resources/Blog/BlogSection.jsx'
import DocsSection from './pages/Resources/Docs/DocsSection.jsx'

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

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
