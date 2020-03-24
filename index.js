const express = require("express");
const app = express();

/*
    Rota / Recurso
    Metodos HTTP: 
    1- GET: Buscar uma informação do back-end
    2- POST: criar uma informação no back-end
    3- PUT: alterar uma informação no back-end
    4- DELETE: Deletar uma informação do back-end
*/

app.get('/', (req,res) =>
{
    return res.send("Alo");
});

app.get('/users', (req,res) =>
{
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Sarri'
    });
});

app.listen(3333);