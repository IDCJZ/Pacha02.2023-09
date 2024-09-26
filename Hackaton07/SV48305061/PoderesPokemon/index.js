const express = require('express')
const app = express()
app.get(`/pokemons`,(req,res)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res=>res.json( ))
    .then(json=>console.log(json))
})


app.listen(3000)