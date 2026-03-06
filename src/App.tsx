import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Amenities from './pages/Amenities';
import Reviews from './pages/Reviews';
import Attractions from './pages/Attractions';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';
import './App.css';

// Component to handle dynamic titles and scroll to top
const RouteChangeHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Map paths to titles
    const pathTitleMap: Record<string, string> = {
      '/': 'High Desert Inn – Home',
      '/about': 'About Us – High Desert Inn',
      '/amenities': 'Amenities – High Desert Inn',
      '/reviews': 'Reviews – High Desert Inn',
      '/attractions': 'Nearby Attractions – High Desert Inn',
      '/book-now': 'Book Now – High Desert Inn',
      '/contact': 'Contact Us – High Desert Inn',
    };

    const title = pathTitleMap[location.pathname] || 'High Desert Inn';
    document.title = title;
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router basename="/HighDesertInn">
      <div className="App">
        <Navbar />
        <RouteChangeHandler />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional: catch-all route to redirect unknown paths to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;