
const test = require('tape')
const supertest = require('supertest')
const app = require('./app')

test('Verificar se o percentual é 30%', (t) =>{
    supertest(app)
    .get('/aplicarpercentual/100/0.3')
    .expect('content-Type', /json/)
    .expect(200)
    .end((err, res) =>{
        t.assert(res.body.aplicarPercentual === 30, 'Percentual correto')
        t.end()
    })
})