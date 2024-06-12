const jwt = require('jsonwebtoken');
const userService = require('../services/usuarioService');

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
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
    return res.status(403).json({ message: 'Token inválido' });
  }
};

module.exports = verifyToken;
