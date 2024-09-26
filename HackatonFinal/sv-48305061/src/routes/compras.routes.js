const router = require('express').Router();
const compras = require('../models/compras.models');
router.get('/',async(req,res)=>{
    try {
        const ReadAllCompras=await compras.findAll()
        res.status(200).json(ReadAllCompras)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'error obtenido de compras'})
    }
});

module.exports=router;