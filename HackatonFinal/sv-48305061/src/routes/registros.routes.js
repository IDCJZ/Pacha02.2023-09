const router = require('express').Router();
const bcrypt = require('bcrypt');
const usuarios = require('../models/usuarios.models');



router.post('/', async (req, res) => {
    const { idemail, nombre, apellido, password } = req.body;
    if (idemail && nombre && apellido && password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        try {
            const CreateUsuarioss = await usuarios.create({ idemail, nombre, apellido, passwordhash: hashedPassword });
            res.status(200).json(CreateUsuarioss);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al agregar el usuario' });
        }
    } else {
        return res.status(400).send('Todos los campos son obligatorios');
    }
});
router.get('/',async(req,res)=>{
    try {
        const ReadAllRegistros=await usuarios.findAll()
        res.status(200).json(ReadAllRegistros)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'error obtenido de usuarios'})
    }
});
module.exports = router;