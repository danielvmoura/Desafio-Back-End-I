// tests/produtos.test.js

const request = require('supertest');
const app = require('../app'); // Caminho para o arquivo principal da sua aplicação

describe('Produtos Endpoints', () => {
  it('should get all products', async () => {
    const res = await request(app)
      .get('/produtos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/produtos')
      .send({
        nome: 'New Product',
        descricao: 'Product Description',
        preco: 100.00,
        data_atualizado: '2024-06-15 00:00:00'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should update a product', async () => {
    const res = await request(app)
      .put('/produtos')
      .send({
        id: 1,
        nome: 'Updated Product'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a product', async () => {
    const res = await request(app)
      .delete('/produtos/1');
    expect(res.statusCode).toEqual(200);
  });
});
