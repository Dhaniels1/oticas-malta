import React from 'react';
import { Link } from 'react-router-dom';
import ConceptImage from '../components/ConceptImage';

const valores=[
 {indice:'01',titulo:'Identidade imaginária',texto:'Uma marca fictícia concebida para explorar um design editorial de ótica.'},
 {indice:'02',titulo:'Coleções criativas',texto:'Modelos e nomes inteiramente inventados, organizados por tipo e coleção.'},
 {indice:'03',titulo:'Experiência interativa',texto:'Navegação responsiva e filtros de catálogo, sem atendimento ou vendas reais.'}
];

export default function Home() {
  return (
    <div className="malta-home">
      <section className="malta-hero" aria-labelledby="malta-title">
        <div className="malta-container malta-hero-layout">
          <div className="malta-hero-copy">
            <p className="malta-overline">LUME ATELIÊ ÓPTICO / MARCA FICTÍCIA</p>
            <h1 id="malta-title">Um novo jeito<br/>de <em>ver o mundo.</em></h1>
            <p className="malta-hero-lead">Um conceito de ótica imaginária que combina elegância, design e criatividade. Explore armações fictícias em imagens criadas especialmente para este projeto.</p>
            <div className="malta-hero-actions">
              <Link to="/galeria" className="malta-btn malta-btn-gold">Explorar conceitos <span aria-hidden="true">↗</span></Link>
              <Link to="/sobre" className="malta-btn malta-btn-line">Sobre a demonstração <span aria-hidden="true">→</span></Link>
            </div>
            <div className="malta-hero-caption"><span className="malta-separator-line"></span> Projeto acadêmico · Imagens criadas por IA</div>
          </div>
          <div className="malta-hero-photo">
            <ConceptImage frame={0} label="Imagem conceitual gerada por IA de uma ótica imaginária com balcões de mármore verde e detalhes dourados"/>
            <span className="malta-photo-mark" aria-hidden="true">LUME <small>ATELIÊ</small></span>
            <span className="malta-photo-index">01 / CONCEITO VISUAL</span>
          </div>
        </div>
      </section>
      <div className="malta-strip"><div className="malta-container"><span>FORMAS</span><span>CONCEITOS</span><span>EXPRESSÃO</span><span>IMAGINAÇÃO</span><span>DESIGN</span></div></div>
      <section className="malta-collections malta-section">
        <div className="malta-container">
          <div className="malta-section-intro"><div><p className="malta-overline">CONCEITOS VISUAIS / 01</p><h2>Escolha seu <em>estilo.</em></h2></div><p>Duas categorias para explorar: óculos solares e armações de grau. Todo o material é ilustrativo e não corresponde a estoque real.</p></div>
          <div className="malta-collection-grid">
            <Link className="malta-category-tile malta-solar" to="/galeria">
              <ConceptImage frame={1} label="Fotografia artística gerada por IA de óculos solares em vitrine fictícia"/>
              <span className="malta-category-overlay"><small>CONCEITO 01</small><strong>Óculos solares</strong><span>Explorar coleção ↗</span></span>
            </Link>
            <Link className="malta-category-tile malta-grau" to="/galeria">
              <ConceptImage frame={2} label="Fotografia artística gerada por IA de armações de grau em uma ótica fictícia"/>
              <span className="malta-category-overlay"><small>CONCEITO 02</small><strong>Armações de grau</strong><span>Explorar coleção ↗</span></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="malta-values malta-section">
        <div className="malta-container">
          <div className="malta-section-intro"><div><p className="malta-overline">SOBRE A EXPERIÊNCIA</p><h2>Design com <em>personalidade.</em></h2></div></div>
          <div className="malta-values-grid">{valores.map(v=><article className="malta-value" key={v.indice}>
            <span>{v.indice}</span><h3>{v.titulo}</h3><p>{v.texto}</p>
          </article>)}</div>
        </div>
      </section>
      <section className="malta-story">
        <div className="malta-container malta-story-grid">
          <div className="malta-story-photo"><ConceptImage frame={3} label="Imagem editorial criada por IA de uma personagem fictícia usando armação em boutique imaginária"/></div>
          <div className="malta-story-content">
            <p className="malta-overline">O UNIVERSO LUME</p>
            <h2>Além das lentes. <em>Uma experiência visual.</em></h2>
            <p>Este site é um exercício de desenvolvimento frontend com React. A identidade Lume, os modelos, as imagens e as informações comerciais são fictícios, sem vínculo com qualquer ótica existente.</p>
            <Link className="malta-btn malta-btn-gold" to="/sobre">Conhecer o projeto <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
