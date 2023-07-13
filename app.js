
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'funcionando'}));

// GET /aplicardesconto
router.get('/string', (req, res) => {
    var string = 'cero um dois três'
    const primeiraLetra = string.charAt(0);
    //const valor = parseInt(req.params.valor)
    //const desconto = parseInt(req.params.desconto)
    res.json ({string: 'Zero um dois trÊs', primeiraLetra: primeiraLetra})
})


app.use('/', router)

if(require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app