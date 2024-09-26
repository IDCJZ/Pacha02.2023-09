const express = require('express')
const app = express()

app.get('/usuarios', (req, res) =>{
    fetch(`https://randomuser.me/api/`)
    .then(res=>res.json())
    .then(json=>console.log(json))
})

app.listen(3000)