let fs = require('fs')

let listadoPorHacer = []
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

}

const listado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualzar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }
    return false


}


const borrar = (descripcion) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB()
        return true
    }
    return false
}


const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}


module.exports = {
    crear,
    listado,
    actualzar,
    borrar
}