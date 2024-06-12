const request = require('supertest');
const app = require('../app');

describe('Clientes Endpoints', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/login')
      .send({ usuario: 'testuser', senha: 'testpassword' });
    token = res.body.token;
  });

  it('should fetch all clientes', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', token);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  // Add more tests for POST, PUT, DELETE
});
