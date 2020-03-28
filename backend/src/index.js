const express = require('express'); //importa o módulo express para dentro da variável express. Ou seja, a variável passa a conter todas as funcionalidades do módulo express.
const cors = require('cors');//determina quem podera acessar a aplicação
const routes = require('./routes'); //importa a variável dentro do arquivo routes.js.

const app = express(); //variável que armazena a aplicação. Isso significa que ela armazena as rotas e todas as outras funcionalidades.

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar informação no back-end
 * POST: Cria informação no back-end
 * PULL: Altera informação no back-end
 * DELETE: Deleta informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros Nomeados enviados na rota após "?", geralmente eles servem como filtros e/ou páginação na busca/listagem de elemento(s).
  * Route Params: Parâmetros utilizados para identificar recursos.
  * Request Body: É o corpo da requisição, utilizado para criar ou alterar recursos.
  * 
  */

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);