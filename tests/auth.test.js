// tests/auth.test.js

const request = require('supertest');
const app = require('../app'); // Caminho para o arquivo principal da sua aplicação

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        usuario: 'newuser',
        senha: 'password'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        usuario: 'newuser',
        senha: 'password'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should logout a user', async () => {
    const loginRes = await request(app)
      .post('/auth/login')
      .send({
        usuario: 'newuser',
        senha: 'password'
      });

    const token = loginRes.body.token;

    const logoutRes = await request(app)
      .post('/auth/logout')
      .set('Authorization', token);
    expect(logoutRes.statusCode).toEqual(200);
  });
});
