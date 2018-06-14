let argv = require('./config/yargs').argv
let color = require('colors')
let porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break
    case 'listar':
        let listado = porHacer.listado()
        console.log('=======Por Hacer========='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('======================='.green);
        }
        break
    case 'actualizar':
        let resultado = porHacer.actualzar(argv.descripcion, argv.completado)
        console.log(resultado);
        break
    case 'borrar':
        let res = porHacer.borrar(argv.descripcion)
        console.log(res);
        break
    default:
        console.log('comando no es reconocido')
        break
}