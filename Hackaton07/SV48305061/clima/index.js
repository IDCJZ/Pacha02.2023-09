const express = require('express')
const app = express()
const port = 3000
const axios = require('axios').default;
app.get(`/clima`, (req, res) => {
  axios.get(`http://api.weatherapi.com/v1/current.json?key=ec8a9f98a9e74f82bd613118233005&q=lima&aqi=no`).then(function (respont) {
    console.log(respont)
    res.json(respont.data)
  })
})
app.listen(port, () => {
  console.log(`ejemplo de app listen de port ${port}`)
})