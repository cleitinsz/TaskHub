# TaskHub

TaskHub é um aplicativo de lista de tarefas projetado para ajudar as pessoas a gerenciar suas responsabilidades diárias de forma eficiente. Com o TaskHub, os usuários podem criar, organizar e acompanhar suas tarefas pendentes, categorizando-as e marcando-as como concluídas ou não.

## Funcionalidades Principais

- Criação de Tarefas: Os usuários podem facilmente adicionar novas tarefas, atribuindo-lhes um título, descrição e categoria relevante.
- Organização por Categoria: As tarefas podem ser categorizadas de acordo com a sua natureza (trabalho, estudos, pessoal, etc.), facilitando a visualização e o gerenciamento.
- Marcação de Conclusão: Os usuários podem marcar as tarefas como concluídas ou não concluídas, mantendo um registro claro do progresso.
- Visualização Intuitiva: O TaskHub oferece uma interface simples e intuitiva para que os usuários possam visualizar suas tarefas de forma clara e organizada.
- Flexibilidade de Uso: Com suporte tanto para uso local quanto em contêineres Docker, o TaskHub oferece flexibilidade de implantação para atender às necessidades individuais de cada usuário.

## Tecnologias Utilizadas

- React.Js
- Node
- Docker
- PostgreSQL
- pgAdmin4
- Express
- Jest
- Knex
- Tailwind CSS

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

## Instalação e Configuração

1. Clone este repositório.
2. No terminal, navegue até o diretório do projeto.

### Utilizando Docker

1. Certifique-se de ter o Docker instalado em sua máquina.
2. Execute o seguinte comando para iniciar os serviços:

   ```bash
   docker-compose up -d
   ```

3. Aguarde até que todos os serviços estejam em execução.

## Utilizando Localmente

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Execute o seguinte comando para instalar as dependências do projeto:

````bash
   npm install
```

3. Configure o arquivo .env conforme necessário.
4. Inicie o servidor utilizando o comando:

```bash
   npm run dev
```

### Acesso aos Serviços

Web: http://localhost:5173
API: http://localhost:3000
pgAdmin: http://localhost:8080

### Comandos Disponíveis

npm run dev: Inicia o servidor localmente.
npm run test:coverage: Executa os testes.
docker-compose up -d: Inicia os serviços usando Docker.
docker-compose down: Encerra os serviços Docker.
````
