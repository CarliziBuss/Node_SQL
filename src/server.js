const express = require ('express');

const api = express();

const routes = require ('./router');

api.use(express.json()); //usar nosso bd e rotas 
api.use(routes);

api.listen(4200); //qual porta nosso servidor vai rodar 