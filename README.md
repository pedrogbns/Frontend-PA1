# Prática Avaliada 1 — Frontend

Atividade desenvolvida para a disciplina de Frontend do curso de Análise e Desenvolvimento de Sistemas da FGV.

## Exercícios

### Exercício 1 — Arquitetura Cliente-Servidor

Análise do fluxo de comunicação entre cliente e servidor ao acessar o portal da FGV.

**Conteúdo:** resolução DNS, cache do navegador, roteadores, frontend e backend, HTML semântico e diagrama do fluxo de comunicação.

**Como executar:** abrir o arquivo `ex01/analise-cliente-servidor.html` no navegador.

### Exercício 2 — Configuração de Ambiente de Desenvolvimento

Projeto Node.js com configuração de dependências de produção e desenvolvimento.

**Tecnologias:** Node.js, NPM, Express, ESLint e Prettier.

**Como executar:**

```bash
cd ex02
npm install
npm run start
```

Acessar `http://localhost:3000`.

O arquivo `ex02/README.md` contém instruções adicionais sobre os scripts disponíveis.

### Exercício 3 — HTML, CSS e JavaScript Essencial

Página de portfólio pessoal com layout responsivo e funcionalidades interativas.

**Funcionalidades:**
- Apresentação pessoal e lista de tecnologias.
- Alternância entre três cores de fundo.
- Formulário com validação de nome e e-mail.

**Como executar:** abrir o arquivo `ex03/portfolio-simples.html` no navegador.

### Exercício 4 — Componente Vue.js Básico

Aplicação Vue.js com um componente de contador interativo.

**Funcionalidades:**
- Valor inicial recebido por prop.
- Incremento e decremento sem valores negativos.
- Identificação de números pares e ímpares.
- Alerta ao atingir o valor 10.
- Estilos condicionais e emissão de eventos.

**Como executar:**

```bash
cd ex04
npm install
npm run dev
```

Abrir no navegador o endereço local informado pelo Vite.

## Estrutura do repositório

```text
PA1/
├── ex01/
├── ex02/
├── ex03/
└── ex04/
```

Cada pasta