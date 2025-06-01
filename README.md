# Óticas Malta - Documentação do Projeto

## Visão Geral

Este projeto é um site estático para a Óticas Malta, desenvolvido com React e TailwindCSS. O site permite que os clientes visualizem os modelos de óculos disponíveis e façam reservas via WhatsApp.

## Estrutura do Projeto

```
oticas_malta_site/
├── public/                 # Arquivos públicos
├── src/                    # Código fonte
│   ├── assets/             # Imagens e recursos estáticos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.js       # Cabeçalho do site
│   │   ├── Footer.js       # Rodapé do site
│   │   └── ProductCard.js  # Card de produto para a galeria
│   ├── pages/              # Páginas do site
│   │   ├── Home.js         # Página inicial
│   │   ├── Gallery.js      # Galeria de produtos
│   │   ├── About.js        # Página Sobre Nós
│   │   └── Contact.js      # Página de Contato
│   ├── App.js              # Componente principal com rotas
│   ├── index.js            # Ponto de entrada da aplicação
│   └── index.css           # Estilos globais e configuração do TailwindCSS
├── tailwind.config.js      # Configuração do TailwindCSS
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **React Router**: Para navegação entre páginas
- **TailwindCSS**: Framework CSS para estilização
- **GitHub Pages**: Para hospedagem do site

## Guia de Cores e Estilos

As cores e estilos do site seguem o guia de design definido no arquivo `tailwind.config.js`:

- **Verde Óticas Malta**: `#0A5C36`
- **Dourado**: `#D4AF37`
- **Branco**: `#FFFFFF`
- **Cinza Claro**: `#F5F5F5`

As fontes utilizadas são:
- **Montserrat**: Para títulos e elementos de destaque
- **Open Sans**: Para textos e conteúdo geral

## Componentes Principais

### Header

O componente `Header` contém o logo da Óticas Malta e o menu de navegação. Ele é responsivo e se adapta a diferentes tamanhos de tela.

### Footer

O componente `Footer` contém informações de contato, endereço e links para redes sociais. Também inclui um botão para contato via WhatsApp.

### ProductCard

O componente `ProductCard` é utilizado na galeria para exibir os produtos disponíveis. Cada card contém:
- Imagem do produto
- Nome do modelo
- Marca
- Tipo (Grau/Solar)
- Botão para reserva via WhatsApp

## Páginas

### Home

A página inicial apresenta:
- Banner principal com chamada para ação
- Destaques de produtos
- Seção "Por que escolher a Óticas Malta"
- Apresentação da equipe
- Lista de marcas disponíveis

### Gallery

A galeria de produtos permite:
- Visualizar todos os produtos disponíveis
- Filtrar por marca e tipo
- Reservar produtos via WhatsApp

### About

A página "Sobre Nós" contém:
- História da loja
- Apresentação da equipe
- Missão e valores
- Localização

### Contact

A página de contato inclui:
- Formulário de contato
- Informações de contato
- Horário de funcionamento
- Mapa de localização

## Integração com WhatsApp

A integração com WhatsApp é feita através de links que redirecionam para o aplicativo ou site do WhatsApp com uma mensagem pré-formatada. A função `formatWhatsAppMessage` é utilizada para criar esses links.

Exemplo:
```javascript
const formatWhatsAppMessage = () => {
  const message = `Olá! Vi o modelo ${model} da ${brand} no site e gostaria de reservar.`;
  return encodeURIComponent(message);
};

// Uso
<a href={`https://wa.me/5532998136679?text=${formatWhatsAppMessage()}`}>
  Reservar via WhatsApp
</a>
```

## Como Executar o Projeto Localmente

1. Certifique-se de ter o Node.js instalado
2. Clone o repositório
3. Instale as dependências:
   ```
   npm install
   ```
4. Execute o projeto:
   ```
   npm start
   ```
5. Acesse `http://localhost:3000` no navegador

## Como Fazer o Build para Produção

Para gerar os arquivos estáticos para publicação:

```
npm run build
```

Os arquivos serão gerados na pasta `build/`.

## Como Publicar no GitHub Pages

1. Crie um repositório no GitHub
2. Adicione o repositório como remote:
   ```
   git remote add origin https://github.com/seu-usuario/oticas-malta.git
   ```
3. Instale o pacote gh-pages:
   ```
   npm install --save-dev gh-pages
   ```
4. Adicione os scripts no package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
5. Adicione a propriedade homepage no package.json:
   ```json
   "homepage": "https://seu-usuario.github.io/oticas-malta"
   ```
6. Execute o deploy:
   ```
   npm run deploy
   ```

## Como Atualizar o Conteúdo

### Adicionar Novos Produtos

Para adicionar novos produtos à galeria, edite o arquivo `src/pages/Gallery.js`:

1. Adicione a imagem na pasta `src/assets/`
2. Importe a imagem no início do arquivo:
   ```javascript
   import novoProduto from '../assets/novo-produto.jpg';
   ```
3. Adicione o produto ao array `productData`:
   ```javascript
   {
     id: 10, // Use um ID único
     image: novoProduto,
     model: 'Nome do Modelo',
     brand: 'Marca',
     type: 'Grau' // ou 'Solar'
   }
   ```

### Atualizar Informações de Contato

Para atualizar informações de contato, edite os arquivos:
- `src/components/Footer.js`: Para o número de WhatsApp no rodapé
- `src/pages/Contact.js`: Para informações na página de contato

### Atualizar Conteúdo da Página Sobre Nós

Para atualizar o conteúdo da página "Sobre Nós", edite o arquivo `src/pages/About.js`.

## Manutenção e Suporte

Para qualquer dúvida ou suporte, entre em contato com o desenvolvedor.

---

Desenvolvido com ❤️ para Óticas Malta
