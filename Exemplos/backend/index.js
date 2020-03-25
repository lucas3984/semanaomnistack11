const express = require('express'); /* importando express pra variavel */ 

const app = express();

app.get('/' , (request, response) =>{ /* '/' é a rota raiz */
    /*return response.send('Hello Word') */
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Exemplo'
    })

}) 

app.listen(3333)
