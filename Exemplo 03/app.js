
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'funcionando'}));

// GET /aplicardesconto
router.get('/percentualSaopaulo/:percentual', (req, res) => {
    const percentual = parseFloat(req.params.percentual);
  
    res.json({ percentualSaopaulo: percentual });
})

app.use('/', router)

if(require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app