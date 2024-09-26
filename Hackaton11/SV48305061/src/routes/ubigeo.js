const {Router}=require('express');
const querys=require('../querys');
const router=Router();
router.get('/',async(req,res)=>{
    const query= await querys.getAllUbigeo();
    return res.status(200).json(query);
});
router.get('/:ubigeo',async(req,res)=>{
    const {ubigeo} = req.params;
    const query=await querys.getUbigeoId(ubigeo);
    if(query.length === 0){
        return  res.status(400).json({messge: 'no encontrado'});
    }
    return res.status(200).json(query);
});

router.post('/',async(req,res)=>{
const {ubigeo,ubicacion,activo,usuariocreacion}=req.body;
const query=await querys.createUbigeo(ubigeo,ubicacion,activo,usuariocreacion);
return res.status(202).json(query);
});

router.put('/',async(req,res)=>{
    const {ubigeo,ubicacion,activo,usuariocreacion}= req.body;
    const query =await querys.updateUbigeo(ubigeo,ubicacion,activo,usuariocreacion);
    if (query===null){
        return res.status(400).json({message:'ubigeo no encontrado'});
    }
    return res.status(200).json({message:'ubigeo registrada exitosa'});
});

module.exports=router;
