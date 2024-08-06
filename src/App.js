//import logo from './logo.svg';
import './App.css';
import './Background.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from './pages/Home';
import Contact from './components/HomeComponents/Contact';
import Projects from './pages/Projects';
import Maintenance from './pages/Maintenance';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            {/* <Header /> */}
            {/* Website content */}
            {/* Define routes of website here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/maintenance" element={<Maintenance />} />
            </Routes>
            <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div class="gradients-container">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;