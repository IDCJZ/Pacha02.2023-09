/* Controllers */
const usuarioController = require('../controllers/usuario');
const juegoController = require('../controllers/juego');
const participacionController = require('../controllers/participacion');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Example project did not give you access to the api web services',
    }));

    app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
    app.get('/api/usuario/list', usuarioController.list);
    app.get('/api/usuario/find/username/:username', usuarioController.find);


    // Games
    app.post('/api/juego/create', juegoController.create);
    app.get('/api/juego/list', juegoController.list);
    app.get('/api/juego/find', juegoController.find);

    app.post('/api/participacion/create', participacionController.create);
    app.get('/api/participacion/list', participacionController.list);
    app.get('/api/participacion/find', participacionController.find);

};

