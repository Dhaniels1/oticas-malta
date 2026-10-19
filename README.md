# Óticas Malta — Site Institucional

Website responsivo de demonstração para uma ótica, desenvolvido com **React 18, React Router e Tailwind CSS**. O projeto apresenta coleções de óculos, informações institucionais e caminhos de contato pelo WhatsApp.

**Repositório:** https://github.com/Dhaniels1/oticas-malta

**Endereço configurado para GitHub Pages:** https://dhaniels1.github.io/oticas-malta

> O endereço acima está configurado no `package.json`. A publicação e seu funcionamento devem ser conferidos na página **Settings → Pages** do GitHub. Este projeto não implementa backend ou processamento de pedidos.

## O que está implementado

- Página inicial com apresentação da ótica e destaques.
- Galeria de modelos, com filtros por marca e tipo.
- Página "Sobre nós".
- Página de contato e links de atendimento pelo WhatsApp.
- Navegação entre `/`, `/galeria`, `/sobre` e `/contato`.
- Layout adaptável com Tailwind CSS.

O projeto contém dados de produtos demonstrativos definidos em código, sem banco de dados ou atualização dinâmica de estoque/preços.

## Tecnologias

- React 18 e React DOM.
- React Router DOM 6, com `basename="/oticas-malta"` para publicação em subdiretório.
- Tailwind CSS 3 e PostCSS.
- Create React App (`react-scripts` 5).
- `gh-pages` para deploy estático.

## Executar localmente

Requisitos: Node.js com npm.

```bash
git clone https://github.com/Dhaniels1/oticas-malta.git
cd oticas-malta
npm ci
npm start
```

Acesse `http://localhost:3000`.

Para gerar os arquivos estáticos:

```bash
npm run build
```

## Publicação no GitHub Pages

O `package.json` define `homepage` com o caminho do repositório e contém scripts para geração/publicação.

```bash
npm run deploy
```

Esse comando executa o build e publica os arquivos na branch `gh-pages` (caso esteja configurada e haja permissão). Confira a seleção de branch em **Settings → Pages**.

A configuração `PUBLIC_URL` e a função `src/utils/getImageUrl.js` auxiliam o carregamento de imagens no subdiretório do GitHub Pages. Informações adicionais estão em [INSTRUCOES_PUBLICACAO.md](INSTRUCOES_PUBLICACAO.md).

## Estrutura principal

| Caminho | Responsabilidade |
| --- | --- |
| `src/App.js` | Rotas e estrutura principal |
| `src/pages/Home.js` | Página inicial |
| `src/pages/Gallery.js` | Galeria e filtros |
| `src/pages/About.js` | Apresentação institucional |
| `src/pages/Contact.js` | Contato |
| `src/components/` | Cabeçalho, rodapé e cards |
| `public/images/` | Imagens estáticas |
| `src/index.css` | Estilos Tailwind |
| `src/utils/getImageUrl.js` | Caminhos de imagens |

## Limitações e pontos de atenção

**Formulário de contato:** o botão atual impede o envio do formulário e **não encaminha mensagens**. A comunicação funcional acontece pelos links externos do WhatsApp. Antes de considerar o site pronto para uso comercial, implemente um método de envio validado ou substitua o formulário por um link de contato explícito.

**WhatsApp:** os números utilizados por alguns links não coincidem com o telefone exibido no rodapé e no contato. **Confirme o número correto da ótica antes de corrigi-los**, para não redirecionar clientes por engano.

**Galeria:** são dados ilustrativos; não há carrinho de compras, gerenciamento de inventário ou integração de pagamentos.

**Variáveis de ambiente:** o arquivo `.env` versionado no estado atual contém somente URLs públicas. Nunca inclua senhas, tokens ou credenciais privadas em um arquivo versionado no GitHub. Prefira `.env.example` para configurações de exemplo em revisões futuras.

## Qualidade

Os comandos `npm ci` e `npm run build` permitem verificar se o site compila. O workflow GitHub Actions em `.github/workflows/build.yml` também executa essa verificação em atualizações e pull requests.

## Autoria e contexto

Projeto de frontend mantido no perfil [Dhaniels1](https://github.com/Dhaniels1). Site institucional demonstrativo; informações de contato e publicação devem ser conferidas antes de apresentar o projeto como site oficial de uma empresa.
