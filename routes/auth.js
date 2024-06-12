const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userService = require('../services/usuarioService');
const authController = require('../controllers/authController');

router.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;
  const user = await userService.authenticate(usuario, senha);
  if (user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    await userService.saveToken(user.id, token);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

router.post('/logout', async (req, res) => {
  const { token } = req.body;
  await userService.invalidateToken(token);
  res.json({ message: 'Logout realizado com sucesso' });
});

module.exports = router;
