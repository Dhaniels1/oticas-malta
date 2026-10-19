import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="malta-footer">
      <div className="malta-container malta-footer-grid">
        <div><Link to="/" className="malta-footer-brand">Óticas <strong>Malta.</strong></Link><p>Amor à primeira vista.</p></div>
        <div><h3>Explorar</h3><Link to="/galeria">Coleção</Link><Link to="/sobre">Sobre o projeto</Link><Link to="/contato">Contato</Link></div>
        <div><h3>Sobre este site</h3><p>Projeto demonstrativo em React. Catálogo ilustrativo, sem vendas, consultas de estoque ou canal comercial verificado.</p></div>
      </div>
      <div className="malta-container malta-footer-last"><span>© {new Date().getFullYear()} Óticas Malta — Projeto de frontend.</span><span>Design e desenvolvimento web</span></div>
    </footer>
  );
}
