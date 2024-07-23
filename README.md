# Teste Técnico Frontend

## Instalação de Dependências

Para instalar todas as dependências do projeto, execute:

```
npm install
```

## Compilação do Código

Para compilar o código, execute:

```
npm run serve
```

## Login

Use as seguintes credenciais para fazer login:

- **Email**: `eve.holt@reqres.in`
- **Senha**: `cityslicka`

## Funcionalidades e Navegação

### Tela de Dashboard

A primeira tela que você verá é a **Dashboard**, contendo um gráfico que mostra quantos usuários começam com a letra "L". Este gráfico é alimentado pela API [Reqres](https://reqres.in/).

### Tela de Usuários

Nesta tela, você pode:

- **Buscar Usuários**: Digite a partir de 3 caracteres e pressione Enter ou clique na lupa ao lado do campo de busca.
- **Criar Usuário**: Clique no botão ao lado do campo de busca.
- **Editar e Excluir Usuários**: Use os botões de ação na listagem.
- **Paginação**: Navegue entre as páginas da listagem de usuários.

> Observação: Todas essas requisições são simuladas utilizando a API [Reqres](https://reqres.in/). As listagens não são atualizadas em tempo real, pois os dados são mockados.

## Testes Unitários

### Rodando Todos os Testes

Para rodar todos os testes de uma vez, execute:

```bash
npm run test:unit
```

### Rodando Testes Individualmente

Para rodar um teste específico, execute:

```bash
npm run test:unit <nome-do-teste>.spec.ts
```

## Estrutura do Projeto

### Configuração

Configurei o Vue manualmente para selecionar as melhores dependências para o projeto e descartar as desnecessárias.

### Estrutura por Módulos

Cada módulo contém:

- **Components**: Componentes específicos do módulo.
- **Store**: Gerenciamento de estado utilizando Pinia.
- **Interfaces**: Interfaces TypeScript para tipagem.
- **Services**: Serviços para lógica de negócios e chamadas de API.
- **Repositories**: Classes para encapsular interações com APIs.
- **Views**: Páginas específicas do módulo.

### Pasta Shared

A pasta `shared` contém componentes, store, interfaces, repositórios, rotas e serviços que podem ser compartilhados por todo o sistema. Exemplos:

- **Componentização**: Componentes como paginação e modal de alerta, usados em diversas telas, para aumentar a escalabilidade do projeto.
- **Repositório Base**: Encapsula requisições HTTP, proporcionando uma estrutura organizada para interações com APIs.

## Dependências Adicionais

- **Bootstrap**: Biblioteca de estilização que ajuda na padronização dos componentes e economia de tempo com layout.
- **Axios**: Biblioteca para simplificar requisições HTTP, oferecendo excelente suporte a erros e facilitando a manutenção e escalabilidade do projeto.
- **ApexCharts**: Biblioteca de gráficos para visualização de dados.

---

Este projeto foi desenvolvido com o foco em escalabilidade, organização e reutilização de componentes e serviços com Vue.js, TypeScript e Pinia para gerenciamento de estado.
