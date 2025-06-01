import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Header - Cabeçalho do site
 * Contém o logo da Óticas Malta e o menu de navegação
 */
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-malta-green">Óticas Malta</h1>
            <p className="text-center text-sm italic text-malta-green">Amor à primeira vista</p>
          </div>
          
          {/* Menu de navegação */}
          <nav className="w-full">
            <ul className="flex flex-wrap justify-center space-x-1 md:space-x-8">
              <li>
                <Link to="/" className="block px-4 py-2 text-malta-green hover:text-malta-gold font-montserrat font-semibold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="block px-4 py-2 text-malta-green hover:text-malta-gold font-montserrat font-semibold transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="block px-4 py-2 text-malta-green hover:text-malta-gold font-montserrat font-semibold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="block px-4 py-2 text-malta-green hover:text-malta-gold font-montserrat font-semibold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
