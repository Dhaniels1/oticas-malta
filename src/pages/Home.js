import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils/getImageUrl';

/**
 * Página inicial (Home) do site da Óticas Malta
 * Apresenta banner principal, destaques de produtos e informações sobre a loja
 */
const Home = () => {
  return (
    <div>
      {/* Banner Principal */}
      <section className="bg-malta-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Óticas Malta
          </h1>
          <p className="text-xl text-white mb-8">
            Amor à primeira vista
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/galeria" className="bg-white text-malta-green px-6 py-3 rounded-md font-bold hover:bg-malta-gold hover:text-white transition-all duration-300">
              Ver Produtos
            </Link>
            <a 
              href="https://wa.me/5532998136678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-malta-gold text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-malta-green transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Destaques de Produtos */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-malta-green text-center mb-12">
            Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Óculos de Sol */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={getImageUrl('images/oculos-sol.jpg')}
                  alt="Óculos de Sol" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-malta-green mb-2">Óculos de Sol</h3>
                <p className="text-gray-700 mb-4">
                  Conheça nossa coleção de óculos de sol das melhores marcas.
                </p>
                <Link to="/galeria" className="btn-primary inline-block">
                  Ver Coleção
                </Link>
              </div>
            </div>
            
            {/* Óculos de Grau */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={getImageUrl('images/oculos-grau.jpg')}
                  alt="Óculos de Grau" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-malta-green mb-2">Óculos de Grau</h3>
                <p className="text-gray-700 mb-4">
                  Armações modernas e confortáveis para seu dia a dia.
                </p>
                <Link to="/galeria" className="btn-primary inline-block">
                  Ver Coleção
                </Link>
              </div>
            </div>
            
            {/* Marcas Exclusivas */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src={getImageUrl('images/marcas.jpg')}
                  alt="Marcas Exclusivas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-malta-green mb-2">Marcas Exclusivas</h3>
                <p className="text-gray-700 mb-4">
                  Trabalhamos com as melhores marcas do mercado.
                </p>
                <Link to="/sobre" className="btn-primary inline-block">
                  Conhecer Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Óticas Malta */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-malta-green text-center mb-12">
            Por que escolher a Óticas Malta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-malta-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-malta-green mb-2">Qualidade Garantida</h3>
              <p className="text-gray-700">
                Trabalhamos apenas com produtos de alta qualidade e marcas reconhecidas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-malta-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♥</span>
              </div>
              <h3 className="text-xl font-bold text-malta-green mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-700">
                Nossa equipe está pronta para oferecer o melhor atendimento e orientação.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-malta-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold text-malta-green mb-2">Variedade de Modelos</h3>
              <p className="text-gray-700">
                Ampla variedade de modelos para todos os estilos e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={getImageUrl('images/equipe.jpg')}
                alt="Equipe Óticas Malta" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-malta-green mb-6">
                Conheça Nossa Equipe
              </h2>
              <p className="text-gray-700 mb-6">
                A Equipe Malta está pronta para atendê-lo com excelência! 
                Nossos profissionais são treinados para oferecer o melhor atendimento 
                e ajudá-lo a encontrar o modelo perfeito para você.
              </p>
              <Link to="/sobre" className="btn-primary inline-block">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-malta-green text-center mb-12">
            Nossas Marcas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-malta-green">Ray-Ban</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-malta-green">HB</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-malta-green">Speed</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-malta-green">Vulkan</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-xl font-bold text-malta-green">Bulget</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
