const express = require('express');
const Especie = require('../models/especie');

const router = express.Router();

// Create a new user
router.post('/especie', async (req, res) => {
  const { descripcion, activo } = req.body;

  try {
    const especie = new Especie({ descripcion,activo });
    await especie.save();
    res.send(especie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/especie', async (req, res) => {
    try {
      const especies = await Especie.find({});
      res.send(especies);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  router.get('/users/:nombre', async (req, res) => {
    const { nombre } = req.params;
    try {
      const users = await User.find({name:nombre});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Update a user
router.put('/especie/:id', async (req, res) => {
    const { id } = req.params;
    const { descripcion,activo } = req.body;
  
    try {
      const especie = await Especie.findByIdAndUpdate(id, { descripcion,activo }, { new: true });
      res.send(especie);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Delete a user
router.delete('/especie/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const especie = await Especie.findByIdAndDelete(id);
      res.send(especie);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
module.exports = router;