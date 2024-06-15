class UsuarioController {
  static async register(req, res) {
    // Lógica para registrar um novo usuário
    res.status(201).json({ message: "Usuário registrado com sucesso" });
  }

  static async login(req, res) {
    // Lógica para fazer login
    res.status(200).json({ message: "Login realizado com sucesso" });
  }

  static async getUserInfo(req, res) {
    // Lógica para obter informações do usuário autenticado
    res.status(200).json({ message: "Informações do usuário" });
  }
}

module.exports = UsuarioController;
