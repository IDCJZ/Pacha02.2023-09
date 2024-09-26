const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Conectar a MongoDB (asegúrate de tener MongoDB en ejecución)
mongoose.connect('mongodb://localhost:27017/chat', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el esquema del mensaje
const mensajeSchema = new mongoose.Schema({
  usuario: String,
  mensaje: String,
});

// Crear el modelo de mensaje
const Mensaje = mongoose.model('Mensaje', mensajeSchema);

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Obtener mensajes desde la base de datos
app.get('/get_messages', async (req, res) => {
  try {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes.' });
  }
});

// Enviar mensaje a la base de datos
app.post('/enviar', async (req, res) => {
  const { usuario, mensaje } = req.body;

  try {
    const nuevoMensaje = new Mensaje({ usuario, mensaje });
    await nuevoMensaje.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
});

// Borrar historial de mensajes en la base de datos
app.post('/borrar_historial', async (req, res) => {
  try {
    await Mensaje.deleteMany({});
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el historial.' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
