var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function (req, res, next) {
 mysql.createConnection({host: 'localhost',user: 'DanielVMoura',password: 'Dm31032003@',
 database: 'desafio',port: 3307
 }).then((connection) => {connection.query('SELECT * FROM clientes, produtos;')
 .then((result) => {res.send(result[0]);});
 });
});

module.exports = router;
