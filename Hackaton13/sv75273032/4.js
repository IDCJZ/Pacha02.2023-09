const express = require('express');
const router = express.Router();

// CRUD de órdenes de compra
router.get('/', (req, res) => {
  // Retorna la lista de órdenes de compra
  res.json(database.orders);
});

router.post('/', (req, res) => {
  // Implementa la lógica para crear una orden de compra
  // Retorna un mensaje de éxito o error
  res.json({ message: 'Order created successfully' });
});

module.exports = router;
