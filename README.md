# Desafio Front end Conta Azul

Aplicação desenvolvida seguindo os requisitos do Desafio Front End da Conta Azul recebido por email. [(veja os pre-requisitos do desafio)](./CHALLENGE.md)

## Sumário

* [Desafio Conta Azul](./CHALLENGE.md)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Como rodar o projeto](#como-rodar-o-projeto)

## Tecnologias utilizadas

Algumas tecnologias foram escolhidas para auxiliarem no desenvolvimento dessa aplicação. Vale ressaltar que a escolha foi feita de forma mais objetiva possível a fim de resolver os problemas apresentados dentro do prazo estipulado, porém em conjunto com uma equipe a melhor estratégia é dialogar sobre a real necessidade de cada tecnologia e como o produto e a empresa poderá se benefeciar com tais escolhas.

### [React](https://facebook.github.io/react/)

> Uma *library* criada pelo Facebook para trabalhar com interfaces reativas.

Decidi utilizar essa *library* (alguns chamam de *framework*) por estar familiarizado com ela e ter plena confiança em que ela atende a necessidade desse projeto com qualidade e desempenho.

obs: considerando ser um projeto pequeno, também seria viável a escolha de *frameworks* menores como [Preact](https://preactjs.com), [MithrilJS](https://mithril.js.org) ou [VueJS](https://vuejs.org/).

### [Create React App](https://github.com/facebookincubator/create-react-app)

> Um *starter kit* para React criado pela própria equipe do React. É, atualmente, o *starter kit* para React mais popular (27.6k *stars* no github), ficando bem a frente do segundo colocado ([react-starter-kit](https://github.com/kriasoft/react-starter-kit), que possuí 14.1k *stars*)

Decidi utilizar esse *starter kit* para economizar tempo durante o *setup* do projeto e focar mais no processo de desenvolvimento.

Esse *starter kit* contém algumas tasks simples que agilizam no desenvolvimento. Em seu stack temos as seguintes configurações e suporte:

* React, JSX, ES6 e Flow
* Servidor de desenvolvimento com lint de erros comuns
* Importa CSS e imagens diretament no JavaScript
* Autoprefixo de CSS, então não é necessário escrever `-webkit` ou outros prefixos
* Um script de build para agrupar JS, CSS e imagens para produção, com *sourcemaps*
* Um *service-worker offline-first*  e um manifesto *web app*, que atende todos os criterios de *Progressive Web Apps*

### [Stylus](http://stylus-lang.com/)
> Pré-processador CSS baseado em NodeJS e que pussuí sintaxe próxima do Javascript convencional.

Em muitas ocasiões pré-processadores CSS são uteis para reaproveitamento de código: configuração de variaveis, mixins, funcões, etc.

O *Create React App* não possui nenhum pré-processador CSS integrado, portanto decidi escolher e configurar o *Stylus* pela simplicidade da sintaxe e facilidade de modularização.

### [Storybook](https://storybook.js.org/)
> Interface interativa para acessar e testar componentes do React

Decidi utilizar o *storybook* para ter acesso a todos os componentes e testa-los manualmente quando necessário.

Dentro do storybook é possível listar todos os componentes em uma interface separada da aplicação e também gerar e hospedar um *build* específico com essa interface rodando.

### [Firebase Database](https://firebase.google.com/)
> Armazenamento e sincronização de dados e Realtime (serverless)

Levando em consideração o objetivo do projeto e as especificações eu decidi utilizar o *Firebase* ao invés de mockar os dados em variaveis, localStorage ou IndexedDB.

O banco foi configurado de forma totalmente pública (leitura e escrita) e sem integração com servidor (serverless) o que permite sincronização realtime. Possível ver quando acessar a aplicação de em dois ou mais browsers ao mesmo tempo.

## Como rodar o projeto

### Dependencias
* `node v7.5.0`  and `npm v4.1.2` - [nodejs.org](https://nodejs.org)
* `yarn v0.19.1` - [yarnpkg.com](https://yarnpkg.com)

### Instalando localmente

* Clone esse projeto para seu computador: `git clone git@github.com:willycamargo/ca-challenge.git && cd ca-challenge`
* Instale as dependencias: `yarn`

### Tarefas

* `yarn start`: Sobe um servidor local de desenvolvimento com environment de dev e todos os debugs habilitados
* `yarn build`: Gera o build de produção da app para hospedar em um servidor estático
* `yarn storybook`: Sobe um servidor local com o Storybook
* `yarn storybook`: Gera o build do storybook para hospedagem em um servidor estático
* `yarn test`: Roda os testes em modo iterativo
