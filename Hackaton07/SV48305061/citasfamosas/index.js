const express = require('express')
const app = express()
const axios=require(`axios`).default;
app.get(`/citas`,(req,res)=>{
    axios.get('https://quotes.rest/qod?language=en').then(function(respont){
        console.log(respont);
        res.json(respont);
    })
})

app.listen(3000)