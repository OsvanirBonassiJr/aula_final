const test = require('tape');
const supertest = require('supertest');
const app = require('./app');

test('Teste API: Primeira letra Z', (t) => {
  supertest(app)
    .get('/string')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.assert(res.body.primeiraLetra === 'Z', 'A primeira letra é Z');
      t.end();
    });
});