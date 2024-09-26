const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//      message: 'Bienvenido a mi api.',
// }));

app.get("/api/usuario", (req, res) => {
    if (arrUsuarios.length != 0)
        return res.status(200).send(arrUsuarios)
    else
        res.status(400).send({
            message: "no hay data"
        })
})

let arrUsuarios = [];

app.post("/api/usuario", (req, res) => {
    console.log(req.body);
    let objUsuario = req.body;
    if (objUsuario.usuario != undefined && objUsuario.password != undefined) {
        arrUsuarios.push(objUsuario);
        res.status(201).send({
            message: "Recurso creado correctamente"
        })
    }
    else {
        res.status(401).send({
            message: "Error, revisa tu programacion"
        })
    }
})

app.put("/api/usuario", (req, res) => {
    res.status(200).send({
        message: "Recurso modificado correctamente"
    })
})

app.patch("/usuario", (req, res) => {
    res.status(200).send({
        message: "Recurso modificado parcialmente"
    })
})

app.delete("/api/usuario", (req, res) => {
    res.status(200).send({
        message: "Recurso borrado correctamente"
    })
})

app.get("/api/clima", async (req, res) => {
    let ciudad = req.query.ciudad;
    let str = `http://api.weatherapi.com/v1/current.json?key=ec8a9f98a9e74f82bd613118233005&q=${ciudad}&aqi=no`;
    const response = await fetch(str)
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    res.status(200).send({
        jsonResponse
    })
})



const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;