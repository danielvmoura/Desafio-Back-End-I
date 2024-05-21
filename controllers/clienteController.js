// clienteController.js

const cache = require('../configs/cache');
const clienteService = require('../services/clienteService');

const findAll = async (request, response) => {
  const cachedData = cache.get('clientes');
  if (cachedData) {
    console.log('Servindo do cache'); // Log indicando que os dados estão sendo servidos do cache
    return response.status(200).json(cachedData);
  } else {
    console.log('Servindo do banco de dados'); // Log indicando que os dados estão sendo buscados do banco de dados
    const clientes = await clienteService.findAll();
    cache.set('clientes', clientes);
    return response.status(200).json(clientes);
  }
};

const save = async (request, response) => {
  const result = await clienteService.save(request.body);
  if (result) {
    cache.del('clientes'); // Invalida o cache
    console.log('Cache de clientes invalidado'); // Log indicando que o cache foi invalidado
    return response.status(200).json();
  } else {
    return response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar cliente" });
  }
};

const update = async (request, response) => {
  const result = await clienteService.update(request.body);
  if (result) {
    cache.del('clientes'); // Invalida o cache
    console.log('Cache de clientes invalidado'); // Log indicando que o cache foi invalidado
    return response.status(200).json();
  } else {
    return response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar cliente" });
  }
};

const remove = async (request, response) => {
  const { id } = request.params;
  const result = await clienteService.remove(id);
  if (result) {
    cache.del('clientes'); // Invalida o cache
    console.log('Cache de clientes invalidado'); // Log indicando que o cache foi invalidado
    return response.status(200).json();
  } else {
    return response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover cliente" });
  }
};

module.exports = {
  findAll,
  save,
  remove,
  update
};
