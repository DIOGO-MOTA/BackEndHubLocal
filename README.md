## Clonar o repositório:
git clone + link


## Execução de Projeto Back-End

### Criar Conteiner docker
terminal

* docker run --name hubLocal -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres

### banco de dados
<img src="/1.png" width="715" height="600"/>
<img src="/2.png" width="715" height="600"/>

1. Host= localhost
2. Database: postgres
3. UserName: postgres
5. password= admin

6. Database name= app_hublocal

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



