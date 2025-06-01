import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

// Importação das imagens
import rayban1 from '../assets/1.jpg';
import rayban2 from '../assets/5.jpg';
import rayban3 from '../assets/6.webp';
import kdeam from '../assets/9.jpg';
import hb from '../assets/10.webp';
import speed from '../assets/7.webp';
import vulkan from '../assets/3.webp';
import bulget from '../assets/oculos_bulget.png';
import grau from '../assets/2.webp';

/**
 * Página de Galeria
 * Exibe todos os produtos disponíveis com opções de filtro
 */
const Gallery = () => {
  // Estado para armazenar os produtos
  const [products, setProducts] = useState([]);
  // Estado para armazenar os filtros selecionados
  const [filters, setFilters] = useState({
    brand: 'all',
    type: 'all'
  });

  // Dados dos produtos
  const productData = [
    {
      id: 1,
      image: rayban1,
      model: 'Wayfarer Classic',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 2,
      image: rayban2,
      model: 'Round Double Bridge',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 3,
      image: rayban3,
      model: 'Wayfarer Original',
      brand: 'Ray-Ban',
      type: 'Solar'
    },
    {
      id: 4,
      image: kdeam,
      model: 'Sport Shield',
      brand: 'KDEAM',
      type: 'Solar'
    },
    {
      id: 5,
      image: hb,
      model: 'H-Block',
      brand: 'HB',
      type: 'Solar'
    },
    {
      id: 6,
      image: speed,
      model: 'Speed Runner',
      brand: 'Speed',
      type: 'Solar'
    },
    {
      id: 7,
      image: vulkan,
      model: 'Shield Pro',
      brand: 'Vulkan',
      type: 'Solar'
    },
    {
      id: 8,
      image: bulget,
      model: 'Elegance',
      brand: 'Bulget',
      type: 'Grau'
    },
    {
      id: 9,
      image: grau,
      model: 'Urban Style',
      brand: 'Vulkan',
      type: 'Grau'
    }
  ];

  // Filtrar produtos com base nos filtros selecionados
  useEffect(() => {
    let filteredProducts = [...productData];
    
    if (filters.brand !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }
    
    if (filters.type !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.type === filters.type);
    }
    
    setProducts(filteredProducts);
  }, [filters]);

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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-malta-green text-center mb-8">Galeria de Produtos</h1>
      
      {/* Filtros */}
      <div className="bg-malta-gray p-4 rounded-lg mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Filtro por marca */}
          <div className="w-full md:w-auto">
            <label htmlFor="brand-filter" className="block mb-2 font-semibold text-malta-green">Marca</label>
            <select 
              id="brand-filter"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filters.brand}
              onChange={(e) => handleFilterChange('brand', e.target.value)}
            >
              <option value="all">Todas as marcas</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          {/* Filtro por tipo */}
          <div className="w-full md:w-auto">
            <label htmlFor="type-filter" className="block mb-2 font-semibold text-malta-green">Tipo</label>
            <select 
              id="type-filter"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="all">Todos os tipos</option>
              <option value="Solar">Solar</option>
              <option value="Grau">Grau</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            image={product.image}
            model={product.model}
            brand={product.brand}
            type={product.type}
          />
        ))}
      </div>
      
      {/* Mensagem quando não há produtos */}
      {products.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
