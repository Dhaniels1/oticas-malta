import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const links=[
  {to:'/',label:'Início',end:true},
  {to:'/galeria',label:'Conceitos'},
  {to:'/sobre',label:'Sobre'},
  {to:'/contato',label:'Informações'}
];

export default function Header() {
 return <header className="malta-header">
   <div className="malta-announcement">MARCA E CATÁLOGO FICTÍCIOS · DEMONSTRAÇÃO ACADÊMICA</div>
   <div className="malta-container malta-nav-wrap">
     <Link to="/" className="malta-wordmark" aria-label="Lume Ateliê Óptico — início, marca fictícia">
       <span className="malta-monogram" aria-hidden="true">L.</span>
       <span className="malta-name">Ateliê <strong>Lume</strong><small>ÓPTICA CONCEITUAL</small></span>
     </Link>
     <nav aria-label="Navegação principal" className="malta-nav">
       {links.map(({to,label,end})=>(
         <NavLink key={to} to={to} end={end}
           className={({isActive})=>isActive?'malta-nav-link active':'malta-nav-link'}>{label}</NavLink>
       ))}
     </nav>
     <Link className="malta-header-cta" to="/galeria">Explorar conceitos ↗</Link>
   </div>
 </header>;
}
