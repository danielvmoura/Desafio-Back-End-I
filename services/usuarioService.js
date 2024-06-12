const db = require('../configs/dbConfiguration'); // Ajuste conforme sua configuração de banco de dados

const authenticate = async (usuario, senha) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha]);
  return rows[0];
};

const saveToken = async (userId, token) => {
  await db.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, userId]);
};

const invalidateToken = async (token) => {
  await db.query('UPDATE usuarios SET token = NULL WHERE token = ?', [token]);
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  authenticate,
  saveToken,
  invalidateToken,
  getUserById,
};
