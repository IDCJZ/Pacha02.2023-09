const { Router } = require("express");
const querys = require("../querys");

const router = Router();

router.get('/', async (req, res) => {

    const query = await querys.getAllEspecies();
    return res.status(200).json(query);

})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const query = await querys.getEspecieById(id);
    if (query.length === 0) {
        return res.status(400).json({ nessage: 'No se encuentra la especie' });
    }
    return res.status(200).json(query);
})


router.post('/', async (req, res) => {
    const { descripcion, usuario } = req.body;
    const query = await querys.createEspecie(descripcion, usuario);
    return res.status(201).json({mensaje:"Creado Correctamente"});
});

router.put('/', async (req, res) => {
    const { id, descripcion, usuario } = req.body;
    const query = await querys.updateEspecie(id, descripcion, usuario);
    if (query === null) {
        res.status(400).json({ message: "No se logro actualizar" });
    }
    else {
        res.status(200).json({ message: "Actualizado con exito" });
    }
})

router.delete('/', async (req, res) => {
    const { id, usuario } = req.body;
    const query = await querys.deleteEspecie(id, usuario);
    if (query === null) {
        res.status(400).json({ message: "No se logro borrar" });
    }
    else {
        res.status(200).json({ message: "Borrado con exito" });
    }
})

module.exports = router;
