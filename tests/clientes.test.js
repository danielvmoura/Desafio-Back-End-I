// tests/clientes.test.js

const request = require('supertest');
const app = require('../app'); // Caminho para o arquivo principal da sua aplicação

describe('Clientes Endpoints', () => {
  let token;

  beforeAll(async () => {
    // Login para obter o token JWT
    const response = await request(app)
      .post('/auth/login')
      .send({
        usuario: 'danielvmoura',
        senha: 'dm31032003'
      });

    token = response.body.token;
  });

  it('should get all clients', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should create a new client', async () => {
    const res = await request(app)
      .post('/clientes')
      .set('Authorization', token)
      .send({
        nome: 'Test',
        sobrenome: 'User',
        email: 'testuser@example.com',
        idade: 30
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should update a client', async () => {
    const res = await request(app)
      .put('/clientes')
      .set('Authorization', token)
      .send({
        id: 1,
        nome: 'Updated Name'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a client', async () => {
    const res = await request(app)
      .delete('/clientes/1')
      .set('Authorization', token);
    expect(res.statusCode).toEqual(200);
  });
});
