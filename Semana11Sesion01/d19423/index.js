const express = require('express');
const actors = require("./routes/actors");

const app = express();


app.use(express.json());

const PORT = 8080;

app.use('/actors', actors);

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});