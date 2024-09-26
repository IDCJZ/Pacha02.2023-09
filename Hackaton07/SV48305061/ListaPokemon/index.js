const express = require('express')
const app = express()
const port = 3000
const axios = require('axios').default;
app.use(express.static(__dirname + `/public`))
//app.get('/',  (req, res) =>{
//  res.send("hola ")})
app.get("/pokemon", (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(function (respont) {
    console.log(respont)
    res.json(respont)
  })

})
app.listen(port, () => {
  console.log(`ejemplo de app listen de port ${port}`)
})