const express = require('express')
const app = express()
app.get(`/marte`,(req,res)=>{
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=cl4Sz1XgJ5Z59Rz0ZlYkIEHFFH0uj8ALV2fytcJg')
    .then(res => res.json())
    .then(json => console.log(json))

})
app.listen(3000)