const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const UsuarioController = require('../controllers/usuarioController');

// Rota para registrar um novo usuário
router.post('/register', UsuarioController.register);

// Rota para fazer login
router.post('/login', UsuarioController.login);

// Rota protegida para obter informações do usuário autenticado
router.get('/info', verifyToken, UsuarioController.getUserInfo);

module.exports = router;
