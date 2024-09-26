const express = require('express')
const app = express()
app.get(`/dpeliculas`,(req,res)=>{
  fetch('https://api.themoviedb.org/3/movie/550?api_key=e57b4d88de1867256b3d95c34f93ef3b')
    .then(res => res.json())
    .then(json => console.log(json))

})
app.listen(3000)