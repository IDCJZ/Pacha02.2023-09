const router = require('express').Router();
const productos = require('../models/productos.models');


router.get('/productos',async(req,res)=>{
    try {
        const ReadAllProductos=await productos.findAll()
        res.status(200).json(ReadAllProductos)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'error obtenido de productos'})
    }
});

router.post('/',async(req,res)=>{
    try {
        const {nombre,precio,imagen}=req.body;
        const CreateProductos=await productos.create({nombre,precio,imagen})
        res.status(200).json(CreateProductos)
    } catch (error) {
       console.error(error);
       res.status(500).json({error:'error al agregar el producto'}) 
    }
});
router.get('/:id',async(req,res)=>{
    try{
    const productoId=req.params.id;
    const ReadIdProductos=await productos.findByPk(productoId);
    if (!ReadIdProductos) {
        return res.status(404).json({error:'producto no encontrado'})
    }
    res.status(200).json(ReadIdProductos);
}catch(error){
    res.status(500).json({error:'error al obtener el producto'})
}
});
router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {nombre,precio,imagen,estado}=req.body;
    try {
        const ReadIdProductos=await productos.findByPk(id);
        if (!ReadIdProductos) {
            return res.status(404).json({message:'producto no encontrado'})
        }
        ReadIdProductos.nombre=nombre;
        ReadIdProductos.precio=precio;
        ReadIdProductos.imagen=imagen;
        await ReadIdProductos.save();
        res.status(200).json(ReadIdProductos);
    } catch (error) {
        console.error('error al actualizar el producto');
        res.status(500).json({message:'error del servidor'})
    }
});

module.exports=router;