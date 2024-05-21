// cacheService.js

const cache = require('../middlewares/cacheMiddleware');
const clienteService = require('../services/clienteService');

const consultarClientes = async () => {
  const cacheKey = 'clientes';
  const cacheData = cache.get(cacheKey);

  if (cacheData) {
    console.log('Dados obtidos da cache:', cacheData); // Log de consulta de cache
    return cacheData;
  } else {
    console.log('Dados não encontrados na cache. Consultando banco de dados...');
    const dadosDoBanco = await clienteService.findAll();
    cache.set(cacheKey, dadosDoBanco);
    console.log('Dados salvos na cache:', dadosDoBanco); // Log de atualização de cache
    return dadosDoBanco;
  }
};

module.exports = { consultarClientes };
