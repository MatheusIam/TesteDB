# Dependências
`npm install --save express express-handlebars sequelize body-parser mysql2`

## Pré configurações
- Abra o console do mysql e execute
`CREATE DATABASE testedb`
- Modifique o valor de `usuario` e `senha` no arquivo `models/post.js` para o respectivo usuario e senha do console MySQL
- Acesse a pasta `models/` e execute o comando `node post.js` 
- Abra o arquivo `models/post.js` e comente a linha `post.sync({force: true}); `

## Abrindo o servidor
- Abra um terminal na pasta raiz da aplicação e rode o comando `node index.js`

## Interagindo
- Acesse https://localhost:8081/ na sua máquina
