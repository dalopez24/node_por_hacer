const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean'
}

const argv = require('yargs')
    .command('crear', 'crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}