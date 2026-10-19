import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, model, brand, type }) => (
  <article className="malta-product-card">
    <div className="malta-product-image"><img src={image} alt={`Armação ${model} — ${brand}`} loading="lazy"/><span className="malta-type-tag">{type}</span></div>
    <div className="malta-product-info">
      <p>{brand}</p><h3>{model}</h3>
      <div className="malta-product-bottom"><span>Modelo ilustrativo</span><Link to="/contato" aria-label={`Ver informações de contato para o modelo ${model}`}>Saiba mais ↗</Link></div>
    </div>
  </article>
);
export default ProductCard;
