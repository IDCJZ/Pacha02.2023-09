const express = require('express')
const app = express()
const axios = require(`axios`).default;

app.get(`/PersonajesRyM`, (req, res) => {
    fetch('https://rickandmortyapi.com/api/character/2')
        .then(res =>res.json())
        .then(json => console.log(json))
})


app.listen(3000)