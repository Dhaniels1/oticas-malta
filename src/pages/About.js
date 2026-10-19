import React from 'react';
import { Link } from 'react-router-dom';
import ConceptImage from '../components/ConceptImage';

export default function About() {
  return (
    <div className="malta-about-page">
      <section className="malta-interior-hero"><div className="malta-container">
        <p className="malta-overline">LUME ATELIÊ ÓPTICO / IDENTIDADE FICTÍCIA</p>
        <h1>Estilo em <em>cada detalhe.</em></h1>
        <p>Uma identidade visual inventada para demonstrar como seria a experiência digital de uma ótica contemporânea.</p>
      </div></section>
      <section className="malta-container malta-about-grid">
        <div className="malta-about-image">
          <ConceptImage frame={4} label="Cena fictícia gerada por IA de consultoria em óculos, com personagens que não representam funcionários reais"/>
        </div>
        <div className="malta-about-text">
          <p className="malta-overline">HISTÓRIA INVENTADA / PROJETO REAL</p>
          <h2>Uma ótica que existe somente no conceito.</h2>
          <p>Lume Ateliê Óptico é uma marca fictícia criada para apresentar um portfólio de interface web. Nomes de coleções, modelos e cenários são elementos de demonstração.</p>
          <p>O desenvolvimento do site é real: React, componentes reutilizáveis, filtros funcionais, estrutura responsiva e imagens produzidas por inteligência artificial. As cenas com pessoas são representações artísticas, não retratam equipe ou clientes reais.</p>
          <Link className="malta-btn malta-btn-gold" to="/galeria">Conhecer a galeria <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="malta-about-footer"><div className="malta-container">
        <p className="malta-overline">TRANSPARÊNCIA</p>
        <h2>Esta ótica é fictícia.</h2>
        <p>Não existe loja física, endereço de atendimento, telefone comercial, serviço de exames ou venda de óculos associado a este site. As fotografias foram geradas com IA e as descrições de produtos são imaginárias. Não há parceria com marcas reais.</p>
      </div></section>
    </div>
  );
}
