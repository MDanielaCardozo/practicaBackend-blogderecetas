import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarReceta = [
    check(
         "nombreReceta",
         "El nombre de la receta es obligatorio"
    ).notEmpty(),
    check(
        "nombreReceta",
        "El nombre de la receta debe tener entre 2 y 150 caracteres"
    ).isLength({ min: 2, max: 150 }),
    (req, res, next) => {
        resultadoValidacion(req, res, next)
    }
];

export default validarReceta;