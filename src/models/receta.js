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
    }
});

const Receta = mongoose.model('producto', recetaSchema)

export default Receta;