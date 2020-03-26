const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

/*
    Rota / Recurso
    Metodos HTTP: 
    1- GET: Buscar uma informação do back-end
    2- POST: criar uma informação no back-end
    3- PUT: alterar uma informação no back-end
    4- DELETE: Deletar uma informação do back-end
    Tipos de Parâmetros:
    1- Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação e etc)
    const params = req.query;
    console.log(params);
    2- Route Parms: Parâmetros utilizados para identificar recursos
    const params = req.params;
    console.log(params);
    3- Request Body (Req Body): Corpo da da requisição, usado para criar ou alterar recursos
    const body = req.body;
    console.log(params); 
*/

routes.get('/', (req,res) =>
{
    return res.send("Alo");
});

routes.post('/users', async (req,res) =>
{
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('users').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return res.json({id});
});

module.exports = routes;