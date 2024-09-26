const conection = require('../database/db');

const createMensaje = async (usuario, destino, mensage) => {
    const [query] = await conection.execute('insert into hackaton16.mensajes(usuario, destino, mensage) values (?,?,?)', [usuario, destino, mensage]);
    return query;
};

module.exports = { createMensaje };