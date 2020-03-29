const express = require('express'); /* importando express pra variavel */ 
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors({

}))
/* npm install nodemon -D, para instalar somente para desenvolvimento*/-
app.use(express.json()); /* converte o json que recebe em js */
app.use(routes);
app.listen(3333)
/*
    rota / recurso
*/
/*
    Métodos HTTP

    GET: Buscar uma informacao do back-end
    POST: Criar  uma informcao no back-end
    PUT: Alterar uma informacao no bacl-end
    DELETE: Deletar uma informacao no back-end
*/
/**
 * Tipo de parametros
 * 
 * Query params: parametos nomeados enviados na rota apos "?" (filtros, paginacao)
 * route params: Paraetros utiliados para identidicar recursos ":"  
 * Request Body: corpo da requisiçao, utiliado para criar ou alterar recursos
 */

 /**
  * SQL : mySQL, SQLite, PostgreSQL, Oracle
  * NoSQL: MOngoDB, CouchDB 
  * 
  * query builder: knex
  * npm install knex
  * np, install sqlite3
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('user').select('*')._
  */

