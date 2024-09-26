const { Router } = require('express');
const querys = require('../controllers/controlles');
const router = Router();
router.post('/', async (req, res) => {
    const { usuario, destino, mensage } = req.body;
    const query = await querys.createMensaje(usuario, destino, mensage);
    return res.status(202).json(query);
});

module.exports = router;