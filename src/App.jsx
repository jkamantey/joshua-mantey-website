import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publication';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Volunteerism from './pages/Volunteerism';
import { ROUTES } from './site';
import './App.css';

// The prerendered HTML carries the correct <title>/description for the entry
// URL. Client-side navigation has to keep them in sync itself.
function useRouteHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route =
      ROUTES.find((r) => r.path === pathname.replace(/(.)\/$/, '$1')) || ROUTES[0];
    document.title = route.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', route.description);
  }, [pathname]);
}

// Reset scroll on navigation, which a client-side router does not do for us.
function useScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useRouteHead();
  useScrollReset();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main className="app-main" id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteerism" element={<Volunteerism />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
