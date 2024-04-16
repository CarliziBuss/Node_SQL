const sequelizer = require('sequelize');

const database = new sequelizer('db_nodejs','user','senha',
    { 
        dialect: 'MySQL80', host:'localhost', port: 3306 //nome do servidor ou ip
    }); 
    database.sync(); //recriar tabelas se nâo existir nenhuma tabela 

    module.exports = database; 

//Configurações basicas p/ conectar c/ base de dados