// clientes.js

const express = require('express');
const router = express.Router();
const cacheService = require('../services/cacheService'); // Importe o serviço de cache aqui

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');
const emailMiddleware = require('../middlewares/emailMiddleware');

// GET /clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await cacheService.consultarClientes(); // Use o serviço de cache aqui
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao consultar clientes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// PUT /clientes
router.put('/', clienteController.update);

// POST /clientes
router.post('/', nomeMiddleware.validateName, 
                  sobrenomeMiddleware.validateFamilyName,
                  idadeMiddleware.validateAge, 
                  emailMiddleware.validateEmail,
                  clienteController.save);

// DELETE /clientes/:id
router.delete('/:id', clienteController.remove);

module.exports = router;
