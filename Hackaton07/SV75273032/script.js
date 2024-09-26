const express = require('express');
const app = express();
const axios = require('axios');

// Configura el puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

// Rutas para consultar las API's
// Aquí agregarás rutas para cada API mencionada en tu problema.

// Ejemplo de ruta para consultar los datos de GitHub de un usuario específico
app.get('/github/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar GitHub API' });
  }
});

// Agrega más rutas para las demás API's

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
}); 