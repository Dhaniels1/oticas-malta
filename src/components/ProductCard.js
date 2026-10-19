import React from 'react';
import { Link } from 'react-router-dom';
import ConceptImage from './ConceptImage';

export default function ProductCard({ frame, model, brand, type }) {
  return (
    <article className="malta-product-card">
      <div className="malta-product-image">
        <ConceptImage frame={frame} label={`Imagem artística de óculos da coleção fictícia ${brand}, conceito ${model}`}/>
        <span className="malta-type-tag">{type}</span>
      </div>
      <div className="malta-product-info">
        <p>{brand} · coleção fictícia</p><h3>{model}</h3>
        <div className="malta-product-bottom"><span>Arte conceitual gerada por IA</span><Link to="/sobre" aria-label={`Saiba sobre a origem fictícia do conceito ${model}`}>Sobre o projeto ↗</Link></div>
      </div>
    </article>
  );
}
