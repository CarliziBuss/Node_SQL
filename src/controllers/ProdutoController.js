const ModelProduto= require('../models/produto');

module.exports= //passar nossas APIs que vamos criar na nossa controllers
{
    async List(req,res)// receber e mandar os dados p/ nosso cliente METODO DE LISTAGEM 
    {
        try {
            const produto = await ModelProduto.findALL();  //await -> metodo async?  findALL-> trazer todos os produtos 
            return res.json(produto);
        } catch (erro) {
            return console.error("Erro na List:",erro);
            
        }
    },
    async Create (req,res)// METODO DE CRIAÇÃO 
    {
        try {
            const produto = await ModelProduto.create( // aqui dentro vamos passar todas as propriedade que tem na model 
            {
                codigo : req.body.codigo,// paramentros de entrada vem com o request
                Descricao : req.body.Descricao,
                DataCriacao: req.body.DataCriacao,
                DataAtualizacao: null,
            }
        );
            return res.json(produto);
        } catch (erro) {
            return console.error("Erro na Create :",erro);
            
        }
    },
    async Update (req,res)// METODO DE ATUALIZAÇÃO 
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.codigo);
            if (prod){
                prod.Descricao = req.body.Descricao,
                prod.DataAtualizacao= new Date();
                await prod.save(); //salvar e atualizar no banco de dados 
            }
            return res.json(prod);
        }catch (erro){
            return console.error("Error na Update :", erro); 
        }

    },
    async GetOne (req,res)// METODO DE BUSCAR UM PRODUTO
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.codigo);
            
            return res.json(prod);
        }catch (erro){
            return console.error("Error na Update :", erro); 
        }

    },
    async Delete (req,res)// METODO DE DELETAR 
    {
        try {

            const prod = await ModelProduto.findByPk(req.body.codigo); // pesquisar o produto 
            await prod.destroy();
            return res.json(prod);
        }catch (erro){
            return console.error("Error na delete :", erro); 
        }

    }
}