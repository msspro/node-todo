const fs = require('fs');

let listadoPOrHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPOrHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar');
    });
};

const cargarDB = () => {
    try {
        listadoPOrHacer = require('../db/data.json');
    } catch (error) {
        listadoPOrHacer = [];
    }

};

const getListado = () => {
    cargarDB();
    return listadoPOrHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPOrHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log("indice", index);
    if (index >= 0) {
        listadoPOrHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPOrHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPOrHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPOrHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}