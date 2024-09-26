const express = require('express')
const app = express()
const axios=require('axios').default;
app.get(`/BebidasyCocteles`, (req,res)=>{
    axios.get(` www.thecocktaildb.com/api/json/v1/1/random.php`).then(function(respont){
        console.log(respont);
        res.json(respont,data);
    })
})
app.listen(3000)