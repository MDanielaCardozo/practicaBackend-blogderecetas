export const crearReceta = (req, res)=>{
    res.send('crear una Receta en nuestra base de datos')
}

export const listarRecetas = (req, res)=>{
    res.send('enviar lista de Recetas')
}

export const obtenerReceta = (req, res)=>{
    res.send('Aqui envio un objeto Receta')
}

export const editarReceta = (req, res)=>{
    res.send('editamos Receta')
}

export const borrarReceta = (req, res)=>{
    res.send('borramos,eliminamos Receta')
}