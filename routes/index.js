// index.js

const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'DanielVMoura',
      password: 'Dm31032003@',
      database: 'desafio',
      port: 3307
    });

    const result = await connection.query('SELECT * FROM clientes, produtos;');
    res.send(result[0]);
  } catch (error) {
    console.error('Erro ao consultar dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
