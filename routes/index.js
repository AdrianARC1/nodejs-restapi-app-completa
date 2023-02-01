const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hola mundo xd");
});
router.get('/employees', function(req, res, next) {
  res.send("Obteniendo empleados");
});
router.post('/employees', function(req, res, next) {
  res.send("Añadiendo empleados");
});
router.put('/employees', function(req, res, next) {
  res.send("Actualizando empleados");
});
router.delete('/employees', function(req, res, next) {
  res.send("Eliminando empleados");
});


module.exports = router;
