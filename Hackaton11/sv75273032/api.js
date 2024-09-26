const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Consulta para SELECT (Obtener todas las mascotas)
app.get('/mascotas', (req, res) => {
    // Lógica para obtener todas las mascotas de la base de datos
    res.json({ message: 'Obtener todas las mascotas' });
});

// Consulta para INSERT (Agregar una nueva mascota)
app.post('/mascotas', (req, res) => {
    // Lógica para agregar una nueva mascota a la base de datos
    res.json({ message: 'Agregar una nueva mascota' });
});

// Consulta para UPDATE (Actualizar información de una mascota por ID)
app.put('/mascotas/:id', (req, res) => {
    const mascotaId = req.params.id;
    // Lógica para actualizar información de la mascota con el ID proporcionado
    res.json({ message: `Actualizar información de la mascota con ID ${mascotaId}` });
});

// Consulta para DELETE (Eliminar una mascota por ID)
app.delete('/mascotas/:id', (req, res) => {
    const mascotaId = req.params.id;
    // Lógica para eliminar la mascota con el ID proporcionado
    res.json({ message: `Eliminar la mascota con ID ${mascotaId}` });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
