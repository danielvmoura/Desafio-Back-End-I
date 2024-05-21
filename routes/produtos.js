// produtos.js

const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');

// GET /produtos
router.get('/', produtoController.findAll);

// PUT /produtos
router.put('/', produtoController.update);

// POST /produtos
router.post('/',  nomeMiddleware.validateName,
                  precoMiddleware.validatePrice,
                  descricaoMiddleware.validateDescription,
                  produtoController.save);

// DELETE /produtos/:id
router.delete('/:id', produtoController.remove);

module.exports = router;
