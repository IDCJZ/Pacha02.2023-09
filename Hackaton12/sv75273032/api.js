const express = require('express');
const app = express();
const especieRoutes = require('./routes/especie'); // Ajusta la ruta según la ubicación de tus rutas

app.use(express.json());
app.use('/api', especieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});