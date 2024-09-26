const express = require('express');
const router = express.Router();
const Especie = require('../models/Especie'); // Ajusta la ruta según la ubicación de tu modelo

// Obtener todas las especies
router.get('/especies', async (req, res) => {
  const especies = await Especie.findAll();
  res.json(especies);
});

// Crear una nueva especie
router.post('/especies', async (req, res) => {
  const { descripcion, usuarioCreacion } = req.body;
  const nuevaEspecie = await Especie.create({ descripcion, usuarioCreacion });
  res.json(nuevaEspecie);
});

// Actualizar una especie
router.put('/especies/:id', async (req, res) => {
  const especie = await Especie.findByPk(req.params.id);
  if (especie) {
    await especie.update(req.body);
    res.json(especie);
  } else {
    res.status(404).json({ message: 'Especie no encontrada' });
  }
});

// Eliminar una especie
router.delete('/especies/:id', async (req, res) => {
  const especie = await Especie.findByPk(req.params.id);
  if (especie) {
    await especie.destroy();
    res.json({ message: 'Especie eliminada exitosamente' });
  } else {
    res.status(404).json({ message: 'Especie no encontrada' });
  }
});

module.exports = router;
