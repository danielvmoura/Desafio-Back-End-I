var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');

/* GET clientes listing. */
router.get('/', clienteController.findAll);

/* PUT clientes listing. */
router.put('/', clienteController.update);

/* POST clientes listing. */
router.post('/', clienteController.save);

/* DELETE clientes listing. */
router.delete('/', clienteController.remove);

module.exports = router;
