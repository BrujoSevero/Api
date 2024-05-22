const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const museoSchema = new mongoose.Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, required: true, unique: true },
    direccion: {
        localidad: {type: String, required: true},
        codigo_postal: {type: String, required: true},
        calle: {type: String, required: true}
    },
    telefono: {type: Number, required: false, unique: false},
    correo: { type: String, required: true },
    web: { type: String, required: true },
    horarios: { type: String, required: true },
    descripcion: { type: String, required: true },
    transporte: {
        metro: {type: String, required: true},
        bus: {type: String, required: true},
        renfe: {type: String, required: true},
        biciMad: {type: String, required: true},
        aparcamiento: {type: String, required: true}
    },
    ubicacion: {
        latitud: { type: Number, required: true },
        longitud: { type: Number, required: true }
    }
});



museoSchema.plugin(AutoIncrement, { inc_field: 'museoId' });

module.exports = mongoose.model('Museo', museoSchema);