import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import IotHomeIntegrationPage from './projects/IotHomeIntegrationPage';
import VisitCounter from './additional wiindows/VisitCounter.jsx';
import './App.css';

function App() {
  return (
    <Router basename="/portfolio/">
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeintegration" element={<IotHomeIntegrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
