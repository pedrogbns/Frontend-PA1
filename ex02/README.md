# Meu Ambiente Frontend

Projeto desenvolvido para o Exercício 2 da Prática Avaliada da Semana 4 da disciplina de Frontend da FGV.

## Objetivo

Configurar um ambiente de desenvolvimento utilizando Node.js e NPM, com ferramentas para execução de um servidor web, análise de código e formatação automática.

## Tecnologias utilizadas

- **Node.js:** ambiente de execução de JavaScript fora do navegador.
- **NPM:** gerenciador de pacotes utilizado para instalar dependências e executar scripts.
- **Express:** framework utilizado para criar o servidor web.
- **ESLint:** ferramenta para identificar possíveis erros e problemas de qualidade no código JavaScript.
- **Prettier:** ferramenta para padronizar automaticamente a formatação do código.

## Instalação

Para executar este projeto, é necessário ter Node.js e NPM instalados.

Após obter os arquivos do projeto, abra o terminal na pasta `ex02` e execute:

```bash
npm install
```

Esse comando instala as dependências descritas no `package.json`.

## Scripts disponíveis

### Iniciar o servidor

```bash
npm run start
```

Executa o servidor Express utilizando Node.js.

### Modo de desenvolvimento

```bash
npm run dev
```

Inicia o servidor com monitoramento de alterações, reiniciando automaticamente quando os arquivos JavaScript são modificados.

### Analisar o código

```bash
npm run lint
```

Executa o ESLint para verificar possíveis problemas no código.

### Formatar o código

```bash
npm run format
```

Executa o Prettier para padronizar a formatação dos arquivos do projeto.

## Acessar a aplicação

Após iniciar o servidor, abra o navegador e acesse:

http://localhost:3000

A aplicação exibirá a mensagem:

**Meu ambiente frontend está funcionando!**

## Estrutura do projeto

```text
ex02/
├── index.js
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

A pasta `node_modules` é criada durante a instalação das dependências e não é incluída no repositório Git.