var express = require('express');
var router = express.Router();

/* GET clientes listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource GET');
});

/* PUT clientes listing. */
router.put('/', function(req, res, next) {
  res.send('respond with a resource PUT');
});

/* POST clientes listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource POST');
});

/* DELETE clientes listing. */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource DELETE');
});

module.exports = router;
