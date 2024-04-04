const validateUpdatedDate = (request, response, next) => {
  const { body } = request;
  if (body.data_atualizada === undefined) {
    return response.status(400).json({ message: 'O campo "data_atualizada" é obrigatório' });
  }
  const isValidDate = isValidDateTime(body.data_atualizada);
  if (!isValidDate) {
    return response.status(400).json({ message: 'O campo "data_atualizada" deve estar no formato DATETIME válido' });
  }
  next();
};

// Função auxiliar para validar o formato de DATETIME
function isValidDateTime(dateTimeString) {
  // Utilizando uma expressão regular para validar o formato DATETIME (YYYY-MM-DD HH:mm:ss)
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  return dateTimeRegex.test(dateTimeString);
}

module.exports = { validateUpdatedDate };
