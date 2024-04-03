var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');

/* GET produtos listing. */
router.get('/', produtoController.findAll);

/* PUT produtos listing. */
router.put('/', produtoController.update);

/* POST produtos listing. */
router.post('/', produtoController.save);

/* DELETE produtos listing. */
router.delete('/:id', produtoController.remove);

module.exports = router;
