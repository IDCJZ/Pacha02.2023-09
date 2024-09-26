const {Router}=require('express');
const querys=require('../querys');
const router=Router();
router.get('/', async (req,res)=>{
    const query =await querys.getAllEspecies();
    return res.status(200).json(query);
});
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const query=await querys.getEspecieId(id);
    if(query.length === 0){
        return  res.status(400).json({messge: 'no encontrado'});
    }
    return res.status(200).json(query);
});
router.post('/',async(req,res)=>{
const {descripcion,activo,usuariocreacion}=req.body;
const query=await querys.createEspecie(descripcion,activo,usuariocreacion);
return res.status(202).json(query);
});
router.put('/',async(req,res)=>{
    const {id,descripcion,activo,usuariocreacion}= req.body;
    const query =await querys.updateEspecie(id,descripcion,activo,usuariocreacion);
    if (query===null){
        return res.status(400).json({message:'especie no encontrado'});
    }
    return res.status(200).json({message:'especie registrada exitosa'});
})
module.exports=router;