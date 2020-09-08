const descripcion = {
    demand: true,
    alias: 'd'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tares', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'borrar un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}