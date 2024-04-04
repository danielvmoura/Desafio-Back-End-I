var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');
const emailMiddleware = require('../middlewares/emailMiddleware')

/* GET clientes listing. */
router.get('/', clienteController.findAll);

/* PUT clientes listing. */
router.put('/',  clienteController.update);

/* POST clientes listing. */
router.post('/',  nomeMiddleware.validateName, 
                  sobrenomeMiddleware.validateFamilyName,
                  idadeMiddleware.validateAge, 
                  emailMiddleware.validateEmail,
                  clienteController.save);

/* DELETE clientes listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;
