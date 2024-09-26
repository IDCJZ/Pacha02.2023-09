const { Router } = require("express");
const querys = require("../querys");

const router = Router();

router.get('/', async (req, res) => {
    const query = await querys.getAllPeliculas();
    return res.status(200).json(query);

})

router.get('/:titulo', async (req, res) => {
    const { titulo } = req.params;
    const query = await querys.getAllPeliculasByTitulo(titulo);
    if (query.length === 0) {
        return res.status(400).json({ nessage: 'No se encuentra la especie' });
    }
    return res.status(200).json(query);
})


router.post('/', async (req, res) => {
    const data = req.body;
    const query = await querys.createPelicula(data);
    return res.status(201).json({mensaje:"Creado Correctamente con el id: "+ query});
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
