const express = require("express"); //constante define variavel express do nosso servidor
const controllerProduto = require('./controllers/ProdutoController'); // chamar nossa controller de produto 


const routes = express.Router();

//definir nossas rotas 

routes.get("/List", controllerProduto.List);

routes.post('/Create', controllerProduto.Create);

routes.post('/Update', controllerProduto.Update);

routes.get('/GetOne', controllerProduto.GetOne);

routes.get('/Delete', controllerProduto.Delete);

modele.exports = routes;
