const request = require('supertest');
const app = require('../app.js'); // Caminho para o arquivo principal da sua aplicação
require('dotenv').config();

jest.setTimeout(60000); // Tempo limite de 60 segundos


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
    console.log('Generated Token:', token); // Adicione isto para ver o token gerado

    // Verifique se o token foi gerado
    expect(token).toBeDefined();
  });

  it('should get all clients', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should create a new client', async () => {
    const res = await request(app)
      .post('/clientes')
      .set('Authorization', `Bearer ${token}`)
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
      .put('/clientes/1') // Certifique-se de que a rota está correta
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Updated Name'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a client', async () => {
    const res = await request(app)
      .delete('/clientes/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
});
