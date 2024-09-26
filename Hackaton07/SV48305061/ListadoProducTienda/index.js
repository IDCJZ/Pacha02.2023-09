const express = require('express')
const app = express()
const axios = require(`axios`).default
app.get(`/listadoproductienda`, (req, res) => {
    fetch('https://fakestoreapi.com/products')
        .then(res =>res.json())
        .then(json => console.log(json))
})


app.listen(3000)