const express = require('express')
const app = express()
const host = 'api.frankfurter.app';
app.get(`/dolar`,(req,res)=>{
    fetch(`https://data.fixer.io/api/latest`)
    .then(resp => resp.json())
    .then(json=>console.log(json))

    });




app.listen(3000)