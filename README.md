# Digital Store — Projeto React

Projeto acadêmico de uma loja virtual desenvolvido com React, Vite e React Router DOM.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Como abrir e executar no VS Code
1. Extraia o arquivo ZIP em uma pasta do computador.
2. Abra o Visual Studio Code.
3. Vá em **File > Open Folder** e selecione a pasta `digital-store`.
4. Abra o terminal integrado (**Terminal > New Terminal**).
5. Execute:

```bash
npm install
npm run dev
```

6. O terminal mostrará um endereço local, normalmente `http://localhost:5173/`. Abra esse endereço no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist`.

## Funcionalidades
- Navegação entre página inicial, listagem, detalhes e carrinho.
- Busca por nome e categoria.
- Filtro por categoria e ordenação por preço/avaliação.
- Seleção de tamanho na página de produto.
- Adição, remoção e alteração de quantidade no carrinho.
- Cálculo automático do subtotal e total.
- Layout responsivo.

## Estrutura
```text
src/
├── components/
│   ├── BuyBox.jsx
│   ├── FilterGroup.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Logo.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── ProductListing.jsx
│   ├── ProductOptions.jsx
│   └── Section.jsx
├── data/
│   └── products.js
├── pages/
│   ├── CartPage.jsx
│   ├── HomePage.jsx
│   ├── ProductListingPage.jsx
│   └── ProductViewPage.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Identidade visual
Cores retiradas do PDF do projeto: primária `#C92071`, secundária `#B5B6F2`, terciária `#991956`, erro `#EE4266`, sucesso `#52CA76`, aviso `#F6AA1C`, além da escala de cinza especificada.

## Observações
- Os produtos e preços são dados demonstrativos, armazenados em `src/data/products.js`.
- As imagens são carregadas de URLs externas; é necessária conexão com a internet para exibi-las.
- O checkout é demonstrativo e não realiza pagamentos.
