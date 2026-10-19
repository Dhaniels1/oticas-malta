# Óticas Malta — Site Institucional

Website responsivo de demonstração para uma ótica, desenvolvido com **React 18, React Router e Tailwind CSS**. O projeto apresenta coleções de óculos, informações institucionais e galeria com filtros por marca e tipo. O visual foi renovado com identidade editorial verde-floresta e dourado, cartões e navegação responsiva.

**Repositório:** https://github.com/Dhaniels1/oticas-malta

**Endereço configurado para GitHub Pages:** https://dhaniels1.github.io/oticas-malta

> O endereço acima está configurado no `package.json`. A publicação e seu funcionamento devem ser conferidos na página **Settings → Pages** do GitHub. Este projeto não implementa backend ou processamento de pedidos.

## O que está implementado

- Página inicial redesenhada com hero editorial, imagens da coleção e seções visuais.
- Galeria de modelos, com filtros por marca e tipo.
- Página "Sobre nós".
- Página de contato transparente: sem formulário fictício e sem links para números de WhatsApp conflitantes, até confirmação de contato válido.
- Navegação entre `/`, `/galeria`, `/sobre` e `/contato`.
- Layout responsivo com Tailwind CSS e estilos próprios em `src/index.css`.

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
npm install --no-package-lock
npm start
```

Acesse `http://localhost:3000`.

Para gerar os arquivos estáticos:

```bash
npm run build
```

## Publicação no GitHub Pages

O `package.json` define `homepage` com o caminho do repositório. O workflow `.github/workflows/build.yml` compila a branch `main` e, em push, tenta atualizar automaticamente a branch `gh-pages` após um build bem-sucedido. Confirme o resultado no GitHub Actions antes de considerar a revisão publicada.

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

**Contato:** a interface demonstrativa não coleta nem transmite mensagens. A página informa que os canais comerciais precisam ser confirmados antes da divulgação.

**WhatsApp:** a versão anterior continha números conflitantes. Os links de contato direto foram retirados do novo visual para evitar encaminhamentos incorretos. É necessário validar o número oficial antes de adicionar um atendimento comercial.

**Galeria:** são dados ilustrativos; não há carrinho de compras, gerenciamento de inventário ou integração de pagamentos.

**Variáveis de ambiente:** o arquivo `.env` versionado no estado atual contém somente URLs públicas. Nunca inclua senhas, tokens ou credenciais privadas em um arquivo versionado no GitHub. Prefira `.env.example` para configurações de exemplo em revisões futuras.

## Qualidade

A versão atual apresenta um **descompasso entre `package.json` e `package-lock.json`**, identificado pelo GitHub Actions. Por enquanto, utilize `npm install --no-package-lock` para instalar de acordo com o manifesto, e `npm run build` para compilar. O workflow executa o mesmo procedimento temporário. Para restabelecer instalações reproduzíveis com `npm ci`, será necessário regenerar e versionar um novo `package-lock.json` com as dependências corretas (usando `npm install` em um ambiente com acesso ao registro npm).

## Revisão visual de outubro de 2026

- Cabeçalho novo, navegação com destaque da rota ativa e identidade de marca.
- Home editorial com galeria de imagens de produtos já existentes no repositório.
- Vitrine com cartões redesenhados e filtros funcionais.
- Seções internas Sobre e Contato revisadas para não sugerir funcionalidades comerciais inexistentes.
- CSS responsivo, sem novas dependências JavaScript.

## Autoria e contexto

Projeto de frontend mantido no perfil [Dhaniels1](https://github.com/Dhaniels1). Site institucional demonstrativo; informações de contato e publicação devem ser conferidas antes de apresentar o projeto como site oficial de uma empresa.
