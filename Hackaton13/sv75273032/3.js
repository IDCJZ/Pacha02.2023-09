const express = require('express');
const router = express.Router();

// CRUD de cursos
router.get('/', (req, res) => {
  // Retorna la lista de cursos
  res.json(database.courses);
});

router.post('/', (req, res) => {
  // Implementa la lógica para crear un curso
  // Retorna un mensaje de éxito o error
  res.json({ message: 'Course created successfully' });
});

// Implementa las rutas y funciones para actualizar y eliminar cursos

module.exports = router;
