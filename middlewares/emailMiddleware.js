const validateEmail = (request, response, next) => {
  const { body } = request;
  if (body.email === undefined) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!isValidEmail(body.email)) {
    return response.status(400).json({ message: 'O campo "email" deve ser um email válido' });
  }
  next();
};

// Função auxiliar para validar o formato do email
function isValidEmail(email) {
  // Utilizando uma expressão regular para validar o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = { validateEmail };
