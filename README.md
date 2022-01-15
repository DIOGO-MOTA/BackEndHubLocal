## Clonar o repositório:
git clone + link


## Execução de Projeto Back-End

### Criar Conteiner docker
terminal

* docker run --name hubLocal -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

### Criar Tabelas
* yarn typeorm migration:run

### .env
#### seu ip/porta ex:
APP_API_URL=http://localhost:3333
   
### Start no servidor
* yarn server

### Funcionalidades da aplicação

1. Cadastro de usuários no sistema

2. Autenticação de usuários no sistema

3. CRUD empresas na API:

4. CRUD endereços na API:



