import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

// No GitHub Pages o site fica em /oticas-malta/.
// Em hospedagem na raiz do domínio, o site usa /. Não dependa de PUBLIC_URL
// para o basename: o CRA também o utiliza para assets do build.
function getRouterBase() {
  const path = window.location.pathname;
  return path === '/oticas-malta' || path.startsWith('/oticas-malta/')
    ? '/oticas-malta'
    : '/';
}

function App() {
  return (
    <Router basename={getRouterBase()}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
