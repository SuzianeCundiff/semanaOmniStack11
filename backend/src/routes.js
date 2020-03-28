const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();
 
//Listagem das ONGs cadastradas no BD.
routes.get('/ongs', ongController.index);
//Cadastro de uma ONG no BD.
routes.post('/ongs', ongController.create); //primeiro parâmetro recebe a rota raiz, e o segundo, recebe uma função.

//Listagem dos Casos cadastrados.
routes.get('/incidents', incidentController.index);
//Cadastro de um Caso
routes.post('/incidents', incidentController.create);
//Exclusão de um caso
routes.delete('/incidents/:id',incidentController.delete);

//Listagem dos Casos cadastrados específicos de cada ong.
routes.get('/profile', profileController.index);

//Cria uma sessão/faz um Login
routes.post('/sessions', sessionController.create);


module.exports = routes; //exporta uma variável dentro de um arquivo