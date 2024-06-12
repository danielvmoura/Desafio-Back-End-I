// controllers/authController.js

const jwt = require('jsonwebtoken');
const pool = require('../configs/database');

const login = async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha]);
    if (rows.length > 0) {
      const user = rows[0];
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      await pool.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, user.id]);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Usuário ou senha inválidos.' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const logout = async (req, res) => {
  const { usuario } = req.body;

  try {
    await pool.query('UPDATE usuarios SET token = NULL WHERE usuario = ?', [usuario]);
    res.json({ message: 'Logout bem-sucedido.' });
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  login,
  logout
};
