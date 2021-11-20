const db = require('./db');

const post = db.sequelize.define('usuarios', {
    usuario: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.TEXT
    }
})

// DEPOIS DE EXECUTAR 1 VEZ COMENTE A LINHA ABAIXO!
// post.sync({force: true}); 

module.exports = post;