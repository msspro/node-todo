//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
var colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')

let commando = argv._[0];

switch (commando) {
    case 'crear':
        {
            console.log('crear');
            let tarea = porHacer.crear(argv.descripcion);
            console.log(tarea);
            break;
        }
    case 'actualizar':
        {
            console.log('actualizar');
            let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
            break;
        }
    case 'listar':
        {
            let listado = porHacer.getListado();
            for (let tarea of listado) {
                console.log('================Por hacer============='.green);
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('======================================'.green);
            }
            break;
        }
    case 'borrar':
        {
            let borrado = porHacer.borrar(argv.descripcion);
            console.log(borrado);
            break;
        }
    default:
        {
            console.log('default');
        }
}