import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/galeria', label: 'Coleção' },
  { to: '/sobre', label: 'Nossa história' },
  { to: '/contato', label: 'Contato' }
];

export default function Header() {
  return (
    <header className="malta-header">
      <div className="malta-announcement">UM PROJETO DE FRONTEND · CATÁLOGO DEMONSTRATIVO</div>
      <div className="malta-container malta-nav-wrap">
        <Link to="/" className="malta-wordmark" aria-label="Óticas Malta - início">
          <span className="malta-monogram" aria-hidden="true">M.</span>
          <span className="malta-name">Óticas <strong>Malta</strong><small>AMOR À PRIMEIRA VISTA</small></span>
        </Link>
        <nav aria-label="Navegação principal" className="malta-nav">
          {links.map(({to,label,end})=>(
            <NavLink key={to} to={to} end={end} className={({isActive})=>isActive?'malta-nav-link active':'malta-nav-link'}>{label}</NavLink>
          ))}
        </nav>
        <Link className="malta-header-cta" to="/galeria">Ver modelos <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
