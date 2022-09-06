import { Router } from 'express';
import { borrarReceta, crearReceta, editarReceta, listarRecetas, obtenerReceta } from '../controllers/recetas.controllers';

const router = Router();

router
.route('/recetas')
.get(listarRecetas)
.post(crearReceta);

router
.route('/recetas/:id')
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta);

export default router;