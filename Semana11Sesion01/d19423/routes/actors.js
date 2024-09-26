const {Router} = require("express");
const querys = require("../querys");

const router = Router();

router.get('/', async(req, res)=>{
    const filter = req.query;
    console.log(filter);
    if(!filter.filter){
        const query = await querys.getAllActors();
        return res.status(200).json(query);
    }
    else{
        const query = await querys.getAllActorsByFilter(filter);
        return res.status(200).json(query);
    }
    
})

router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const query = await querys.getActorById(id);
    if(query.length === 0){
       return res.status(400).json({nessage:'No se encuentra el actor'});
    }
    return res.status(200).json(query);
})


router.post('/', async(req,res)=>{
    const {first_name, last_name} = req.body;
    const query = await querys.createActor(first_name,last_name);
    return res.status(201).json(query);
});

router.put('/', async(req,res)=>{
    const {id, first_name, last_name} = req.body;
    const query = await querys.updateActor(id, first_name,last_name);
    if(query === null){
        res.status(400).json({message:"No se logro actualizar"});
    }
    else{
        res.status(200).json({message:"Actualizado con exito"});
    }
})

router.delete('/', async(req, res) =>{
    const {id, first_name, last_name} = req.body;
    const query = await querys.deleteActor(id);
    if(query === null){
        res.status(400).json({message:"No se logro borrar"});
    }
    else{
        res.status(200).json({message:"Borrado con exito"});
    }
})

module.exports = router;
