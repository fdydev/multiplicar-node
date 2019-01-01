const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido para la base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para el límite ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}