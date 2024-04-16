//definicões de configurações p/ tabela 
const sequelize = require('sequelize');
const database = require('../../db');
const schema = '';

class Produto extends sequelize.Model {}

Produto.init(
    {//campos da nossa tabela 
        codigo:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primarykey: true

        },
        Descricao: 
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        },
        DataAtualizacao: 
        {
            type: sequelize.DATE,
            allowNull: true,
        }

    },
    {
        sequelize: database, modelName: 'tbProduto', shema
        //modelName-> Exatamente o nome da tabela no meu banco de dados 
    }
)

module.exports = Produto;
