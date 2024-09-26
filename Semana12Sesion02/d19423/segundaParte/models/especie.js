const mongoose = require('mongoose');

const especieSchema = new mongoose.Schema(
    {
        descripcion: String,
        activo: Boolean
    },
    { 
        timestamps: true 
    }
);

const Especie = mongoose.model('Especie', especieSchema);

module.exports = Especie;