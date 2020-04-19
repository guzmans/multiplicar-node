
// Requireds
const fs = require('fs');    // Required que ya está en node
// const fs = require('express) // De otros
// const fs = require('./miarchivo) // Del proyecto

// fs.writeFile(file, data[, options], callback)
// El callback es para saber si se hizo o no


let crearArchivo = (base)=>{
    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }
        let data=''
        for ( let i=1; i<=10; i++){
            data += `${base} * ${i} = ` + base*i + `\n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`,data,{encoding: 'utf-8'}, (err)=>{
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`)
        })
    });
}
// module es un objeto GLOBAL disponible desde toda la aplicación
module.exports = {
    crearArchivo
}


// fs.readFile(`tablas/tabla-${base}.txt`, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });