import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ConceptImage from '../components/ConceptImage';

// Todas as marcas, modelos e fotografias desta vitrine são fictícios.
// As imagens de IA representam o estilo da coleção, não produtos em estoque.
const catalogo = [
  {id:1,frame:1,model:'Âmbar',brand:'Ateliê Lume',type:'Solar'},
  {id:2,frame:6,model:'Horizonte',brand:'Série Aurora',type:'Solar'},
  {id:3,frame:9,model:'Duna',brand:'Linha Orbe',type:'Solar'},
  {id:4,frame:3,model:'Solstício',brand:'Ateliê Lume',type:'Solar'},
  {id:5,frame:5,model:'Brisa',brand:'Série Aurora',type:'Solar'},
  {id:6,frame:2,model:'Íris',brand:'Linha Orbe',type:'Grau'},
  {id:7,frame:7,model:'Clara',brand:'Ateliê Lume',type:'Grau'},
  {id:8,frame:8,model:'Cedro',brand:'Linha Orbe',type:'Grau'},
  {id:9,frame:4,model:'Aurora',brand:'Série Aurora',type:'Grau'}
];

const colecoes = [...new Set(catalogo.map(produto=>produto.brand))];

export default function Gallery() {
  const [filters,setFilters] = useState({ brand:'all',type:'all' });
  const products=catalogo.filter(p=>
    (filters.brand==='all'||p.brand===filters.brand) &&
    (filters.type==='all'||p.type===filters.type)
  );
  const onFilter=(key,value)=>setFilters(previous=>({...previous,[key]:value}));
  return (
    <div className="malta-gallery-page">
      <section className="malta-interior-hero"><div className="malta-container">
        <p className="malta-overline">ATELIÊ LUME / CATÁLOGO FICTÍCIO</p>
        <h1>Inspiração para <em>cada olhar.</em></h1>
        <p>Modelos e coleções imaginários para um projeto de frontend. As fotografias foram geradas por IA e não representam itens disponíveis para venda.</p>
      </div></section>
      <section className="malta-container malta-gallery-content">
        <div className="malta-gallery-heading">
          <div><p className="malta-overline">COLEÇÃO IMAGINÁRIA / 2026</p><h2>Explore os conceitos</h2></div>
          <span aria-live="polite">{products.length} {products.length===1?'conceito':'conceitos'}</span>
        </div>
        <div className="malta-filters">
          <label htmlFor="brand-filter">Coleção fictícia
            <select id="brand-filter" value={filters.brand} onChange={e=>onFilter('brand',e.target.value)}>
              <option value="all">Todas as coleções</option>
              {colecoes.map(brand=><option key={brand} value={brand}>{brand}</option>)}
            </select>
          </label>
          <label htmlFor="type-filter">Tipo
            <select id="type-filter" value={filters.type} onChange={e=>onFilter('type',e.target.value)}>
              <option value="all">Todos os tipos</option>
              <option value="Solar">Solar</option>
              <option value="Grau">Grau</option>
            </select>
          </label>
        </div>
        {products.length?(
          <div className="malta-products-grid">{products.map(p=>(
            <ProductCard key={p.id} frame={p.frame} model={p.model} brand={p.brand} type={p.type} />
          ))}</div>
        ):<p className="malta-no-results">Não encontramos conceitos com esses filtros. Escolha outra combinação.</p>}
        <p className="malta-gallery-note">Vitrine acadêmica fictícia. Imagens criadas com inteligência artificial, sem correspondência a produtos reais. Não há estoque, preços, reservas ou pedidos.</p>
        <div className="malta-showcase-banner">
          <ConceptImage frame={5} label="Composição artística de armações conceituais e acessórios de ótica em vitrine verde e dourada" />
          <div><p className="malta-overline">IMAGINAÇÃO &amp; DESIGN</p><h3>Um catálogo feito para demonstrar possibilidades.</h3><p>Todas as informações acima foram criadas para ilustrar o funcionamento de filtros, cartões e interfaces.</p></div>
        </div>
      </section>
    </div>
  );
}
