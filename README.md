# :hammer_and_wrench: Resumo

Projeto simples com objetivo de ser breve e colocar a mão na massa
Foi utilizado as seguintes tecnologias:
## Backend:
- [Node.js][nodejs] + [Express Framework][express].
- [Postgresql](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

# :information_source: Requisitos

- Docker

# :information_source: Como executar

## Clone o repositório
```bash
# Clone this repository
$ git clone https://github.com/ronniepereira/mercadolivre-microservices

# Go into the repository
$ cd mercadolivre-microservices

```
## Copie e configure as variaveis dos microserviços

```bash
# Entre na pasta database-service
$ cd database-service
# Copie o arquivo .env.example para .env
$ cp .env.example .env
# Configure o arquivo de variaveis
$ vim .env

# Entre na pasta mercadolivre-service
$ cd mercadolivre-service
# Copie o arquivo .env.example para .env
$ cp .env.example .env
# Configure o arquivo de variaveis
$ vim .env

# Entre na pasta postgresql
$ cd postgresql
# Copie o arquivo .env.example para .env
$ cp .env.example .env
# Configure o arquivo de variaveis
$ vim .env
```
# Suba os container com docker compose
```bash
$ docker compose up -d
```

## Teste os serviços
### - Importe a collection "Mercado Livre - Microservices.postman_collection.json" no seu Postman
### - Execute o endpoint "Mercado Livre Service -> Sync Product"
---

Feito por [Ronnie Pereira](https://www.linkedin.com/in/ronniepereira/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[ts]: https://www.typescriptlang.org/