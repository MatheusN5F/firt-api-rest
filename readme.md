
Este repositório contém uma API REST simples em Node.js para fins de aprendizado.

## Como usar

1.  Faça um clone deste repositório em sua máquina local usando o comando `git clone https://github.com/MatheusN5F/firt-api-rest.git`.
2.  Navegue até o diretório raiz do projeto usando o comando `cd firt-api-rest`.
3.  Instale as dependências do projeto usando o comando `npm install`.
4.  Execute a API usando o comando `npm start`.
5.  A API estará disponível em `http://localhost:3000`.

## Endpoints

### GET /users

Retorna uma lista de todos os usuários cadastrados.

### POST /users

Adiciona um novo usuário ao banco de dados.

#### Parâmetros

| Nome     	| Tipo   	| Descrição 	|
|----------	|--------	|--------------	|
| name     	| string 	| Username     	|
| email    	| string 	| E-Mail       	|
| password 	| string 	| UserPassword 	|

### GET /users/:id

Retorna informações de um usuário específico.

#### Parâmetros

| Nome     	| Tipo   	| Descrição  	|
|----------	|--------	|--------------	|
| id     	| int 	| User ID     	|

## Tecnologias utilizadas

-   Node.js
-   Express
-   MongoDB
-   Mongoose

## Autor

Este projeto foi criado por Matheus Augusto.

# English
This repository contains a simple Node.js REST API for learning purposes.

## How to use

1.  Clone this repository to your local machine using the command `git clone https://github.com/MatheusN5F/firt-api-rest.git`.
2.  Navigate to the project root directory using the command `cd firt-api-rest`.
3.  Install project dependencies using the command `npm install`.
4.  Run the API using the command `npm start`.
5.  The API will be available at `http://localhost:3000`.

## Endpoints

### GET /users

Returns a list of all registered users.

### POST /users

Adds a new user to the database.

#### Parameters
| Name     	| Type   	| Description  	|
|----------	|--------	|--------------	|
| name     	| string 	| Username     	|
| email    	| string 	| E-Mail       	|
| password 	| string 	| UserPassword 	|

### GET /users/:id

Returns information about a specific user.

#### Parameters
| Name     	| Type   	| Description  	|
|----------	|--------	|--------------	|
| id     	| int 	| User ID     	|

## Technologies Used

-   Node.js
-   Express
-   MongoDB
-   Mongoose

## Author

This project was created by Matheus Augusto.