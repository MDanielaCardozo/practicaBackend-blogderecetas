import Receta from "../models/receta"

export const crearReceta = async (req, res)=>{
    try {
        console.log(req.body)
        const recetaNueva = new Receta({
            nombreReceta: req.body.nombreReceta,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            ingredientes: req.body.ingredientes,
            descripcion: req.body.descripcion
        });
        await recetaNueva.save()
        res.status(201).json({
            mensaje: 'La receta fue creada exitosamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'La receta enviada no pudo ser creada'
        })
    }
}

export const listarRecetas = async (req, res)=>{
    try {
        const listarRecetas = await Receta.find();
        res.status(200).json(listarRecetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las recetas'
        })
    }
}

export const obtenerReceta = async (req, res)=>{
    try {
        console.log(req.params.id);
        const recetaBuscada = await Receta.findById(req.params.id);
        res.status(200).json(recetaBuscada);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar las recetas'
        })
    }
}

export const editarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La receta fue editada correctamente'
        })
    } catch (error) {
        console.log(400).json({
            mensaje: 'Error al intentar editar la receta'
        })
    }
}

export const borrarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La receta fue eliminada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'Error al intentar borrar la receta'
        })
    }
}