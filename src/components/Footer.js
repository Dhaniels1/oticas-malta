import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-malta-green text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="mb-2">WhatsApp: (32) 99813-6679</p>
            <div className="mt-4">
              <a 
                href="https://wa.me/5532998136679" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-malta-green px-4 py-2 rounded-md hover:bg-malta-gold hover:text-white transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <p className="mb-2">R. Cel. Amador Pinheiro de Barros, N°25</p>
            <p>Loja 07 - Centro</p>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-malta-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-malta-gold transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Óticas Malta - Amor à primeira vista</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
