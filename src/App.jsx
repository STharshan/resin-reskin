import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GDPRConsent from "./components/GDPRButton";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/Term";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venetian-plaster" element={<ServicePage serviceKey="VenetianPlaster" />} />
        <Route path="/metallic-plaster" element={<ServicePage serviceKey="MetallicPlaster" />} />
        <Route path="/minerals-plaster" element={<ServicePage serviceKey="MineralsPlaster" />} />
        <Route path="/polished-plaster" element={<ServicePage serviceKey="PolishedPlaster" />} />
        <Route path="/micro-cement" element={<ServicePage serviceKey="MicroCement" />} />
        <Route path="/epoxy-resin" element={<ServicePage serviceKey="EpoxyResin" />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
