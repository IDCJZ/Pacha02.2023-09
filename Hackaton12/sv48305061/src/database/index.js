const mongoose = require('mongoose');
// Reemplaza la URL de conexión con la tuya
const url = "mongodb://localhost:27017/veterinaria";

// Crea una función asincrónica para conectarte a la base de datos
async function connectDB() {
  try {
    // Establece la conexión usando el método connect
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Muestra un mensaje de éxito si la conexión es exitosa
    console.log("Conectado a la base de datos MongoDB");
  } catch (error) {
    // Muestra un mensaje de error si ocurre algún problema
    console.error("Error al conectarse a la base de datos MongoDB", error);
  }
}

// Llama a la función para conectarte a la base de datos
connectDB();