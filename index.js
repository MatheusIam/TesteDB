const { engine } = require('express-handlebars');
const express = require('express'); const app = express();
const bodyParser = require('body-parser');
const post = require('./models/post');

// Configurando Handlebars
    app.engine('handlebars', engine({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');
    app.set('views', './views');

// Configuração body-parser
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

// ROTAS
    app.get("/",function(req,res){
        res.render('raiz');
    })
    app.get("/form", function(req,res){
        res.render('formulario');
    })
    app.post("/formrecebido", function(req,res){
        post.create({
            usuario: req.body.usuario,
            senha: req.body.senha
        }).then(function(){
            res.render('form_sucesso');
        }).catch(function(erro){
            res.send('Algo deu errado:/'+'<br>'+'Erro: '+erro);
        })
    })

app.listen(8081, function(){console.log("Servidor rodando! URL: localhost:8081")})