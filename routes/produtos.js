var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const precoMiddleware = require('../middlewares/precoMiddleware');
const descricaoMiddleware = require('../middlewares/descricaoMiddleware');

/* GET produtos listing. */
router.get('/', produtoController.findAll);

/* PUT produtos listing. */
router.put('/', produtoController.update);

/* POST produtos listing. */
router.post('/',  nomeMiddleware.validateName,
                  precoMiddleware.validatePrice,
                  descricaoMiddleware.validateDescription,
                  produtoController.save);

/* DELETE produtos listing. */
router.delete('/:id', produtoController.remove);

module.exports = router;
