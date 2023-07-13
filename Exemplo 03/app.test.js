
const test = require('tape')
const supertest = require('supertest')
const app = require('./app')

test('Verificar se o percentual do estado de São Paulo está correto', (t) =>{
    supertest(app)
    .get('/percentualSaopaulo/12')
    .expect('content-Type', /json/)
    .expect(200)
    .end((err, res) =>{
        t.assert(res.body.percentualSaopaulo === 12, 'Percentual correto')
        t.end()
    })
})

