const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware'); // Middleware de autenticação
const UsuarioController = require('../controllers/usuarioController'); // Importe o controller de usuário

// Rota para registrar um novo usuário
router.post('/register', UsuarioController.register);

// Rota para fazer login
router.post('/login', UsuarioController.login);

// Rota protegida para obter informações do usuário autenticado
router.get('/info', verifyToken, UsuarioController.getUserInfo);

// Rota para atualizar informações do usuário autenticado
router.put('/update', verifyToken, UsuarioController.updateUserInfo);

// Rota para excluir o usuário autenticado
router.delete('/delete', verifyToken, UsuarioController.deleteUser);

module.exports = router;
