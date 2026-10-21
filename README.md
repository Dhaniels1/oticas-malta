# Ateliê Lume — Ótica conceitual (projeto Óticas Malta)

Aplicação de portfólio em **React 18, React Router e Tailwind CSS**, desenvolvida inicialmente no repositório `oticas-malta` e reformulada para representar uma **marca, uma loja e um catálogo inteiramente fictícios**.

**Aviso:** Ateliê Lume não é uma ótica real. Não existem CNPJ, atendimento, endereço comercial, produtos em estoque, vínculos com marcas ou serviços de saúde associados a este site.

## Experiência de interface

- Home editorial responsiva, com identidade verde-esmeralda, dourado e tipografia sofisticada.
- Catálogo com **nove modelos inventados**, divididos entre Solar e Grau.
- Filtros por coleção fictícia e tipo, usando estado React.
- Página Sobre explicando a natureza demonstrativa do projeto.
- Página Informações com endereço e e-mail **explicitamente fictícios** (domínio reservado `.example`), sem formulários ou redirecionamentos comerciais.
- Metadados e favicon próprios da marca conceitual.

## Imagens criadas especialmente para este projeto

As fotografias foram **geradas por inteligência artificial** a partir de instruções visuais de boutique de óculos verde e dourada. Elas não representam funcionários, clientes, local de atendimento ou produtos existentes.

Para melhorar carregamento, **dez composições/cortes** foram reunidos no arquivo:

`public/images/colecao-conceitual.webp` (840 × 1325 pixels)

O componente `src/components/ConceptImage.js` recorta os quadros do único arquivo com um `viewBox` SVG, evitando download de dezenas de fotografias redundantes.

**Todos os arquivos antigos** do diretório `public/images/`, bem como os ícones herdados da identidade anterior, foram excluídos da versão atual da branch `main`. Observe que o histórico Git pode conservar versões antigas; para exclusão permanente do histórico seria preciso reescrevê-lo deliberadamente.

## Tecnologias

React 18, React Router DOM 6, Tailwind CSS 3, Create React App (`react-scripts` 5) e GitHub Actions.

## Execução local

```bash
git clone https://github.com/Dhaniels1/oticas-malta.git
cd oticas-malta
npm install --no-package-lock
npm start
```

O lockfile legado está dessincronizado do manifesto atual. A instalação provisória ignora o lockfile; **regenerar e versionar um `package-lock.json` consistente** ainda é uma tarefa técnica pendente.

Build de produção:

```bash
npm run build
```

Teste da integridade do catálogo e privacidade demonstrativa:

```bash
node --test tests/catalogo-ficticio.test.cjs
```

## Deploy

- **GitHub Pages:** o workflow `.github/workflows/build.yml` executa o build e publica a branch `gh-pages`. A navegação utiliza `/oticas-malta` como base no GitHub Pages.

Confirme o resultado de cada implantação antes de usar os links de demonstração. Repositório de código: https://github.com/Dhaniels1/oticas-malta.

## Escopo e limitações

Este é **um site demonstrativo estático**. Não há backend, pagamento, estoque, agendamento, atendimento óptico ou canal de contato funcional. Os nomes `Ateliê Lume`, `Série Aurora` e `Linha Orbe`, os modelos, o endereço e o domínio de exemplo são utilizados apenas na narrativa fictícia. Fotografias artísticas de IA podem não retratar exatamente os modelos nomeados.

A revisão substitui integralmente o conteúdo comercial público antigo da versão atual. Não altera o histórico de commits nem promete apagar cópias já disponíveis em cache externo.
