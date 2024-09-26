const express = require('express')
const app = express()
const axios=require('axios').default;
app.get(`/github`, (req,res)=>{
  axios.get(`https://api.github.com/users/Arango-junior`).then(function(respont){
    console.log(respont);
    res.json(respont.data);
  })
})
app.listen(3000)