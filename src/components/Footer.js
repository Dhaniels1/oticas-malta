import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
 return <footer className="malta-footer">
  <div className="malta-container malta-footer-grid">
   <div><Link to="/" className="malta-footer-brand">Ateliê <strong>Lume.</strong></Link>
    <p>Identidade, produtos e imagens fictícios. Projeto acadêmico de interface web.</p>
   </div>
   <div><h3>Explorar</h3>
    <Link to="/galeria">Catálogo conceitual</Link>
    <Link to="/sobre">Sobre a demonstração</Link>
    <Link to="/contato">Informações fictícias</Link>
   </div>
   <div><h3>Projeto de portfólio</h3>
    <p>React · Layout responsivo · Fotografias geradas por IA.</p>
    <p>Sem CNPJ, loja física, equipe, serviços, estoque, reservas ou atendimento real.</p>
   </div>
  </div>
  <div className="malta-container malta-footer-last"><span>© {new Date().getFullYear()} Ateliê Lume — Marca fictícia de demonstração.</span><span>Interface conceitual · Conteúdo inteiramente ilustrativo</span></div>
 </footer>;
}
