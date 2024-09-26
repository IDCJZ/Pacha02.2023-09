const {Router}=require('express');
const querys=require('../querys');
const router=Router();
router.get('/', async(req,res)=>{
    const query= await querys.getAllMascotas();
    return res.status(200).json(query);
})
router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const query=await querys.getMascotasId(id);
    if(query.length === 0){
        return  res.status(400).json({messge: 'no encontrado'});
    }
    return res.status(200).json(query);
});
router.post('/',async(req,res)=>{
const {nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion}=req.body;
const query=await querys.createMascotas(nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion);
return res.status(202).json(query);
});
router.put('/',async(req,res)=>{
    const {id,nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion}= req.body;
    const query =await querys.updateMascotas(id,nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion);
    if (query===null){
        return res.status(400).json({message:'  no encontrado'});
    }
    return res.status(200).json({message:' registrada exitosa'});
})
module.exports=router;


