const express = require('express');

const especie = require("./routes/especie");

const app = express();


app.use(express.json());

const PORT = 8080;

app.use('/especie', especie);

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});