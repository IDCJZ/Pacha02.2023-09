const mongoose = require('mongoose');

const nacionalidadSchema = new mongoose.Schema(
    {
        descripcion: String,
        activo: Boolean
    },
    { 
        timestamps: true 
    }
);

const Nacionalidad = mongoose.model('Nacionalidad', nacionalidadSchema);

module.exports = Nacionalidad;