import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers";
import validarReceta from "../helpers/validacionReceta";

const router = Router();

router
  .route("/recetas")
  .get(listarRecetas)
  .post(validarReceta, crearReceta);

router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);

export default router;
