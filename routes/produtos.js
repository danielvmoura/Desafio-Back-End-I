var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');
const data_atualizadoMiddleware = require('../middlewares/data_atualizadoMiddleware')

/* GET produtos listing. */
router.get('/', nomeMiddleware.validateName,
                precoMiddleware.validatePrice,
                descricaoMiddleware.validateDescription,
                data_atualizadoMiddleware.validateUpdatedDate,
                produtoController.findAll);

/* PUT produtos listing. */
router.put('/', nomeMiddleware.validateName,
                precoMiddleware.validatePrice,
                descricaoMiddleware.validateDescription,
                data_atualizadoMiddleware.validateUpdatedDate,
                produtoController.update);

/* POST produtos listing. */
router.post('/',  nomeMiddleware.validateName,
                  precoMiddleware.validatePrice,
                  descricaoMiddleware.validateDescription,
                  data_atualizadoMiddleware.validateUpdatedDate,
                  produtoController.save);

/* DELETE produtos listing. */
router.delete('/:id', nomeMiddleware.validateName,
                      precoMiddleware.validatePrice,
                      descricaoMiddleware.validateDescription,
                      data_atualizadoMiddleware.validateUpdatedDate,
                      produtoController.remove);

module.exports = router;
