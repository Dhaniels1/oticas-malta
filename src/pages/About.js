import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página Sobre Nós
 * Apresenta informações sobre a Óticas Malta, sua equipe e valores
 */
const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-malta-green text-center mb-8">Sobre Nós</h1>
      
      {/* História da loja */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-malta-green mb-4">Nossa História</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4 text-gray-700">
            A Óticas Malta nasceu com o propósito de oferecer produtos de qualidade e um atendimento diferenciado aos nossos clientes. 
            Somos uma ótica nova no mercado, mas com profissionais experientes e apaixonados pelo que fazem.
          </p>
          <p className="text-gray-700">
            Trabalhamos com as melhores marcas do mercado, como Ray-Ban, HB, Speed, Vulkan e Bulget, 
            garantindo qualidade e estilo para nossos clientes.
          </p>
        </div>
      </section>
      
      {/* Equipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-malta-green mb-4">Nossa Equipe</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img 
                src={`${process.env.PUBLIC_URL}/images/equipe.jpg`}
                alt="Equipe Óticas Malta" 
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-center mt-2 italic text-gray-600">
                "Equipe Malta, pronta pra atender-lhes com excelência!"
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-700">
                Nossa equipe é formada por profissionais qualificados e dedicados, 
                prontos para oferecer o melhor atendimento e orientação na escolha dos seus óculos.
              </p>
              <p className="text-gray-700">
                Acreditamos que cada cliente é único, por isso oferecemos um atendimento personalizado, 
                buscando entender suas necessidades e preferências para indicar o produto ideal.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Missão e Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-malta-green mb-4">Missão e Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-malta-green mb-3">Missão</h3>
            <p className="text-gray-700">
              Proporcionar bem-estar e autoconfiança aos nossos clientes através de produtos de qualidade e atendimento de excelência.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-malta-green mb-3">Visão</h3>
            <p className="text-gray-700">
              Ser referência em qualidade e atendimento no mercado óptico, conquistando a confiança e fidelidade dos nossos clientes.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-malta-green mb-3">Valores</h3>
            <p className="text-gray-700">
              Ética, respeito, compromisso com a qualidade, valorização do cliente e busca constante por inovação.
            </p>
          </div>
        </div>
      </section>
      
      {/* Localização */}
      <section>
        <h2 className="text-2xl font-bold text-malta-green mb-4">Nossa Localização</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-gray-700 mb-4">
                <strong>Endereço:</strong> R. Cel. Amador Pinheiro de Barros, N°25, loja 07 - Centro
              </p>
              <p className="text-gray-700 mb-6">
                Estamos localizados em uma região de fácil acesso, com estacionamento próximo para sua comodidade.
              </p>
              <Link to="/contato" className="btn-primary inline-block">
                Entre em Contato
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center p-4">
                  Mapa será carregado aqui quando o site estiver online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
