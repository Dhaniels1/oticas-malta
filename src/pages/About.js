import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils/getImageUrl';

export default function About() {
  return (
    <div className="malta-about-page">
      <section className="malta-interior-hero"><div className="malta-container"><p className="malta-overline">SOBRE O CONCEITO</p><h1>Estilo em <em>cada detalhe.</em></h1><p>Uma experiência visual criada para apresentar modelos de óculos com clareza, personalidade e navegação intuitiva.</p></div></section>
      <section className="malta-container malta-about-grid">
        <div className="malta-about-image"><img src={getImageUrl('images/equipe.jpg')} alt="Imagem ilustrativa da equipe da ótica" loading="lazy"/></div>
        <div className="malta-about-text"><p className="malta-overline">NOSSA PROPOSTA</p><h2>Uma vitrine para o seu estilo.</h2><p>Este projeto apresenta um conceito de site para uma ótica, reunindo categorias de óculos, referências de marcas e uma galeria com filtros interativos.</p><p>Construído em React e Tailwind CSS, o site foi desenvolvido como exercício de interface, responsividade e organização de componentes.</p><Link className="malta-btn malta-btn-gold" to="/galeria">Explorar coleção ↗</Link></div>
      </section>
      <section className="malta-about-footer"><div className="malta-container"><p className="malta-overline">NOTA DE TRANSPARÊNCIA</p><h2>Apresentação acadêmica e demonstrativa.</h2><p>O conteúdo é ilustrativo. Produtos, imagens e marcas não representam confirmação de estoque ou vínculo comercial. Não há backend de vendas, reservas ou processamento de mensagens.</p></div></section>
    </div>
  );
}
