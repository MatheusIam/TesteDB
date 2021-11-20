const Sequelize = require('sequelize');

// Configuração
    const nome_DB = "TesteDB"; // Rodar CREATE DATABASE TesteDB 
    const senha = "SENHA"; // Coloca a senha do MySQL aqui
    const usuario = "USUARIO"; // Coloca o usuario do MySQL aqui

// Conexão MySQL
    const sequelize = new Sequelize(nome_DB, usuario, senha, {
        host: 'localhost', dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}