const express = require('express');
const UserController = require('./controllers/UserController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');
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

routes.post('/sessions',SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/incidents', IncidentsController.index);
routes.get('/incidents/slist', IncidentsController.list);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;