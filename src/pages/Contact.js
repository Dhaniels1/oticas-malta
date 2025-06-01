import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de Contato
 * Permite que os usuários entrem em contato com a Óticas Malta
 */
const Contact = () => {
  // Função para formatar a mensagem do WhatsApp
  const formatWhatsAppMessage = () => {
    const message = `Olá! Gostaria de mais informações sobre os produtos da Óticas Malta.`;
    return encodeURIComponent(message);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-malta-green text-center mb-8">Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário de Contato */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-malta-green mb-4">Envie uma Mensagem</h2>
          <p className="text-gray-700 mb-6">
            Preencha o formulário abaixo para entrar em contato conosco. Responderemos o mais breve possível.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">Nome</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-malta-green"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">E-mail</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-malta-green"
                placeholder="seu.email@exemplo.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-malta-green"
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">Mensagem</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-malta-green"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
              onClick={(e) => e.preventDefault()} // Previne o envio do formulário
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        {/* Informações de Contato */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-malta-green mb-4">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800">Endereço</h3>
                <p className="text-gray-700">
                  R. Cel. Amador Pinheiro de Barros, N°25, loja 07 - Centro
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800">WhatsApp</h3>
                <p className="text-gray-700">(32) 99813-6679</p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-700">Sábado: 9h às 13h</p>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href={`https://wa.me/5532998136679?text=${formatWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button w-full text-center block"
              >
                Falar via WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-malta-green mb-4">Localização</h2>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-center p-4">
                Mapa será carregado aqui quando o site estiver online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
