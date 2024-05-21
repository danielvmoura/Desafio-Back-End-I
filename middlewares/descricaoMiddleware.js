// descricaoMiddleware.js

const validateDescription = (request, response, next) => {
  const { body } = request;
  if (body.descricao === undefined) {
    return response.status(400).json({ message: 'O campo "descricao" é obrigatório' });
  }
  if (body.descricao.length > 255) {
    return response.status(400).json({ message: 'O campo "descricao" não pode ter mais de 255 caracteres' });
  }
  next();
};

module.exports = { validateDescription };
