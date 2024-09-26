const express = require('express');
const Nacionalidad = require('../models/nacionalidad');

const router = express.Router();

// Create a new user
router.post('/nacionalidad', async (req, res) => {
  const { descripcion, activo } = req.body;

  try {
    const nacionalidad = new Nacionalidad({ descripcion,activo });
    await nacionalidad.save();
    res.send(nacionalidad);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/nacionalidad', async (req, res) => {
    try {
      const nacionalidades = await Nacionalidad.find({});
      res.send(nacionalidades);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  router.get('/nacionalidad/:descripcion', async (req, res) => {
    const { descripcion } = req.params;
    try {
      const nacionalidades = await Nacionalidad.find({descripcion:descripcion});
      res.send(nacionalidades);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Update a user
router.put('/nacionalidad/:id', async (req, res) => {
    const { id } = req.params;
    const { descripcion,activo } = req.body;
  
    try {
      const nacionalidad = await Nacionalidad.findByIdAndUpdate(id, { descripcion,activo }, { new: true });
      res.send(nacionalidad);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Delete a user
router.delete('/nacionalidad/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const nacionalidad = await Nacionalidad.findByIdAndDelete(id);
      res.send(nacionalidad);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
module.exports = router;