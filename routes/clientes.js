const express = require('express');
const router = express.Router();
const cacheService = require('../services/cacheService'); // Importe o serviço de cache aqui
const verifyToken = require('../middlewares/authMiddleware'); // Middleware de autenticação
const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');
const emailMiddleware = require('../middlewares/emailMiddleware');

// GET /clientes
router.get('/', verifyToken, async (req, res) => { // Adicione verifyToken
  try {
    const clientes = await cacheService.consultarClientes(); // Use o serviço de cache aqui
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao consultar clientes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// PUT /clientes
router.put('/', verifyToken, clienteController.update); // Adicione verifyToken

// POST /clientes
router.post('/', verifyToken, nomeMiddleware.validateName, 
                  sobrenomeMiddleware.validateFamilyName,
                  idadeMiddleware.validateAge, 
                  emailMiddleware.validateEmail,
                  clienteController.save); // Adicione verifyToken

// DELETE /clientes/:id
router.delete('/:id', verifyToken, clienteController.remove); // Adicione verifyToken

module.exports = router;
