const express = require('express');
const peliculas = require("./routes/peliculas");

const app = express();


app.use(express.json());

const PORT = 8080;

app.use('/peliculas', peliculas);

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});