const express = require ("express");
const axios = require ("axios");
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    return res.json({
        message : "Hola puto"
    })
})
app.get('/github/:user', (req,res)=>{
    const {user} = req.params;
    axios
        .get(`https://api.github.com/users/${user}`)
        .then(function(response){
            res.json(response.data)
        })
});
app.get('/nasa',(req,res)=>{
    const {startDate,endDate} = req.query;
    const api_key = "4W9EMOSvWVS5iUdTghfHnWGzf2ZruOafH2NRApd7"
    axios
    .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${api_key}`)
    .then(function(response){
        res.json(response.data)
    })
});
app.get("/clima/:ciudad", async (req, res) => {
    let {ciudad} = req.params;
    let str = `http://api.weatherapi.com/v1/current.json?key=ec8a9f98a9e74f82bd613118233005&q=${ciudad}&aqi=no`;
    const response = await fetch(str)
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    res.status(200).send({
        jsonResponse
    })
});
app.get("/conversion",(req,res)=>{
    axios
    .get(`https://api.apis.net.pe/v1/tipo-cambio-sunat`)
    .then(function (response){
        res.json(response.data)
    })
});
app.get("/pokemones",(req,res)=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(function(response){
        res.json(response.data)
    })
});
app.get("/pokemon/:nombre",(req,res)=>{
    const {nombre} = req.params;
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(function(response){
        res.json(
            {
                abilities : response.data.abilities,
                namePokemon : response.data.name 
            }
        )
    })
})
app.get("/rickandmorty/personajes",(req,res)=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(function(response){
        res.json(response.data.results)
    })
});
app.get("/rickandmorty/buscar/:id",(req,res)=>{
    const {id} = req.params;
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function(response){
        res.json(response.data)
    })
});
app.get("/top10",(req,res)=>{
    axios
    .get(`https://thecocktaildb.com/api/json/v1/1/popular.php`)
    .then(function(response){
        res.json(response)
    })
});
app.get("/productos",(req,res)=>{
    axios
    .get(`https://fakestoreapi.com/products`)
    .then(function(response){
        res.json(response.data)
    })
});
app.get("/usuario",(req,res)=>{
    axios
    .get("https://randomuser.me/api/")
    .then(function(response){
        res.json(response.data)
    })
});
app.get("/marte",(req,res)=>{
    const api_key = "4W9EMOSvWVS5iUdTghfHnWGzf2ZruOafH2NRApd7"
    axios
    .get(`https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`)
    .then(function(response){
        res.json(response.data)
    })
});
app.listen(port,()=>{
    console.log("corriendo en el puerto 3000")
});