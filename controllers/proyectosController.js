exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req, res) => {
    //res.send('enviaste el formulario');
    //Enviar a la consola lo que el usuario escribe
    // console.log(req.body); //req.body para acceder a los valores de los formularios

    //Validar que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }

    //Si ha errores
    if( errores.length > 0 ) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Proyecto',
            errores,
        });
    }else {
        //No hay errores
        //Insertar en la base de datos
        
    }
}