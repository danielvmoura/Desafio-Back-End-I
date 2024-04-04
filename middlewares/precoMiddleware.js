const validatePrice = (request, response, next) => {
  const { body } = request;
  if (body.preco === undefined) {
    return response.status(400).json({ message: 'O campo "preco" é obrigatório' });
  }
  if (isNaN(body.preco) || body.preco <= 0) {
    return response.status(400).json({ message: 'O campo "preco" deve ser um número decimal positivo' });
  }
  next();
};

module.exports = { validatePrice };
