import React from 'react';

/**
 * Componente de Card de Produto
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.image - Caminho da imagem do produto
 * @param {string} props.model - Nome do modelo do óculos
 * @param {string} props.brand - Marca do óculos
 * @param {string} props.type - Tipo do óculos (grau/solar)
 * @param {string} props.phone - Número de telefone para contato WhatsApp
 */
const ProductCard = ({ image, model, brand, type, phone = "5532998136679" }) => {
  // Função para formatar a mensagem do WhatsApp
  const formatWhatsAppMessage = () => {
    const message = `Olá! Vi o modelo ${model} da ${brand} no site e gostaria de reservar.`;
    return encodeURIComponent(message);
  };

  return (
    <div className="card flex flex-col h-full">
      <div className="relative pt-[100%] overflow-hidden bg-malta-gray">
        <img 
          src={image} 
          alt={`${model} - ${brand}`} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-malta-green mb-1">{model}</h3>
        <p className="text-gray-700 mb-2">{brand}</p>
        <p className="text-sm text-gray-500 mb-4">{type}</p>
        <div className="mt-auto">
          <a 
            href={`https://wa.me/${phone}?text=${formatWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block"
          >
            Reservar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
