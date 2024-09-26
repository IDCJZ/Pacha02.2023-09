const conection = require('../config/db');

const createMensaje = async (usuario, destino, mensage) => {
    const [query] = await conection.execute('insert into hackaton14.mensajes(usuario, destino, mensage) values (?,?,?)', [usuario, destino, mensage]);
    return query;
};

module.exports = { createMensaje };