import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils/getImageUrl';

const features = [
  {index:'01',title:'Estilo que se expressa',description:'Uma coleção ilustrativa para encontrar referências de modelos e armações.'},
  {index:'02',title:'Explore do seu jeito',description:'Filtre por marca ou tipo e navegue pelo catálogo de forma simples.'},
  {index:'03',title:'Inspiração para o dia a dia',description:'De peças solares a armações de grau, em uma apresentação moderna.'}
];

export default function Home() {
  return (
    <div className="malta-home">
      <section className="malta-hero" aria-labelledby="malta-title">
        <div className="malta-container malta-hero-layout">
          <div className="malta-hero-copy">
            <p className="malta-overline">ÓTICAS MALTA / CONCEITO</p>
            <h1 id="malta-title">Um novo jeito<br/>de <em>ver o mundo.</em></h1>
            <p className="malta-hero-lead">Design atemporal, personalidade e uma seleção de estilos para acompanhar cada olhar. Conheça nosso catálogo demonstrativo.</p>
            <div className="malta-hero-actions">
              <Link to="/galeria" className="malta-btn malta-btn-gold">Explorar coleção <span aria-hidden="true">↗</span></Link>
              <Link to="/sobre" className="malta-btn malta-btn-line">Conhecer o conceito <span aria-hidden="true">→</span></Link>
            </div>
            <div className="malta-hero-caption"><span className="malta-separator-line"></span> Óculos de grau &amp; solares · Projeto de apresentação</div>
          </div>
          <div className="malta-hero-photo">
            <img src={getImageUrl('images/oculos-sol.jpg')} alt="Óculos solares da coleção demonstrativa" />
            <span className="malta-photo-mark" aria-hidden="true">MALTA <small>OPTICAL</small></span>
            <span className="malta-photo-index">01 / COLEÇÃO</span>
          </div>
        </div>
      </section>
      <div className="malta-strip"><div className="malta-container"><span>FORMA</span><span>EXPRESSÃO</span><span>ESTILO</span><span>PERSONALIDADE</span><span>DESIGN</span></div></div>
      <section className="malta-collections malta-section">
        <div className="malta-container">
          <div className="malta-section-intro"><div><p className="malta-overline">CURADORIA / 01</p><h2>Escolha seu <em>estilo.</em></h2></div><p>Explore as categorias da nossa coleção ilustrativa e descubra diferentes referências para cada ocasião.</p></div>
          <div className="malta-collection-grid">
            <Link className="malta-category-tile malta-solar" to="/galeria">
              <img src={getImageUrl('images/oculos-sol-1.jpg')} alt="Modelo demonstrativo de óculos de sol" loading="lazy"/>
              <span className="malta-category-overlay"><small>COLEÇÃO 01</small><strong>Óculos solares</strong><span>Explorar modelos ↗</span></span>
            </Link>
            <Link className="malta-category-tile malta-grau" to="/galeria">
              <img src={getImageUrl('images/oculos-grau.jpg')} alt="Armação de grau ilustrativa" loading="lazy"/>
              <span className="malta-category-overlay"><small>COLEÇÃO 02</small><strong>Armações de grau</strong><span>Explorar modelos ↗</span></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="malta-values malta-section">
        <div className="malta-container">
          <div className="malta-section-intro"><div><p className="malta-overline">PENSADO EM CADA DETALHE</p><h2>Design com <em>personalidade.</em></h2></div></div>
          <div className="malta-values-grid">{features.map(item=>(
            <article className="malta-value" key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.description}</p></article>
          ))}</div>
        </div>
      </section>
      <section className="malta-story">
        <div className="malta-container malta-story-grid">
          <div className="malta-story-photo"><img src={getImageUrl('images/marcas.jpg')} alt="Referências de marcas de óculos" loading="lazy"/></div>
          <div className="malta-story-content"><p className="malta-overline">A EXPERIÊNCIA MALTA</p><h2>Mais do que enxergar. <em>Sentir seu estilo.</em></h2><p>Esta vitrine reúne diferentes marcas e referências de produtos em um site institucional demonstrativo desenvolvido com React.</p><Link className="malta-btn malta-btn-gold" to="/sobre">Nossa história <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </div>
  );
}
