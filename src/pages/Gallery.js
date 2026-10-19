import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import getImageUrl from '../utils/getImageUrl';

/**
 * Página de Galeria
 * Exibe todos os produtos disponíveis com opções de filtro
 */
const Gallery = () => {
  // Estado para armazenar os filtros selecionados
  const [filters, setFilters] = useState({
    brand: 'all',
    type: 'all'
  });

  // Dados dos produtos
  const productData = [
    {
      id: 1,
      image: getImageUrl('images/oculos-sol-1.jpg'),
      model: 'Wayfarer Classic',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 2,
      image: getImageUrl('images/oculos-sol-2.jpg'),
      model: 'Round Double Bridge',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 3,
      image: getImageUrl('images/oculos-sol-3.jpg'),
      model: 'Wayfarer Original',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 4,
      image: getImageUrl('images/oculos-sol-4.jpg'),
      model: 'Sport Shield',
      brand: 'KDEAM',
      type: 'Solar'
    },
    {
      id: 5,
      image: getImageUrl('images/oculos-sol-5.jpg'),
      model: 'H-Block',
      brand: 'HB',
      type: 'Solar'
    },
    {
      id: 6,
      image: getImageUrl('images/oculos-sol-6.jpg'),
      model: 'Speed Runner',
      brand: 'Speed',
      type: 'Solar'
    },
    {
      id: 7,
      image: getImageUrl('images/oculos-sol-7.jpg'),
      model: 'Shield Pro',
      brand: 'Vulkan',
      type: 'Solar'
    },
    {
      id: 8,
      image: getImageUrl('images/oculos-grau-1.jpg'),
      model: 'Elegance',
      brand: 'Bulget',
      type: 'Grau'
    },
    {
      id: 9,
      image: getImageUrl('images/oculos-grau-2.jpg'),
      model: 'Urban Style',
      brand: 'Vulkan',
      type: 'Grau'
    }
  ];

  // Os dados são estáticos: o filtro pode ser calculado diretamente,
  // sem estado derivado nem efeitos colaterais.
  const products = productData.filter(product => (
    (filters.brand === 'all' || product.brand === filters.brand) &&
    (filters.type === 'all' || product.type === filters.type)
  ));

  // Manipular mudanças nos filtros
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  // Lista de marcas disponíveis
  const brands = ['Ray-Ban', 'HB', 'Speed', 'Vulkan', 'Bulget', 'KDEAM'];

  return (
    <div className="malta-gallery-page">
      <section className="malta-interior-hero"><div className="malta-container">
        <p className="malta-overline">NOSSA CURADORIA / CATÁLOGO</p>
        <h1>Modelos para <em>cada olhar.</em></h1>
        <p>Uma seleção demonstrativa de modelos. Explore a coleção por marca e por tipo de armação.</p>
      </div></section>
      <section className="malta-container malta-gallery-content">
        <div className="malta-gallery-heading"><div><p className="malta-overline">COLEÇÃO / 2026</p><h2>Descubra os modelos</h2></div><span>{products.length} {products.length === 1 ? 'modelo' : 'modelos'}</span></div>
        <div className="malta-filters">
          <label htmlFor="brand-filter">Marca
            <select id="brand-filter" value={filters.brand} onChange={e=>handleFilterChange('brand',e.target.value)}>
              <option value="all">Todas as marcas</option>
              {brands.map(brand=><option key={brand} value={brand}>{brand}</option>)}
            </select>
          </label>
          <label htmlFor="type-filter">Categoria
            <select id="type-filter" value={filters.type} onChange={e=>handleFilterChange('type',e.target.value)}>
              <option value="all">Todos os tipos</option>
              <option value="Solar">Solar</option><option value="Grau">Grau</option>
            </select>
          </label>
        </div>
        {products.length > 0 ? (
          <div className="malta-products-grid">{products.map(product=>(
            <ProductCard key={product.id} image={product.image} model={product.model} brand={product.brand} type={product.type}/>
          ))}</div>
        ) : <p className="malta-no-results">Nenhum modelo encontrado com esses filtros. Experimente outra combinação.</p>}
        <p className="malta-gallery-note">Modelos de demonstração, sem consulta de estoque ou disponibilidade comercial.</p>
      </section>
    </div>
  );
};

export default Gallery;
