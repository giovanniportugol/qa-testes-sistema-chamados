# Automação de Login - BugBank

Este projeto faz parte dos meus estudos iniciais em automação de testes utilizando Playwright e JavaScript.

O objetivo é automatizar cenários simples de login no site BugBank, aplicando conceitos de QA, testes funcionais e validação de comportamento esperado em uma aplicação web.

## Site testado

BugBank  
https://bugbank.netlify.app/

## Ferramentas utilizadas

- Playwright
- JavaScript
- Node.js
- GitHub

## Cenários automatizados

- Login com campos vazios
- Login com senha inválida

## Cenários planejados

- Login com sucesso

## Objetivos do projeto

- Praticar automação de testes web
- Automatizar cenários funcionais simples
- Validar mensagens de erro e sucesso
- Evoluir meus conhecimentos em QA Automation
- Complementar meu portfólio de QA/Testes de Software

## Estrutura do projeto

```text
playwright/
├── README.md
├── package.json
├── playwright.config.js
└── tests/
    └── login.spec.js
```

## Como executar os testes

Para instalar as dependências:

```bash
npm install
```

Para instalar os navegadores do Playwright:

```bash
npx playwright install
```

Para executar os testes:

```bash
npm test
```

Para executar com navegador visível:

```bash
npm run test:headed
```

Para visualizar o relatório:

```bash
npm run report
```

## Status

Em desenvolvimento.
