const jwt = require('jsonwebtoken');
const userService = require('../services/usuarioService');

const handleTokenMissing = (res) => {
  return res.status(403).json({ message: 'Token não fornecido' });
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return handleTokenMissing(res);
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return handleTokenMissing(res);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);

    if (!user || user.token !== token) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Erro na verificação do token:', err);
    return res.status(403).json({ message: 'Token inválido' });
  }
};

module.exports = verifyToken;
