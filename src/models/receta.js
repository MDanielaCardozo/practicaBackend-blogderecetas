import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 150,
        unique: true
    },
    imagen: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true,
        maxlength: 40
    },
    ingredientes: {
        type: String,
        require: true,
        maxlength: 190
    },
    descripcion: {
        type: String,
        require: true,
        maxlength: 1000
    }
});

const Receta = mongoose.model('producto', recetaSchema)

export default Receta;