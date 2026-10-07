import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import TeamPage from './pages/TeamPage'
import ConsultationPage from './pages/ConsultationPage'
import SupplyRequestPage from './pages/SupplyRequestPage'
import QualitySafetyPage from './pages/QualitySafetyPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/supply-request" element={<SupplyRequestPage />} />
          <Route path="/quality-safety" element={<QualitySafetyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
